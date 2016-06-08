5/31

１． [Property 2.2]

(a)

(i)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20U_i%20%7E%20%28i%20%3D%201%2C%20...%2C%20n%29%3A%7E%20open%7Eset"> (有限個)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5CRightarrow%20%5Ccap_%7Bi%3D1%7D%5En%20U_i"> はopen set になる

(ii)

加算無限この閉集合U_i(i=1,2,...)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5CRightarrow%20U_i"> は閉集合になるとは限らない

(b)

閉集合について、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S_i%20%3D%20X%20%5Cbackslash%20U_i">

・有限個→ <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Ccup_%7Bi%3D1%7D%5En%20S_i">はclosed set

・加算無限個→ <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Ccup_%7Bi%3D1%7D%5En%20S_i">は閉集合になるとは限らない

２．[Def 2.6]

(a) X: metric space

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S%5Csubset%20X%2C%20x%5Cin%20S"> に対して

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cexists%20r%20%3E%200%3B%20B%28x%2C%20r%29%20%5Csubset%20S">

が成り立つ時xをSの内点という

Sの内点の集合全体を内部(interior)といい、int S とも書き、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S%5E0">で表す

(b) <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20x%20%5Cin%20S"> が与えられた時、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20x_n%20%5Crightarrow%20x"> (x_n \in S \backslash \{x\})

となる点列{x_n}が定義できるとき、xを

Sの集積点(accumulation point)という。

集積点の集合全体をSの導集合(derived set)といい、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S%5Ed">と表す

３．[Property 2.3] (点列による閉集合の特徴付け)

X: metric space

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S%20%5Csubset%20X">

(a) <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Coverline%20S%20%3D%20S%20%5Ccup%20S%5Ed"> (Sバーは閉包)

(b) Sは閉集合 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5CRightarrow%20S%5Ed%20%5Csubset%20S%7E%7E%7E%28S%3D%5Coverline%20S%29">

(c) Sは閉集合⇔「<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20x%5Cin%20X">に収束する点列<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20x_n%5Cin%20S">が存在するならば<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20x%5Cin%20S">」


## 2.4 写像の連続性

４． [Def 2.7]

X(metric space) -> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20d_X"> (metric)

Y(metric space) -> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20d_Y"> (metric)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20D%5Csubset%20X%2C%20f%3A%20D%5Crightarrow%20Y">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cdisplaystyle%20%5Clim_%7Bx%5Crightarrow%20%5Cxi%7Df%28x%29%3D%5Calpha">

５． [Property 2.4] (p38)

６． [def] (写像の連続性)

fが <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cxi%20%5Cin%20D"> で連続であるとは、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20x%5Crightarrow%5Cxi%20%5CRightarrow%20f%28x%29%20%5Crightarrow%20f%28%5Cxi%20%29">

または、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20f%28D%5Ccap%20B_X%28%5Cxi%20%2C%5Cdelta%29%29%20%5Csubset%20B_Y%28f%28%5Cxi%20%29%2C%20%5Cvarepsilon%29">

### 関数解析の小テスト

３週間後(6/21)

教科書の証明

* 距離空間

* 完備性

先生が指定した場所：
1. p18 [例題2.1]
    - <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28l%5Ep%2C%20d_p%29">
    - <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20D_1%2C%20D_2%2C%20D_3">が証明できるか？ <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28l%5E%u221E%2C%20d_%u221E%29">
    (ヘルダー, Minkowskey は結果を使って良い)
2. [定理 2.1] (p24~)
  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cmathbb%20R%2C%20%5CBbb%20R%5EN">の完備性
3. [例題2.3] <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20l%5Ep"> の完備性 (p26~)

4. [例題 2.4] (p27~) (a)のみ
  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28C%5Ba%2Cb%5D%2Cd_p%29">: metric space の証明
