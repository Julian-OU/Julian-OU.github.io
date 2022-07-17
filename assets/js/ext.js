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

function share(command) {
    // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
    try {
        nativeShare.call(command)
        // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
        // 类似的命令下面有介绍
    } catch (err) {
        // 如果不支持，你可以在这里做降级处理
    }
}

function favor() {
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

function loaddata() {
    // 从csv读取记录并匹配
    const url = document.location.toString().split("//")[1];
    const pos = url.split("/");
    const kind = pos[1];
    const name = pos[2].split(".")[0];
    d3.csv("/assets/db/postdata.csv", function (data) {
            if (data.kind == kind & data.name == name) {
                const user = data.user;
                const tags = data.tags.split("|");
                // 导入md文件
                jQuery.get(name+".md", function (data) {
                    const content = document.getElementById("content");
                    data = data.replace(/_/g, "\\$&");
                    data = data.replace(/\\\\|\\\{|\\\}/g, "\\\\$&");
                    const titlestart = data.indexOf("#");
                    data = data.substring(titlestart);
                    const titleend = data.indexOf("\n");
                    document.title = data.slice(1, titleend) + " | 一只太阳猪的故事";
                    document.getElementById("title").innerHTML = data.slice(1, titleend);
                    content.innerHTML = marked.parse(data.substring(titleend));
                    renderMathInElement(content);
                });
                let fragment = document.createDocumentFragment();
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
                        li.innerHTML = "<span>" + tags[i] + "</span>";
                        fragment.append(li);
                }
                document.getElementById("tags").append(fragment);
                return 0;
        }
    });
    
}