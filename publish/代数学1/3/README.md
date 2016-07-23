## 定義 0.10 (1)整列順序 well order

集合S上の全順序が以下の性質を持つとき整列順序という。

Sの任意の部分集合Aが最小値をもつ

すなわち <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20a%5Cin%20A%2C%20%5Cforall%20b%20%5Cin%20A%2C%20b%5Cleq%20a">

## 定義 0.10 (2)定礎順序

集合S上の順序が以下の性質を持つとき定礎順序という。

Sの任意の部分集合Aが極小値をもつ

すなわち <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20a%5Cin%20A%2C%20%5Cforall%20b%20%5Cin%20A%2C%20a%5Cnot%3D%20b%3C%20a">

#### 例

* 自然数N上の普通の大小関係は整列順序

* 整数Z上の普通の大小関係は整列順序ではない
  + <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbecause%20-1%3E-2%3E-3%3E..."> が無限下降列

* <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cmathbb%20Z">上の順序>を　非負整数上では普通の最小関係、
  -の整数上では-a>-b<=>a<b で
  非負整数 > 負の整数　で定めたとき
  整列順序
  + -1<-2<-3<...<0<1<2<...

* <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cmathbb%20N">上の順序>で、a>b<=>b|a
  で定めると(全順序でない)定礎順序

### 問題

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cmathbb%20R">上に整列順序は存在するか？

答えは "YES"

選択公理を用いる

### 定理0.8 (整列可能性定理)

任意の集合Sに対してS上の整列じゅんじょが存在する


### 定理 0.9 (ツォルンの補題)

集合S上の順序 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cgeq"> に対して

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cgeq"> に関して全順序をなっているSの任意の部分集合Aが --①

SにAの上限をもつとき --②

① <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20a%2C%20b%20%5Cin%20A%5C%20%5C%20a%20%5Cnot%20%3D%20b%20%5CRightarrow%20a%20%3E%20b%5C%20or%5C%20b%20%3E%20a">

② <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20c%20%5Cin%20S%5C%20%5Cforall%20a%20%5Cin%20A%5C%20c%5Cgeq%20A">

Sには≧にかんして極大元が存在する

すなわち <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20a%20%5Cin%20S%2C%20%5Cforall%20b%20%5Cin%20S%2C%20b%5Cnot%20%3D%20a%20%5CRightarrow%20b%20%3E%20a">


***実は、選択公理、整列可能性、ツォルンの補題は同値***

# 1章 群(group) 環(ring) 体(field)

## 定義1.1 (群　group)

集合G上の２項演算　・　が次の性質をもつとき、

(G, ・)あるいは・を省略して単にGを群と呼ぶ

1. 結合法則
  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20a%2C%20b%2C%20c%20%5Cin%20G">
  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28a%5Ccdot%20b%29%5Ccdot%20c%20%3D%20a%5Ccdot%20%28b%5Ccdot%20c%29">
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20e%5Cin%20G%2C%20%5Cforall%20a%20%5Cin%20G%5C%20e%5Ccdot%20a%20%3D%20a%5Ccdot%20e%20%3D%20a">
3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a%5Cin%20G%2C%20%5Cexists%20x%2C%20a%5Ccdot%20x%20%3D%20x%20%5Ccdot%20a%20%3D%20e">
4. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20a%2C%20b%20%5Cin%20S%2C%20a%5Ccdot%20b%20%3E%20b%5Ccdot%20a">をみたすとき、Gを可換群あるいはアーベルぐんと呼ぶ
注：
2のe、3のxはユニークに定まる

eをGの単位元と呼び、通常は1で表す

xをaの逆元と呼び、通常は <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a%5E%7B-1%7D"> で表す
