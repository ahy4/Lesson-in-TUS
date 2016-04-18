# 3

## 3.1 関数の性質１

- 関数が全て線形(一次式)
  - 線形計画問題 Linear Programming problem(LP)
- 関数の一部 or 全てが非線形
  - 非線形計画問題 Nonlinear Programming problem(NLP)
- 特に、関数が二次式
  - 二次計画問題 Quadratic Programming problem(QP)
- 関数が分数(有理式)
  - 分数計画問題 Fractional ~~
- 関数が多項式
  - 多項式計画問題 Poly ~~
- 目的関数が２乗式
  - 最小二乗問題 Least Squares ~~

## 3.2 関数の性質

- 関数や領域が凸
  - 凸(complex)計画問題

※他にあるMP問題
- 確率計画
  - probability programming
- 動的計画
  - dynamic programming

### 制約付き最小化問題

- 最小化 $f(x)$_
- 制約条件 $x \in C \subset \Bbb R$
  ただし $x=(x_1, ..., x_n)^T$

特にCが式で管理されて

制約条件
  - $g_i(x) = 0$ (等式制約)
  - $h_j(x) \leq 0$ (不等式制約)

ただし、
  - $f: \Bbb R^n \rightarrow \Bbb R$ 目的関数
  - $g_i: \Bbb R^n \rightarrow \Bbb R$ 制約関数
  - $h_j: \Bbb R^n \rightarrow \Bbb R$ 制約関数

ベクトル表現


$(P)\Bigg\vert\begin{align} min_{s.t.}f(x)\\ g(x)=\boldsymbol 0\\ h(x)\leq \boldsymbol 0\end{align}$
$\Leftrightarrow min\{f(x)|g(x)=\boldsymbol 0, h(x) \leq \boldsymbol 0\}$

$x^k \in \Bbb R^n$ が最小化問題(P)の最適解である

$\overset{def}{\Leftrightarrow}$

$f(x^k) \geq f(x), \forall x \in C := \{x\in \Bbb R | g(x) = \boldsymbol 0, h(x) \leq \boldsymbol 0\}$

かつ$x^k\in C$

この時関数値f(x^k) を(P)の最適値という


最小化問題と最大化問題は相互に変換可能

$x^k$は最小化問題( P )の(最小)解

$\Leftrightarrow$

$x^k$は最大計画問題 max{-f(x)|g(x)=0, h(x)<=0}

よって、原則として最小化に限定し、「最適化＝最小化」と解釈する


### LP(Linear Programming)問題

$min\ c_1x_1+c_2x_2+...+c_nx_n$

s.t.

$a_{11}x_1+...+a_{1n}x_n = a_1$

.....

$a_{m1}x_1+...+a_{mn}x_n = a_m$

(等式制約)

$b_{11}x_1+...+b_{1n}x_n \leq b_1$

.....

$b_{m1}x_1+...+b_{mn}x_n \leq b_m$

(不等式制約)

これを、以下のようにかける：

$\begin{align}min\ \Bbb c^T\Bbb x \\ s.t. A\Bbb x = \Bbb a \\B\Bbb x \leq \Bbb b\end{align}$

$where$

$A = \left[
    \begin{array}{rrr}
      a_{11} & ... & a_{1n} \\
      ... & ... & ... \\
      a_{m1} & ... & a_{mn}
    \end{array}
  \right] \in \Bbb R^{mn}$

$B = \left[
    \begin{array}{rrr}
      b_{11} & ... & b_{1n} \\
      ... & ... & ... \\
      b_{k1} & ... & b_{kn}
    \end{array}
  \right] \in \Bbb R^{kn}$

#### LP(等式標準形)

$\begin{align}min\ \Bbb c^T\Bbb x \\ s.t. A\Bbb x = \Bbb b \\\Bbb x \geq \Bbb 0\end{align}$

### QP(線形制約)問題　その１

$min f(x) = \frac{1}{2}\Bbb x^TQ\Bbb{x} + \Bbb c^T\Bbb x$

$s.t.$

$A\Bbb x = \Bbb a$

$B\Bbb x \leq \Bbb b$

ただし、$Q=(q_{ij}), Qは対称行列$
