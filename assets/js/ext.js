// 如果你需要在微信浏览器中分享，那么你需要设置额外的微信配置
// 特别提示一下微信分享有一个坑，不要分享安全域名以外的链接(具体见jssdk文档)，否则会导致你配置的文案无效
// 创建实例应该带参数
var nativeShare = new NativeShare({
    wechatConfig: {
        appId: '',
        timestamp: '',
        nonceStr: '',
        signature: '',
    },
    // 让你修改的分享的文案同步到标签里，比如title文案会同步到<title>标签中
    // 这样可以让一些不支持分享的浏览器也能修改部分文案，默认都不会同步
    syncDescToTag: true,
    syncIconToTag: true,
    syncTitleToTag: true,
})

// 你也可以在setConfig方法中设置配置参数
nativeShare.setConfig({
    wechatConfig: {
        appId: '',
        timestamp: '',
        nonceStr: '',
        signature: '',
    }
})


// 设置分享文案
nativeShare.setShareData({
    link: location.href,
    // 不要过于依赖以下两个回调，很多浏览器是不支持的
    success: function () {
        alert("分享成功")
    },
    fail: function () {
        alert("分享失败")
    }
})


//分享按钮
function share(command) {
    // 唤起浏览器原生分享组件（如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData）
    try {
        nativeShare.call(command)
        // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
        // 类似的命令下面有介绍
    } catch (err) {
        // 如果不支持，你可以在这里做降级处理
    }
}


//收藏按钮
function favor() {
    // 添加到浏览器收藏组件（如果不支持，将弹出信息）
    try {
        window.external.addFavorite(location.href, document.title);
    } catch (e) {
        try {
            window.sidebar.addPanel(document.title, location.href, "");
        } catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

// jQuery.get("/sidebar.html", function (data) {
//     document.getElementById("sidebar").firstElementChild.innerHTML=data
// });


//返回顶端
window.onload = function () {
    // 1.找到页面中的按钮
    var totop = document.getElementById("totop");
    totop.style.display ="none";
    var timer = null;

    // 2. 给按钮绑定点击事件
    totop.onclick =function () {
        // 周期性定时
        timer = setInterval(function () {
            // 3.获取滚动条距离浏览器顶端的距离
            var backTop = document.documentElement.scrollTop || 
            document.body.scrollTop;

            // 越滚越慢
            speedTop =backTop/5;
            document.documentElement.scrollTop=backTop-speedTop;
            if(backTop==0){
                clearInterval(timer);
            }
        },30)
    }
    // 设置临界值
    var pageHeight =700;
    window.onscroll =function () {
        var backTop = document.documentElement.scrollTop || 
        document.body.scrollTop;
        if(backTop>pageHeight){
            totop.style.display="block";
        }else{
            totop.style.display="none";
        }

    }
}


//从md文件加载文章
function loaddata() {
    // 获取当前位置
    const posi = document.location.toString().split("//")[1].split("/");
    const kind = posi[1];
    const name = posi[2].split(".")[0];
    // 从csv读取记录并匹配
    d3.csv("/assets/db/postdata.csv", function (data) {
        if (data.kind == kind & data.name == name) {
            const user = data.user;
            const tags = data.tags.split("|");
            // 导入md文件
            jQuery.get(name+".md", function (data) {
                const content = document.getElementById("content");
                data = data.replace(/_/g, "\\$&");
                data = data.replace(/\\\\|\\\{|\\\}|\\\,/g, "\\\\$&");
                data = data.substring(data.indexOf("#"));
                const titleend = data.indexOf("\n");
                document.title = data.slice(1, titleend).replace(/[<](sub|sup|\/sub|\/sup)[>]/g,"") + " | 一只太阳猪的故事";
                document.getElementById("title").innerHTML = data.slice(1, titleend);
                content.innerHTML = marked.parse(data.substring(titleend));
                renderMathInElement(content);
            });
            const fragment = document.createDocumentFragment();
            var li = document.createElement("li");
            li.className = "icon solid fa-user";
            li.innerHTML = "<span>" + user + "</span>";
            fragment.append(li);
            var li = document.createElement("li");
            li.className = "icon solid fa-calendar-days";
            li.innerHTML = "<span>" + name.substring(0,4)+"-"+name.substring(4,6)+"-"+name.substring(6,8) + "</span>";
            fragment.append(li);
            var li = document.createElement("li");
            li.className = "icon solid fa-clock-rotate-left";
            li.innerHTML = "<span id=\"busuanzi_value_page_pv\"></span><span class=\"next\"> 次阅读</span>";
            fragment.append(li);
            for (var i = 0; i < tags.length; i++) {
                let li = document.createElement("li");
                li.className = "icon solid fa-tags";
                li.innerHTML = "<a href=\"#\">" + tags[i] + "</a>";
                fragment.append(li);
            }
            document.getElementById("tags").append(fragment);
        }
    });
    
}

// 加载一篇文章标题到目录
function loadpost(data) {
    const article = document.createElement("article")
    const kind =data.kind
    const name = data.name;
    const user = data.user
    const title = data.title
    const abstract = data.abstract;
    const a = document.createElement("a");
    a.className = "image";
    a.href = "/" + kind + "/" + name + ".html"
    a.innerHTML = "<img src=\"https://julian-blog.oss-cn-chengdu.aliyuncs.com/"+kind+"/images/" + name + ".png\"/>";
    article.append(a);
    const h = document.createElement("h3");
    h.innerHTML = title;
    article.append(h);
    const tags = document.createElement("ul");
    tags.className="tags"
    const auth = document.createElement("li");
    auth.className = "icon solid fa-user";
    auth.innerHTML = "<span>" + user + "</span>";
    tags.append(auth);
    const date = document.createElement("li");
    date.className = "icon solid fa-calendar-days";
    date.innerHTML = "<span>" + name.substring(0,4)+"-"+name.substring(4,6)+"-"+name.substring(6,8) + "</span>";
    tags.append(date);
    article.append(tags);
    const p = document.createElement("p");
    p.textContent = abstract;
    article.append(p);
    const actions = document.createElement("ul");
    actions.className = "actions";
    actions.innerHTML = "<li><a href=/" + kind + "/" + name + ".html class=\"button\">查看详细</a></li>";
    article.append(actions);
    return article;
}

//从数据库加载目录
function loadmenu () {
    // 获取当前位置
    const kind = document.location.toString().split("//")[1].split("/")[1];
    // 从CSV读取记录并匹配类别
    const fragment = document.createDocumentFragment();
    d3.csv("/assets/db/postdata.csv", function (data) {
        if (data.kind == kind) {
            post= loadpost(data)
            fragment.append(post);
        }
        document.getElementById("posts").append(fragment);
    });
}


//从数据库加载精选
function loadselected () {
    // 从CSV读取记录并匹配精选
    const fragment = document.createDocumentFragment();
    d3.csv("/assets/db/postdata.csv", function (data) {
        if (data.selected) {
            post= loadpost(data)
            fragment.append(post);
        }
        document.getElementById("posts").append(fragment);
    });
}

// 从数据库搜索
function search () {
    const keyword = decodeURI(document.location.toString().split("=")[1]);
    // 从CSV文件读取记录并查找
    const fragment = document.createDocumentFragment();
    d3.csv("/assets/db/postdata.csv", function (data) {
        if (data.title.includes(keyword) || data.tags.includes(keyword) || data.selected.includes(keyword)) {
            post = loadpost(data)
            fragment.append(post);
        }
        document.getElementById("posts").append(fragment);
    });String.includes

}