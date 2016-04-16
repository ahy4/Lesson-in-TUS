# 0章 素朴集合

## 定義 0.1
集合AからBへの写像fに対して、

1. $\forall{} a, b \in A  f(a) = f(b) \Rightarrow{} a = b$　を満たす時、fは単射と呼ばれる
2. $\forall{} c \in B, \exists a f(a) = c$ を満たす時fは全射
3. 単射かつ全射は全単射(bijection)

## 定義 0.2
集合A,Bに対して

$A〜B : AからBへの全単射が存在する$　で〜を定義する(〜は同値関係)

すなわち、

1. A〜A
2. A〜B->B〜A
3. A〜BかつB〜C->A〜C

一般にAの同値関係〜に寄る同値種とは、

$[A]_〜$ = B〜AなるBの集まり のこと

## 定義 0.3

集合Aに対して　定義02で定めた同値関係〜に対する同値種$[A]_〜$を

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

$\frac{b}{a} \oplus \frac{d}{c} = \frac{b+d}{a+c}$

はwell-definedではない

$\frac{1}{2} \oplus \frac{1}{3} = \frac{2}{5}$

$\frac{2}{4} \oplus \frac{1}{3} = \frac{3}{7}$

## 定理 0.1

1. $|A| \leq |B|$ かつ $|B| \leq |C| \Rightarrow |A| \leq |C|$

2. $|A| \leq |B|$ かつ $|B| \leq |A| \Rightarrow |A| = |C|$

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

$|A| \leq |B|$ かつ $|A| \neq |B|$ の時、$|A| < |B|$ と記す

## 定理 0.3

$|\boldsymbol{Q}| = |\boldsymbol{Z}| = |\boldsymbol{N}|$

「番号付けができる」

## 定義 0.6

$|A| = |\boldsymbol{N}|$ なる集合Aを加算集合と呼ぶ
有限集合を含め、高々加算集合と呼ぶ

## 定理 0.4

$|\boldsymbol{R}| > |\boldsymbol{N}|$

### 証明

$|\boldsymbol{R}| \leq |\boldsymbol{N}|$ は明らか

(一般にA<Bなら|A| <= |B|)

$(0,1)$ 〜 $|\boldsymbol{N}|$ でないことを示す

背理法より

$(0, 1) = \{a_n | n \in \boldsymbol{N}\}$ とする

a_nの小数点表示を

$a_n = 0.a_1^na_2^n...とおく$

$b_n^n \in \{1,2,3,..,8\}$

$b_n \neq a_n^nとなるようにおく$

$b = 0.b_1b_1...とおく$

$b \in (0, 1)$

しかし$b \neq a_n$
