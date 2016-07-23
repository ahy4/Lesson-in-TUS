## 無平方分解

多項式f(x)を既約因子に分解して

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28x%29%20%3D%20cf_1%5E%7Bn_1%7Df_2%5E%7Bn_2%7D...f_r%5E%7Bn_r%7D">

と書け、

* <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20n_i%20%3E%201"> なる <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_i%5E%7Bn_i%7D%28x%29"> を **平方因子**
* <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20n_i%20%3D%201"> なる <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_i%5E%7Bn_i%7D%28x%29"> を **無平方部** (?)
* 平方因子を持たない多項式を **無平方**

という。

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28x%29%20%3D%20f_1%28x%29f_2%5E2%28x%29...f_m%5Em%28x%29"> の形にすることを無平方分解という。

また、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28x%29"> が無平方 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CLeftrightarrow%20gcd%28f%2C%20f%27%29%20%3D%201">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbecause%20gcd%28f%2C%20f%27%29%20%3D%20f_2f_3%5E2...f_m%5E%7Bm-1%7D">

### 例

> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29%20%3D%20X%5E5%20+%202X%5E4%20-%202X%5E3%20-%204X%5E2%20+%20X%20+%202"> に対して
> 1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29"> の無平方部を計算せよ
> 2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29"> の無平方分解を計算せよ


<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29%20%3D%20X%5E5%20+%202X%5E4%20-%202X%5E3%20-%204X%5E2%20+%20X%20+%202">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%3D%20%28X+2%29%5C%7B%28X-1%29%28X+1%29%5C%7D%5E2"> より

##### 1.

無平方部は <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20X+2">

##### 2.

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29%20%3D%20%28X+2%29%5C%7B%28X-1%29%28X+1%29%5C%7D%5E2">

----


## スツルム列

スツルム

テストに必要な分は下のリンクを見ればわかるのでぜひ読もう。

http://bit.ly/2a0N2ky

### 定義 4.9

スツルム列 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%2C...%2Cf_N"> に対して

実数 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a"> に対する

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%28a%29%2C%20...%2C%20f_N%28a%29">

の中の０でない数の符号の変わる回数を <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%28a%29"> で表す。


### 定理4.10 (スツルムの定理)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28x%29%5Cin%20%5CBbb%20R%5Bx%5D"> を無平方な多項式とする

(すなわち <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%3DSQF%28f%29"> 、重根を持たない)

任意の <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a%3Cb"> に対して <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28x%29%20%3D%200"> は

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a%20%3C%20x%20%u2266%20b"> の中に <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%28a%29%20-%20V%28b%29"> 個の実根をもつ

### 例

> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29%20%3D%20X%5E3%20-%204X%20+%201"> に対して
> 1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29"> のスツルム列を作成せよ
> 1. スツルム列の <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20X%20%3D%20-3%2C%200%2C%201%2C%202"> における符号の変化数を計算せよ
> 1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29"> の実数根の整数部を全て求めよ


##### 1.

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%28X%29%20%3A%3D%20f%28X%29%20%3D%20X%5E3%20-%204X%20+%201">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_1%28X%29%20%3A%3D%20f%27%28X%29%20%3D%203X%5E2%20-%204">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_2%28X%29%20%3A%3D%20-%28f_0%28X%29%20%5C%25%20f_1%28X%29%29%20%3D%20%5Cfrac%7B8%7D%7B3%7DX%20-%201">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_3%28X%29%20%3A%3D%20-%28f_1%28X%29%20%5C%25%20f_2%28X%29%29%20%3D%20%5Cfrac%7B229%7D%7B64%7D">

とした時の多項式列 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%28X%29%2C%20f_1%28X%29%2C%20f_2%28X%29%2C%20f_3%28X%29.">

##### 2.

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20X%3D-3"> のとき

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%28-3%29%3A%20-%2C%7E%7E%20f_1%28-3%29%3A%20+%2C%7E%7E%20f_2%28-3%29%3A%20-%2C%7E%7E%20f_3%28-3%29%3A%20+">

より、符号変化数 **<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%28-3%29%20%3D%203">**

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20X%3D0"> のとき

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%280%29%3A%20+%2C%7E%7E%20f_1%280%29%3A%20-%2C%7E%7E%20f_2%280%29%3A%20-%2C%7E%7E%20f_3%280%29%3A%20+">

より、符号変化数 **<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%280%29%20%3D%202">**

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20X%3D1"> のとき

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%281%29%3A%20-%2C%7E%7E%20f_1%281%29%3A%20-%2C%7E%7E%20f_2%281%29%3A%20+%2C%7E%7E%20f_3%281%29%3A%20+">

より、符号変化数 **<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%281%29%20%3D%201">**

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20X%3D2"> のとき

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f_0%282%29%3A%20+%2C%7E%7E%20f_1%282%29%3A%20+%2C%7E%7E%20f_2%282%29%3A%20+%2C%7E%7E%20f_3%282%29%3A%20+">

より、符号変化数 **<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%282%29%20%3D%200">**

##### 3.

スツルムの定理より、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28X%29%20%3D%200"> は

区間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28-3%2C0%5D"> に <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%28-3%29%20-%20V%280%29%20%3D%201"> 個

区間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%280%2C1%5D"> に <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%280%29%20-%20V%281%29%20%3D%201"> 個

区間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%281%2C2%5D"> に <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V%281%29%20-%20V%282%29%20%3D%201"> 個

の実数解を１つずつのみ持つ。

また、 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28-2%29"> は正なので <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%28-3%29f%28-2%29%3C0"> であるから、区間 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%283%2C2%29"> に実数解を１つのみ持つ。

よって、実数解の整数部は <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20-2%2C%200%2C%201.">

----

## 拡張互除法

http://bit.ly/1KoEzOD

を参照

### 例

> 不定方程式
> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201000x+1001y%3D1">
> を解け。

1004と1001に対してユークリッドの互除法を行う。

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201004%20%3D%201001%20%5Ccdot%201%20+%203%2C">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201001%20%3D%203%20%5Ccdot%20333%20+%202%2C">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%203%20%3D%202%20%5Ccdot%201%20+%201%2C">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%202%20%3D%201%20%5Ccdot%202%20+%200"> より

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201%20%3D%203%20-%201%20%5Ccdot%202%20%3D%203%20-%201%20%5Ccdot%20%281001%20-%20333%20%5Ccdot%203%29%20%3D%20-1001%20-%20334%20%5Ccdot%203">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%3D%20-%201001%20+%20334%20%5Ccdot%20%281004%20-%201001%20%5Ccdot%201%29%20%3D%201004%20%5Ccdot%20334%20-%201001%20%5Ccdot%202">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%3D%201004%20%5Ccdot%20334%20+%201001%20%5Ccdot%20%28-335%29">

よって

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201004%20%5Ccdot%20334%20+%201001%20%5Ccdot%20%28-335%29%20%3D%201">

また、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201004%20%5Ccdot%20x%20+%201001%20%5Ccdot%20y%20%3D%201">

で辺々引くと

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201004%20%28x%20-%20344%29%20+%201001%20%28y%20+%20335%29%20%3D%200">

より

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201004%20%28-%20x%20+%20334%29%20%3D%201001%20%28y%20+%20335%29">

1004 と1001 は互いに素なので

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%201004%20%28-%20x%20+%20334%29%20%3D%201001%20%28y%20+%20335%29%20%3D%201004%20%5Ccdot%201001%20%5Ccdot%20k">

と書けるので <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28k%20%5Cin%20%5CBbb%20N%29">

* <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20-%20x%20+%20334%20%3D%201001%20%5Ccdot%20k%7E%7E%28%5CLeftrightarrow%20x%20%3D%20-1001%20%5Ccdot%20k%20+%20334%29">

* <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20y%20+%20335%20%3D%201004%20%5Ccdot%20k%7E%7E%28%5CLeftrightarrow%20y%20%3D%201004%20%5Ccdot%20k%20-%20335%29">

が成り立つ。


----
