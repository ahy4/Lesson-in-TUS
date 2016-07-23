# 0章 素朴集合

## 定義 0.1
集合AからBへの写像fに対して、

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%7B%7D%20a%2C%20b%20%5Cin%20A%20%20f%28a%29%20%3D%20f%28b%29%20%5CRightarrow%7B%7D%20a%20%3D%20b">　を満たす時、fは単射と呼ばれる
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%7B%7D%20c%20%5Cin%20B%2C%20%5Cexists%20a%20f%28a%29%20%3D%20c"> を満たす時fは全射
3. 単射かつ全射は全単射(bijection)

## 定義 0.2
集合A,Bに対して

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20A%u301CB%20%3A%20A%u304B%u3089B%u3078%u306E%u5168%u5358%u5C04%u304C%u5B58%u5728%u3059%u308B">　で〜を定義する(〜は同値関係)

すなわち、

1. A〜A
2. A〜B->B〜A
3. A〜BかつB〜C->A〜C

一般にAの同値関係〜に寄る同値種とは、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5BA%5D_%u301C"> = B〜AなるBの集まり のこと

## 定義 0.3

集合Aに対して　定義02で定めた同値関係〜に対する同値種<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5BA%5D_%u301C">を

|A|と表し、 Aの濃度(cordinality)と呼ぶ。

※Aが有限集合の場合、例えばA={a, b}

|A| = |{ 0,1 }| = |{1, 2}| = ...

|A|を普通は2と表す

Aが有限集合の場合は

|A|をAのこすうの自然数と同一視する

### なぜ同値類は同値集合ではないのか？

一般に、同値類(class)は集合にはならない。

## 定義 0.4

|A|と|B|に対して、AからBへの単射が存在する時、

|A|=|C|, |B|=|D|で、

AからBへの単射が存在する時、

CからDへの単射が存在する必要がある。

この定義はwell-defined

### well-defined 補足

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cfrac%7Bb%7D%7Ba%7D%20%5Coplus%20%5Cfrac%7Bd%7D%7Bc%7D%20%3D%20%5Cfrac%7Bb+d%7D%7Ba+c%7D">

はwell-definedではない

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cfrac%7B1%7D%7B2%7D%20%5Coplus%20%5Cfrac%7B1%7D%7B3%7D%20%3D%20%5Cfrac%7B2%7D%7B5%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cfrac%7B2%7D%7B4%7D%20%5Coplus%20%5Cfrac%7B1%7D%7B3%7D%20%3D%20%5Cfrac%7B3%7D%7B7%7D">

## 定理 0.1

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CA%7C%20%5Cleq%20%7CB%7C"> かつ <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CB%7C%20%5Cleq%20%7CC%7C%20%5CRightarrow%20%7CA%7C%20%5Cleq%20%7CC%7C">

2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CA%7C%20%5Cleq%20%7CB%7C"> かつ <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CB%7C%20%5Cleq%20%7CA%7C%20%5CRightarrow%20%7CA%7C%20%3D%20%7CC%7C">

### 証明

1は明らか。

2は、次の定理から従う

## 定理 0.2 (カントール・ベルンシュタイン(シュレーダー)の定理)

AがBへの単射fとBからAへの単射g

が存在する時、AからBへの全単射が存在する

### 略証

f: A -> B

g: B -> A

## 定義 0.5

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CA%7C%20%5Cleq%20%7CB%7C"> かつ <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CA%7C%20%5Cneq%20%7CB%7C"> の時、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CA%7C%20%3C%20%7CB%7C"> と記す

## 定理 0.3

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7C%5Cboldsymbol%7BQ%7D%7C%20%3D%20%7C%5Cboldsymbol%7BZ%7D%7C%20%3D%20%7C%5Cboldsymbol%7BN%7D%7C">

「番号付けができる」

## 定義 0.6

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7CA%7C%20%3D%20%7C%5Cboldsymbol%7BN%7D%7C"> なる集合Aを加算集合と呼ぶ
有限集合を含め、高々加算集合と呼ぶ

## 定理 0.4

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7C%5Cboldsymbol%7BR%7D%7C%20%3E%20%7C%5Cboldsymbol%7BN%7D%7C">

### 証明

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7C%5Cboldsymbol%7BR%7D%7C%20%5Cleq%20%7C%5Cboldsymbol%7BN%7D%7C"> は明らか

(一般にA<Bなら|A| <= |B|)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%280%2C1%29"> 〜 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7C%5Cboldsymbol%7BN%7D%7C"> でないことを示す

背理法より

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%280%2C%201%29%20%3D%20%5C%7Ba_n%20%7C%20n%20%5Cin%20%5Cboldsymbol%7BN%7D%5C%7D"> とする

a_nの小数点表示を

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a_n%20%3D%200.a_1%5Ena_2%5En...%u3068%u304A%u304F">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b_n%5En%20%5Cin%20%5C%7B1%2C2%2C3%2C..%2C8%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b_n%20%5Cneq%20a_n%5En%u3068%u306A%u308B%u3088%u3046%u306B%u304A%u304F">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b%20%3D%200.b_1b_1...%u3068%u304A%u304F">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b%20%5Cin%20%280%2C%201%29">

しかし<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b%20%5Cneq%20a_n">
