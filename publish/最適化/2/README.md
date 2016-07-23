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

- 最小化 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28x%29">_
- 制約条件 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%20%5Cin%20C%20%5Csubset%20%5CBbb%20R">
  ただし <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%3D%28x_1%2C%20...%2C%20x_n%29%5ET">

特にCが式で管理されて

制約条件
  - <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20g_i%28x%29%20%3D%200"> (等式制約)
  - <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20h_j%28x%29%20%5Cleq%200"> (不等式制約)

ただし、
  - <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%3A%20%5CBbb%20R%5En%20%5Crightarrow%20%5CBbb%20R"> 目的関数
  - <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20g_i%3A%20%5CBbb%20R%5En%20%5Crightarrow%20%5CBbb%20R"> 制約関数
  - <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20h_j%3A%20%5CBbb%20R%5En%20%5Crightarrow%20%5CBbb%20R"> 制約関数

ベクトル表現


<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28P%29%5CBigg%5Cvert%5Cbegin%7Balign%7D%20min_%7Bs.t.%7Df%28x%29%5C%5C%20g%28x%29%3D%5Cboldsymbol%200%5C%5C%20h%28x%29%5Cleq%20%5Cboldsymbol%200%5Cend%7Balign%7D">
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CLeftrightarrow%20min%5C%7Bf%28x%29%7Cg%28x%29%3D%5Cboldsymbol%200%2C%20h%28x%29%20%5Cleq%20%5Cboldsymbol%200%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%5Ek%20%5Cin%20%5CBbb%20R%5En"> が最小化問題(P)の最適解である

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Coverset%7Bdef%7D%7B%5CLeftrightarrow%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28x%5Ek%29%20%5Cgeq%20f%28x%29%2C%20%5Cforall%20x%20%5Cin%20C%20%3A%3D%20%5C%7Bx%5Cin%20%5CBbb%20R%20%7C%20g%28x%29%20%3D%20%5Cboldsymbol%200%2C%20h%28x%29%20%5Cleq%20%5Cboldsymbol%200%5C%7D">

かつ<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%5Ek%5Cin%20C">

この時関数値f(x^k) を(P)の最適値という


最小化問題と最大化問題は相互に変換可能

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%5Ek">は最小化問題( P )の(最小)解

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CLeftrightarrow">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%5Ek">は最大計画問題 max{-f(x)|g(x)=0, h(x)<=0}

よって、原則として最小化に限定し、「最適化＝最小化」と解釈する


### LP(Linear Programming)問題

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20min%5C%20c_1x_1+c_2x_2+...+c_nx_n">

s.t.

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a_%7B11%7Dx_1+...+a_%7B1n%7Dx_n%20%3D%20a_1">

.....

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a_%7Bm1%7Dx_1+...+a_%7Bmn%7Dx_n%20%3D%20a_m">

(等式制約)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b_%7B11%7Dx_1+...+b_%7B1n%7Dx_n%20%5Cleq%20b_1">

.....

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b_%7Bm1%7Dx_1+...+b_%7Bmn%7Dx_n%20%5Cleq%20b_m">

(不等式制約)

これを、以下のようにかける：

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbegin%7Balign%7Dmin%5C%20%5CBbb%20c%5ET%5CBbb%20x%20%5C%5C%20s.t.%20A%5CBbb%20x%20%3D%20%5CBbb%20a%20%5C%5CB%5CBbb%20x%20%5Cleq%20%5CBbb%20b%5Cend%7Balign%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20where">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20A%20%3D%20%5Cleft%5B%0A%20%20%20%20%5Cbegin%7Barray%7D%7Brrr%7D%0A%20%20%20%20%20%20a_%7B11%7D%20%26%20...%20%26%20a_%7B1n%7D%20%5C%5C%0A%20%20%20%20%20%20...%20%26%20...%20%26%20...%20%5C%5C%0A%20%20%20%20%20%20a_%7Bm1%7D%20%26%20...%20%26%20a_%7Bmn%7D%0A%20%20%20%20%5Cend%7Barray%7D%0A%20%20%5Cright%5D%20%5Cin%20%5CBbb%20R%5E%7Bmn%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20B%20%3D%20%5Cleft%5B%0A%20%20%20%20%5Cbegin%7Barray%7D%7Brrr%7D%0A%20%20%20%20%20%20b_%7B11%7D%20%26%20...%20%26%20b_%7B1n%7D%20%5C%5C%0A%20%20%20%20%20%20...%20%26%20...%20%26%20...%20%5C%5C%0A%20%20%20%20%20%20b_%7Bk1%7D%20%26%20...%20%26%20b_%7Bkn%7D%0A%20%20%20%20%5Cend%7Barray%7D%0A%20%20%5Cright%5D%20%5Cin%20%5CBbb%20R%5E%7Bkn%7D">

#### LP(等式標準形)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbegin%7Balign%7Dmin%5C%20%5CBbb%20c%5ET%5CBbb%20x%20%5C%5C%20s.t.%20A%5CBbb%20x%20%3D%20%5CBbb%20b%20%5C%5C%5CBbb%20x%20%5Cgeq%20%5CBbb%200%5Cend%7Balign%7D">

### QP(線形制約)問題　その１

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20min%20f%28x%29%20%3D%20%5Cfrac%7B1%7D%7B2%7D%5CBbb%20x%5ETQ%5CBbb%7Bx%7D%20+%20%5CBbb%20c%5ET%5CBbb%20x">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20s.t.">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20A%5CBbb%20x%20%3D%20%5CBbb%20a">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20B%5CBbb%20x%20%5Cleq%20%5CBbb%20b">

ただし、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20Q%3D%28q_%7Bij%7D%29%2C%20Q%u306F%u5BFE%u79F0%u884C%u5217">
