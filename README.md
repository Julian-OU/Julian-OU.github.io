# 编程环境准备

注：
1. Windows终端中的命令，`>`不用输入；Ubuntu终端中的命令`$`不用输入。这种符号只是一个标记，用于表示命一条命令的开始。
2. 关于vim如何使用，可以自行百度，简单说，用`i`或者`insert`键进入或退出编辑模式，当不处于编辑模式时，按`shift`+`;`可以输入命令，`w`为保存，`q`为退出，`wq`为保存并退出，`q!`为强制退出。

## Ubuntu环境配置

### 安装WSL-Ubuntu

1. 设置->应用->可选功能->更多Windows功能，勾选“Hyper-V”、“适用于Linux的Windows子系统”、“虚拟机平台”，如果没有的选项就不用勾选。
2. 设置->隐私和安全->开发者选项，打开“开发人员模式”。
3. 下载并安装系统。方案一：在Microsoft store搜索“Ubuntu”进行安装；方案二：Win+R，输入`powershell`，在Windows终端中输入
   ```
   > wsl --install
   ```
   等待大概十几分钟就可以安装完毕。
4. 第一次进入系统，需要初始化几分钟。提示`Enter new UNIX username：`时，输入自定义用户名，建议短一些。提示`New password:`时，输入自定义密码，建议六位数字即可，会经常用到。
5. 在开始->应用程序中，找到Ubuntu，点开即可使用。或者在Microsoft store安装“Windows terminal”，在下拉选项卡里可以找到Ubuntu。

### 更换软件源（可选）

1. 如果没有VPN的话，建议更换软件源，以加快软件安装以及更新速度。
2. 建议使用清华镜像源https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/。
3. 查看系统版本，在Ubuntu终端中输入
   ```
   $ wslfetch
   ```
   可以看到`Release: `项为即为版本号，例如`22.04 LTS`、`20.04 LTS`等。
4. 在Ubuntu终端中输入
   ```
   $ sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
   $ sudo vim /etc/apt/sources.list
   ```
   根据系统版本号替换为对应的内容。

### WSL-Hello-sudo（可选）

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

### 全面中文支持（可选）

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
3. 导入Windows字体，在Ubuntu终端中输入
   ```
   $ sudo ln -s /mnt/c/Windows/Fonts /usr/share/fonts/font
   $ fc-cache -fv
   ```
4. 重新启动WSL，以管理员模式在Windows命令行中输入
   ```
   > net stop LxssManager
   > net start LxssManager
   ```

### 安装图形化软件（可选）

1. 使用图形化软件可以更加方便的管理和查看Ubuntu系统下的文件，例如图片、文档等。
2. 在Ubuntu终端输入
   ```
   $ sudo apt install nautilus eog evince font-manager
   ```

## Python环境配置

### Anaconda3

1. 下载Anaconda3。方案一：在Windows中下载安装包，https://repo.anaconda.com/archive/Anaconda3-2022.05-Linux-x86_64.sh；方案二：在Ubuntu中终端中输入
   ```
   $ wget https://repo.anaconda.com/archive/Anaconda3-2022.05-Linux-x86_64.sh
   ```
2. 安装Anaconda3，在在Ubuntu中终端中输入
   ```
   $ bash Anaconda3-2022.05-Linux-x86_64.sh
   ```
3. 看到终端最后一行提示有`--MORE--`，按回车，看到提示输入`yes`或`no`时，全部输入`yes`。

### GPU计算库（可选）
1. 如果电脑里有NVIDIA显卡，可以安装`cupy`和`pytorch`进行GPU运算。
2. 根据显卡型号安装最新驱动程序https://www.nvidia.cn/Download/index.aspx?lang=cn。
3. 安装`pytorch`，在Ubuntu终端中输入
   ```
   $ conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch
   ```
4. 安装`cupy`，在Ubuntu终端中输入
   ```
   $ pip install cupy-cuda113
   ```
5. `cupy`也可以安装其他的版本，在Ubuntu终端中输入
   ```
   $ pip install cupy-cuda11X
   ```
   但是必须安装对应的cudatoolkit。方案一：利用conda安装cudatoolkit，在Ubuntu终端中输入
   ```
   $ conda install cudatoolkit=11.X
   ```
   利用conda安装时，只能安装一种版本的cudatoolkit。方案二：利用apt安装cudatoolkit，在Ubuntu终端中输入
   ```
   $ wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
   $ sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
   $ sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/3bf863cc.pub
   $ sudo add-apt-repository "deb https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/ /"
   $ sudo apt-get update
   $ sudo apt-get -y install cuda=11.X
   $ vim ~/.bashrc
   ```
   在文末添加内容
   ```
   export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64
   export PATH=$PATH:/usr/local/cuda/bin
   export CUDA_HOME=$CUDA_HOME:/usr/local/cuda
   ```
   激活环境变量
   ```
   $ source ~/.bashrc
   ```
