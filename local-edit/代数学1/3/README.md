## 定義 0.10 (1)整列順序 well order

集合S上の全順序が以下の性質を持つとき整列順序という。

Sの任意の部分集合Aが最小値をもつ

すなわち $\exists a\in A, \forall b \in A, b\leq a$

## 定義 0.10 (2)定礎順序

集合S上の順序が以下の性質を持つとき定礎順序という。

Sの任意の部分集合Aが極小値をもつ

すなわち $\exists a\in A, \forall b \in A, a\not= b< a$

#### 例

* 自然数N上の普通の大小関係は整列順序

* 整数Z上の普通の大小関係は整列順序ではない
  + $\because -1>-2>-3>...$ が無限下降列

* $\mathbb Z$上の順序>を　非負整数上では普通の最小関係、
  -の整数上では-a>-b<=>a<b で
  非負整数 > 負の整数　で定めたとき
  整列順序
  + -1<-2<-3<...<0<1<2<...

* $\mathbb N$上の順序>で、a>b<=>b|a
  で定めると(全順序でない)定礎順序

### 問題

$\mathbb R$上に整列順序は存在するか？

答えは "YES"

選択公理を用いる

### 定理0.8 (整列可能性定理)

任意の集合Sに対してS上の整列じゅんじょが存在する


### 定理 0.9 (ツォルンの補題)

集合S上の順序 $\geq$ に対して

$\geq$ に関して全順序をなっているSの任意の部分集合Aが --①

SにAの上限をもつとき --②

① $\forall a, b \in A\ \ a \not = b \Rightarrow a > b\ or\ b > a$

② $\exists c \in S\ \forall a \in A\ c\geq A$

Sには≧にかんして極大元が存在する

すなわち $\exists a \in S, \forall b \in S, b\not = a \Rightarrow b > a$


***実は、選択公理、整列可能性、ツォルンの補題は同値***

# 1章 群(group) 環(ring) 体(field)

## 定義1.1 (群　group)

集合G上の２項演算　・　が次の性質をもつとき、

(G, ・)あるいは・を省略して単にGを群と呼ぶ

1. 結合法則
  $\forall a, b, c \in G$
  $(a\cdot b)\cdot c = a\cdot (b\cdot c)$
2. $\exists e\in G, \forall a \in G\ e\cdot a = a\cdot e = a$
3. $a\in G, \exists x, a\cdot x = x \cdot a = e$
4. $\forall a, b \in S, a\cdot b > b\cdot a$をみたすとき、Gを可換群あるいはアーベルぐんと呼ぶ
注：
2のe、3のxはユニークに定まる

eをGの単位元と呼び、通常は1で表す

xをaの逆元と呼び、通常は $a^{-1}$ で表す
