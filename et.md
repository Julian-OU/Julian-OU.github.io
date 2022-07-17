# Electron transport in 2D material

## Hamiltonian

类似于石墨烯和硅烯，单层过渡金属二硫化物具有六角晶格结构，谷附近哈密顿量可以写做

$$H=\hbar\nu_F(\tau k_x\sigma_x+k_y\sigma_y)+\Delta\sigma_z+\tau s\lambda_++\tau s\lambda_-\sigma_z+U(x)-sh(x)$$

$$H=\begin{bmatrix}
    U_{\tau s}+\Delta_{\tau s}&\hbar v_F(\tau k_x-ik_y)\\
    \hbar v_F(\tau k_x-ik_y)&U_{\tau s}-\Delta_{\tau s}
\end{bmatrix}$$

其中$U_{\tau s}=\tau s\lambda_++U(x)-s h(x), \Delta_{\tau s}=\Delta+\tau s\lambda_-$，$\sigma$表示A、B两套子格的赝自旋矩阵，能量本征值为

$$E_{\pm}=U_{\tau s} \pm \sqrt{\Delta_{\tau s}^{2}+\left(\hbar v_{F} k\right)^{2}}$$

## Wave function

传输矩阵$M$用于表示样本**右边**波函数的系数与**左边**波函数的系数的线性关系。

设波函数通解为
$
\Psi(x,y)=\begin{bmatrix}
    \psi_1(x)\\
    \psi_2(x)
\end{bmatrix}\mathrm{e}^{\mathrm{i}k_yy}
$
，带入哈密顿本征方程$H\Psi=E\Psi$得

$$
\left\{
\begin{aligned}
    (U_{\tau s}+\Delta_{\tau s})\psi_1\mathrm{e}^{\mathrm{i}k_yy}+\hbar v_F(-\tau \mathrm{i}\frac{\mathrm{d}\psi_2}{\mathrm{d}x}-\mathrm{i}k_y\psi_2)\mathrm{e}^{\mathrm{i}k_yy}=E\psi_1\mathrm{e}^{\mathrm{i}k_yy}\\
    (U_{\tau s}-\Delta_{\tau s})\psi_2\mathrm{e}^{\mathrm{i}k_yy}+\hbar v_F(-\tau \mathrm{i}\frac{\mathrm{d}\psi_1}{\mathrm{d}x}+\mathrm{i}k_y\psi_1)\mathrm{e}^{\mathrm{i}k_yy}=E\psi_2\mathrm{e}^{\mathrm{i}k_yy}
\end{aligned}
\right.
$$
$$
\left\{
\begin{aligned}
    [E-(U_{\tau s}+\Delta_{\tau s})]\psi_1+\mathrm{i}\hbar v_F(\tau \frac{\mathrm{d}}{\mathrm{d}x}+k_y)\psi_2=0\\
    [E-(U_{\tau s}-\Delta_{\tau s})]\psi_2+\mathrm{i}\hbar v_F(\tau \frac{\mathrm{d}}{\mathrm{d}x}-k_y)\psi_1=0
\end{aligned}
\right.
$$
$$
\left\{
\begin{aligned}
    k_1\psi_1+\mathrm{i}(\tau \frac{\mathrm{d}}{\mathrm{d}x}+k_y)\psi_2=0\\
    k_2\psi_2+\mathrm{i}(\tau \frac{\mathrm{d}}{\mathrm{d}x}-k_y)\psi_1=0
\end{aligned}\right.
\quad k_1=\frac{E-(U_{\tau s}+\Delta_{\tau s})}{\hbar v_f}\quad k_2=\frac{E-(U_{\tau s}-\Delta_{\tau s})}{\hbar v_f}
$$
$$
\left\{
\begin{aligned}
    \frac{\mathrm{d}^2\psi_1}{\mathrm{d}x^2}+(k_1k_2-k_y^2)\psi_1=\frac{\mathrm{d}^2\psi_1}{\mathrm{d}x^2}+q^2\psi_1=0\\
    \frac{\mathrm{d}^2\psi_2}{\mathrm{d}x^2}+(k_1k_2-k_y^2)\psi_2=\frac{\mathrm{d}^2\psi_2}{\mathrm{d}x^2}+q^2\psi_2=0
\end{aligned}
\right. \quad q^2=k_1k_2-k_y^2=\frac{(E-U_{\tau s})^2-\Delta_{\tau s}^2}{(\hbar v_f)^2}-k_y^2
$$
设解为
$
\left\{
\begin{aligned}
    \psi_1=a\mathrm{e}^{\mathrm{i}qx}+b\mathrm{e}^{-\mathrm{i}qx}\\
    \psi_2=c\mathrm{e}^{\mathrm{i}qx}+d\mathrm{e}^{-\mathrm{i}qx}
\end{aligned}
\right.
$
，带入求解得
$$
\left\{
\begin{aligned}
&c=\frac{\mathrm{i} k_1}{\mathrm{i} \tau q+k_{y}} a=\frac{\hbar v_{F}\left(\tau q+\mathrm{i} k_{y}\right)}{E-U_{\tau s}+\Delta_{\tau s}} a=\frac{\hbar v_{F} k_{+}}{E-U_{\tau s}+\Delta_{\tau s}} a \\
&d=\frac{\mathrm{i} k_1}{-\mathrm{i} \tau q+k_{y}} b=\frac{-\hbar v_{F}\left(\tau q-\mathrm{i} k_{y}\right)}{E-U_{\tau s}+\Delta_{\tau s}} b=\frac{-\hbar v_{F} k_{-}}{E-U_{\tau s}+\Delta_{\tau s}} b
\end{aligned}
\right.
\quad k_\pm=\tau q\pm\mathrm{i}k_y
$$
$$
\Psi(x)=a
\begin{bmatrix}
    1\\
    \frac{\hbar v_{F} k_{+}}{E-U_{\tau s}+\Delta_{\tau s}}
\end{bmatrix}\mathrm{e}^{\mathrm{i}qx}+b
\begin{bmatrix}
    1\\
    \frac{-\hbar v_{F} k_{-}}{E-U_{\tau s}+\Delta_{\tau s}}
\end{bmatrix}\mathrm{e}^{-\mathrm{i}qx}
$$

## Transfer matrix

定义矩阵$P(x)$满足
$$
\begin{aligned}
    \Psi(x)&=\begin{bmatrix}
    \psi_1(x)\\
    \psi_2(x)
\end{bmatrix}
=\begin{bmatrix}
    \psi_1^+(x)&\psi_1^-(x)\\
    \psi_2^+(x)&\psi_2^-(x)
\end{bmatrix}
\begin{bmatrix}
    a\\
    b
\end{bmatrix}
=P(x)
\begin{bmatrix}
    a\\
    b
\end{bmatrix}\\
P(x)&=\begin{bmatrix}
    \psi_1^+(x)&\psi_1^-(x)\\
    \psi_2^+(x)&\psi_2^-(x)
\end{bmatrix}
=\begin{bmatrix}
    1&1\\
    \frac{\hbar v_{F} k_{+}}{E-U_{\tau s}+\Delta_{\tau s}}&\frac{-\hbar v_{F} k_{-}}{E-U_{\tau s}+\Delta_{\tau s}}
\end{bmatrix}
\begin{bmatrix}
    \mathrm{e}^{\mathrm{i}qx}&0\\
    0&\mathrm{e}^{-\mathrm{i}qx}
\end{bmatrix}\\
G&=\begin{bmatrix}
    1&1\\
    \frac{\hbar v_{F} k_{+}}{E-U_{\tau s}+\Delta_{\tau s}}&\frac{-\hbar v_{F} k_{-}}{E-U_{\tau s}+\Delta_{\tau s}}
\end{bmatrix}\quad
H(x)=\begin{bmatrix}
    \mathrm{e}^{\mathrm{i}qx}&0\\
    0&\mathrm{e}^{-\mathrm{i}qx}
\end{bmatrix}
\end{aligned}
$$
为方便编程，我们可以将$P(x)$进一步拆分为$G$和$H(x)$。在第$i$与$i+1$个区域的边界处波函数连续$\Psi_i(x_i)=\Psi_{i+1}(x_i)$，即
$$
P_i(x_i)\begin{bmatrix}
    a_i\\
    b_i
\end{bmatrix}=
P_{i+1}(x_i)\begin{bmatrix}
    a_{i+1}\\
    b_{i+1}
\end{bmatrix}\quad
\begin{bmatrix}
    a_{i+1}\\
    b_{i+1}
\end{bmatrix}=
P_{i+1}^{-1}(x_i)P_i(x_i)\begin{bmatrix}
    a_i\\
    b_i
\end{bmatrix}
$$
设$x_0$为隧穿结第一个区域的左侧起始处，$x_i$为第$i$个区域与第$x_{i+1}$个区域的边界处。假设有$n$个区域，那么就有
$$
\begin{bmatrix}
    a_{n+1}\\
    b_{n+1}
\end{bmatrix}=
M\begin{bmatrix}
    a_0\\
    b_0
\end{bmatrix}\quad
M=\prod_{i=n}^0 P_{i+1}^{-1}(x_i)P_i(x_i)
$$
称$M$为传输矩阵。

## Scattering matrix

散射矩阵$S$用于表示样本**出射**波函数的系数与**入射**波函数的系数的线性关系。

对于两端系统（$1$端和$2$端），波函数写为$\Psi(x)=a\Psi_+(x)+b\Psi_-(x)$，根据上一节传输矩阵的定义为
$$
\begin{bmatrix}
    a_2\\
    b_2
\end{bmatrix}
=M
\begin{bmatrix}
    a_1\\
    b_1
\end{bmatrix}
$$
对于电子的入射和出射，在样品左侧向右和在样品右侧向左运动为入射，在样品左侧向左和在样品右侧向右运动为出射，则散射矩阵可以定义为
$$
\begin{bmatrix}
    b_1\\
    a_2
\end{bmatrix}
=S
\begin{bmatrix}
    a_1\\
    b_2
\end{bmatrix}
$$
通过简单的计算，可以得到传输矩阵和散射矩阵之间的关系
$$
\begin{aligned}
    M&=\begin{bmatrix}
        M_{11}&M_{12}\\
        M_{21}&M_{22}
    \end{bmatrix}
    =\begin{bmatrix}
        S_{21}-S_{22}S_{11}/S_{12}&S_{22}/S_{12}\\
        -S_{11}/S_{12}&1/S_{12}
    \end{bmatrix}\\
    S&=\begin{bmatrix}
        S_{11}&S_{12}\\
        S_{21}&S_{22}
    \end{bmatrix}
    =\begin{bmatrix}
        -M_{21}/M_{22}&1/M_{22}\\
        M_{11}-M_{12}M_{21}/M_{22}&M_{12}/M_{22}
    \end{bmatrix}
\end{aligned}
$$

## Transmission and reflection

$r_{1(2)}$表示从1（2）端入射的电子的反射率，$t_{1(2)}$表示从1（2）端入射的电子的反射率，反射系数和透射系数可以由散射矩阵直接表示为
$$
S=\begin{bmatrix}
    r_1&t_2\\
    t_1&r_2
\end{bmatrix}
$$
如果只有1端入射电子，则反射率和透射率为
$$
\begin{aligned}
    R&=|r_1|^2=|S_{11}|^2=\left|\frac{M_{21}}{M_{22}}\right|^2\\
    T&=|t_1|^2=|S_{21}|^2=\left|M_{11}-\frac{M_{12}M_{21}}{M_{22}}\right|^2\\
    \mathrm{or\quad}T&=1-R=1-\left|\frac{M_{21}}{M_{22}}\right|^2
\end{aligned}
$$

## Conductance

用Landauer-Büttiker公式计算电导
$$
G_{\tau s}=\frac{e^{2}}{h}\frac{L_y}{2\pi} \int_{-k_{F}}^{k_{F}} T_{\tau s} \,\mathrm{d} k_{y}=G_{0} \frac{\sqrt{\left(E_{F}- U_{\tau s}^{(0)}\right)^{2}-\Delta_{\tau s}^{(0)2}}}{E_{F}} \int_{-\pi / 2}^{\pi / 2} T_{\tau s} \cos \theta \mathrm{d} \theta
$$
其中$G_{0}=e^{2} L_{y} E_{F} /\left(2 \pi h \hbar v_{F}\right)$，极化和磁阻分别为
$$
\begin{aligned}
    G_{\uparrow(\downarrow)}&=(G_{K\uparrow(\downarrow)}+G_{K'\uparrow(\downarrow)})/2\\
    G_{K(K')}&=(G_{K(K')\uparrow}+G_{K(K')\downarrow})/2\\
    G&=G_{K\uparrow}+G_{K\downarrow}+G_{K'\uparrow}+G_{K'\downarrow}\\
    P_{\tau(s)}&=(G_{K(\uparrow)}-G_{K'(\downarrow)})/G\\
    \mathrm{TMR}_P&=(G_P-G_{AP})/G_P\\
    \mathrm{TMR}_{AP}&=(G_P-G_{AP})/G_{AP}
\end{aligned}
$$

## Pumping

对于介观尺度下的系统，每个通道电流的变分表示为
$$
\delta I_{\tau s}=G_{\tau s}\delta V=\frac{2e^2}{h}\delta V\sum_{\alpha \in 1}\sum_{\beta \in 2}\left|S_{\alpha\beta}^{\tau s}\right|^2
$$
如果两端的势场$V_1(t)$和$V_2(t)$是周期性变化的，$V_1(t)=V_{01}+\delta V_1 \sin(\omega t)$，$V_2(t)=V_{02}+\delta V_2 \sin(\omega t+\varphi)$，电流的直流部分以来于$\partial S_{\alpha\beta}/\partial V$
$$
\delta I_{\tau s}=\frac{\omega e \sin \varphi \delta V_{1} \delta V_{2}}{2 \pi} \sum_{\alpha = 1} \sum_{\beta= 1,2} \Im \frac{\partial S_{\alpha \beta}^{{\tau s*}}}{\partial V_{1}} \frac{\partial S_{\alpha \beta}^{{\tau s}}}{\partial V_{2}}
$$
当$\delta V\ll V_0$时，$S$对$\delta V$的相应可以看作是线性的，即
$$
\frac{\partial S_{\alpha\beta}}{\partial V_i}=\frac{S(V_{i0}+\delta V_i/2)-S(V_{i0}+\delta V_i/2)}{\delta V_i}=const.
$$
在二维系统中，考虑横向波矢$k_y$，类似于电导，由Landauer-Büttiker公式有
$$
I_{\tau s}=\frac{L_y}{2\pi}\int_{k_F}^{k_F}\delta I_{\tau s}\,\mathrm{d}k_y=I_0\delta V_1\delta V_2\int_{-\pi/2}^{\pi/2}\sum_{\alpha = 1} \sum_{\beta= 1,2} \Im \frac{\partial S_{\alpha \beta}^{{\tau s*}}}{\partial V_{1}} \frac{\partial S_{\alpha \beta}^{{\tau s}}}{\partial V_{2}}\cos\theta\,\mathrm{d}\theta
$$
其中$I_0=q_0L_y\omega e \sin \phi/(2\pi)^2$，$q_0=\sqrt{\left(E_{F}- U_{\tau s}^{(0)}\right)^{2}-\Delta_{\tau s}^{(0)2}}/(\hbar v_F)^2$，自旋流、总电流和自旋极化定义为
$$
I_s=I_\uparrow-I_\downarrow\qquad I_c=I_\uparrow+I_\downarrow\quad P_s=\frac{I_\uparrow-I_\downarrow}{I_\uparrow+I_\downarrow}
$$
