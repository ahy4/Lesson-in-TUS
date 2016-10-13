# 2章 集結式(resultant)

## 定義2.1(終結式)

$$
f(X) = a_0X^n+a_1X^{n-1}+...+a_m (a_0 \neq 0)\\
g(X) = b_0X^n+b_1X^{n-1}+...+b_n (b_0 \neq 0)\\
f(X),g(X)\in K[X]
$$

に対して以下の行列をfとgのシルベスター行列とよび、

Syl(f,g)で表す

<!--$$
\begin{pmatrix}
a_0 & 0 & ... & 0 & b_0 & 0 & .. & 0 \\
a_1 & a_0&&&&b_0&&0\\
&&&0&&&&0 
\end{pmatrix}
$$-->

例

$$
f(X)=2X^2+3X+1\\
g(X)=X^3+2X^2-1 \in \Bbb Q
$$

Syl(f,g)は

$$
\begin{pmatrix}
2&0&0&1&0\\
3&2&0&2&1\\
1&3&2&0&2\\
0&1&3&-1&0\\
1&0&1&0&-1\\
\end{pmatrix}
$$

3列、２列で区切られている 


## 定理2.1

f(X)とg(X)が共通因子をもつ

<=>

R(f,g) ≠ 0

## 定理2.2

$Res(f, g) \in <f, g>$

実は

$Res(f,g)=sf+tg$

なる $s,t\in K[X]$ で

s, tの各係数は$a_0,...,a_n,b_0,...,b_n$

の整式(整数係数の多項式)として表される

## なんかの例(見てなかったけど重要そう)

$$
f_1,f_2,f_3\in\Bbb Q[X,Y,Z] \\
f_i=0
$$

を解きたい

$$
g_1=Res(f_1,f_2,z)~~(\in<f_1,f_2>)\\
g_2=Res(f_1,f_3,z)~~\in\Bbb Q[X,Y](\in<f_1,f_3>)\\
h=Res(g_1,g_2,Y)\in \Bbb Q[X]\\
\rightarrow\\
h\in <f_1,f_2,f_3>
$$


