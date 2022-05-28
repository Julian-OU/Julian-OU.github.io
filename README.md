# 编程环境准备

注：
1. Windows终端中的命令，`>`不用输入；Ubuntu终端中的命令`$`不用输入。这种符号只是一个标记，用于表示命一条命令的开始。
2. 关于vim如何使用，可以自行百度，简单说，用`i`或者`insert`键进入或退出编辑模式，当不处于编辑模式时，按`shift`+`;`可以输入命令，`w`为保存，`q`为退出，`wq`为保存并退出，`q!`为强制退出。

## 安装WSL-Ubuntu

1. 设置->应用->可选功能->更多Windows功能，勾选“Hyper-V”、“适用于Linux的Windows子系统”、“虚拟机平台”，如果没有的选项就不用勾选。
2. 设置->隐私和安全->开发者选项，打开“开发人员模式”。
3. 方案一：在Microsoft store搜索“Ubuntu”进行安装；方案二：Win+R，输入“powershell”，在Windows终端中输入
   ```
   > wsl --install
   ```
   等待大概十几分钟就可以安装完毕
4. 第一次进入系统，需要初始化几分钟。提示“Enter new UNIX username：”时，输入自定义用户名，建议短一些。提示“New password”时，输入自定义密码，建议六位数字即可，会经常用到。
5. 在开始->应用程序中，找到Ubuntu，点开即可使用。或者在Microsoft store安装“Windows terminal”，在下拉选项卡里可以找到Ubuntu。

## 配置WSL-Ubuntu（可选步骤）

### WSL-Hello-sudo

1. 如果计算机安装了指纹识别、人脸识别或者虹膜识别等Windows Hello生物识别设别，可以安装WSL-Hello-sudo，避免反复输入密码的繁琐。

2. 在Ubuntu终端中输入
   ```
   $ wget http://github.com/nullpo-head/WSL-Hello-sudo/releases/latest/download/release.tar.gz
   $ tar xvf release.tar.gz
   $ cd release
   $ ./install.sh
   ```
   或者跟随教程https://github.com/nullpo-head/WSL-Hello-sudo进行安装。
3. 在以后每次执行`sudo`语句时可以使用Windows hello进行身份认证。

### 全面中文支持

1. 修改语言设置，在Ubuntu终端中输入
   ```
   $ locale-gen zh_CN.UTF-8
   $ sudo vim /etc/default/locale
   ```
   将内容修改为`LANG=zh_CN.UTF-8`。
2. 安装语言包，在Ubuntu终端中输入
   ```
   $ sudo apt update
   $ sudo apt install language-pack-zh-hans language-pack-gnome-zh-hans language-pack-kde-zh-hans manpages-zh
   ```
3. 配置中文字体，在Ubuntu终端中输入
   ```
   $ sudo ln -s /mnt/c/Windows/Fonts /usr/share/fonts/font
   $ fc-cache -fv
   ```
4. 重新启动WSL，以管理员模式在Windows命令行中输入
   ```
   > net stop LxssManager
   > net start LxssManager
   ```
