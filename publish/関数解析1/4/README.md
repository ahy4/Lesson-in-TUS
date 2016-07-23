## 2.2 完備距離空間

### [Def 2.4]

(X, d): **metric space**(距離空間)

(X, d)の任意の**Cauchy列**に対して

この点列の極限が存在して

それが「Xに軸する時、Xは **完備(Complete)** という

→完備距離空間


### 完備化(Completion)

必ずしも完備でない距離空間 (X, d) に対して

Xに新しい点を追加→ <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Ctilde%20X%20%5Csupset%20X">

さらに <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Ctilde%20X">に

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Ctilde%20d%28x%2C%20y%29%20%3D%20d%28x%2C%20y%29%7E%7E%7Ex%2C%20y%20%5Cin%20X">

となる <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Ctilde%20d"> を導入して

完備距離空間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28%5Ctilde%20X%2C%20%5Ctilde%20d%29"> を構成することを完備という

### [Theorem 2.1] 距離空間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cmathbb%20R%5EN">の完備性

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cmathbb%20R">は距離 d(x, y) = |x - y| のもとで完備距離空間

2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cmathbb%20R%5En">,<br>
  [例1 (b)] <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20d_p%28x%2C%20y%29%20%3D%20%28%5Cdisplaystyle%20%5Csum_%7Bi%3D1%7D%5E%7BN%7D%7Cx_i-y_i%7C%5Ep%29%5E%7B%5Cfrac%7B1%7D%7Bp%7D%7D"><br>
  [例1 (c\)] <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20d_%7B%5Cinfty%7D%28x%2C%20y%29%20%3D%20%5Cdisplaystyle%20%5Cmax_%7B1%5Cleq%20i%5Cleq%20N%7D%20%7Cx_i%20-%20y_i%7C">

-> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20d_p">のもとで <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CBbb%20R%5En">は完備距離空間になる


### [Theorem 2.1] 距離空間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CBbb%20R%5En">の完備性

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CBbb%20R">は距離d(x,y)=|x, y|のもとで完備距離空間になる

2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28%5CBbb%20a_m%29_%7Bm%3D1%7D%5E%7B%5Cinfty%7D"> がcauchy列なので<br>
  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20%5Cvarepsilon%3E0%2C%20%5Cexists%20N_1%5Cin%20%5CBbb%20N%7E%7E%7EN_1%20%3C%20m_1%2C%20m_2%20%5CRightarrow%20d%28%5CBbb%20a_%7Bm_1%7D%2C%20%5CBbb%20a_%7Bm_2%7D%29%3C%5Cvarepsilon">


### [Example 2.3] <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20l%5Ep">の完備性

距離空間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28l%5Ep%2C%20d_p%29%281%5Cleq%20p%3C%20%5Cinfty%29"> が完備である


l^pとは

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%5Cin%20l%5Ep%2C%20%5CBbb%20x%20%3D%20%28x_1%2C%20...%2C%20x_n%29">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28%28%5Cdisplaystyle%20%5Csum_%7Bi%3D1%7D%5E%7B%5Cinfty%7D%7Cx_i%7C%5Ep%29%5E%7B%5Cfrac%7B1%7D%7Bp%7D%7D%3C%5Cinfty%29">
