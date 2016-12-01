SLPCのPM公理化
 
## [SLPC-公理型]
 
任意の対象変項xを含むSLPC論理式α(x)の**すべてのxを、任意のα(x)に含まれない**対象定項aに置き換えて得られる式をα(a)とする。

このとき、次の式型をもつSLPC論理式はすべて公理である

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5B%5Calpha%28x%29%5D%5Csupset%20%5Calpha%28a%29"> 　 [全称例化]

#### 例

φ(x): xはこの部屋にいる人である

ψ(x): xは山田くんの親戚である

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5B%5Cvarphi%28x%29%5Csupset%5Cpsi%28x%29%5D"> : この部屋にいる人全員が山田くんの親戚である

a: 山田くん

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cvarphi%28a%29%5Csupset%5Cpsi%28a%29"> : 山田くんがこの部屋にいるならそのとき山田くんは山田くんは山田くんの親戚である←偽

## SLPC-PM-Th.1 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%28a%29%5Csupset%20%5Cexists%20x%5B%5Calpha%28x%29%5D"> 　 [存在汎化]

▼

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5B%5Calpha%28x%29%5D%5Csupset%5Calpha%28a%29"> から出発し

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5B%5Csim%20%5Calpha%28x%29%5D%5Csupset%5Csim%5Calpha%28a%29">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Csim%5Csim%5Calpha%28a%29%5Csupset%5Csim%5Cforall%20x%5B%5Csim%5Calpha%28x%29%5D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%28a%29%5Csupset%5Cexists%20x%5B%5Calpha%28x%29%5D">

▲

命題論理(SPC)==>述語論理(SLPC)==>公理的集合論(SSC)==>数学

ここからSSCをやる

# 素朴集合論

集合..."もの"のあつまり

ある性質φ(x)でものを分類する(xがもの)

↑やめよう

## Cantorの内包公理型

<div style="background-color:#EA84AE;padding:30px 50px">

任意の述語関数φ(x)について<br><br>

u={x|φ(x)}なる集合が存在する。すなわち<br><br>

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5Cexists%20u%5Bx%5Cin%20u%20%5Cequiv%20%5Cphi%28x%29%5D">
</div>

たとえば、

φ(x):<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%5Cnot%5Cin%20x">

u={x|\φ(x)}={x|<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20x%5Cnot%5Cin%20x">}

==>パラドックス

集合の作り方＝集合算(Standard Set Caluclus)のルール(公理)の体型

## Zermeloの公理的集合論

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cemptyset"> ...始元

数学とは何の科学か？〜関係一般の理論

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cin"> ...原始２項述語関数

この２つだけでなんとかなるんじゃね？とかいう結構すごめやばめなやつ

### [原始記号]

a,b,c,... 集合記号

x,y,z,... 集合変項

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cin"> ... 原始２項述語関数

### [構成規則]

任意の集合項t,sについて <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20t%5Cin%20s">

を素式と呼び、最も単純なSSC論理式とする

この素式のSLPC論理式への代入形をSSC論理式とする

### [派生記号の定義]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20Df.%5Cnot%5Cin%20%7E%7E%7E%20%5Cforall%20x%5Cforall%20y%5Bx%5Cnot%5Cin%20y%5Cequiv%20df.%5Csim%20x%5Cin%20y%5D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20Df.%5Csubseteq%20%7E%7E%7E%20%5Cforall%20x%5Cforall%20y%5Bx%5Csubseteq%20y%5Cequiv%20df.%20%5Cforall%20u%5Bu%5Cin%20x%20%5Csupset%20u%5Cin%20y%5D%5D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20Df.%3D%20%7E%7E%7E%20%5Cforall%20x%5Cforall%20y%5Bx%3D%20y%5Cequiv%20df.%20x%5Csubseteq%20y%20%5Cland%20y%5Csubseteq%20x%5D">

これより次が直ちに導かれる

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5Cforall%20y%5Bx%3Dy%5Cequiv%20%5Cforall%20u%5Bu%5Cin%20x%5Cequiv%20u%5Cin%20y%5D%5D">

これは「同一の集合であることは全く元が一致する」ということである

したがって任意の述語関数φ(x)について次が成り立つ

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5Cforall%20y%20%5Bx%3Dy%20%5Cequiv%20%5B%5Cvarphi%20%28x%29%5Cequiv%20%5Cvarphi%28y%29%5D%5D">

「同一の集合であるということはその数学的性質が全く一致すること

不可識別者同一性原理 - 同一性代入則

また、次が成り立つことは、定義Df.=と論理法則とが直ちに証明される：

(1) [反射律] <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5Bx%3Dx%5D">

(2) [対称律] <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5Cforall%20y%5Bx%3Dy%5Cequiv%20y%3Dx%5D">

(3) [推移律] <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5Cforall%20y%5Cforall%20z%5Bx%3Dy%5Cland%20y%3Dz%5Csupset%20x%3Dz%5D">

数学とは関係一般の記述

関係->数える==並べる

#### フレーゲの定理

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
0=\emptyset\\
1=\{x|x\simeq{\emptyset}\}=\{x|x\simeq{0}\}
2=\{x|x\simeq{0,1}\}
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

---->>　<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%203%5Cin%20a%5Cin3">

#### 序数としての自然数

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
0=\emptyset\\
1=\{0\}\\
2=\{0,1\}\\
3=\{0,1,2\}\\
...\\
n=\{0,1,...,n-1\}
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">


----

A1　　始元存在公理

----

A2　　対集合公理

A3　　和集合公理

A4　　巾(べき)集合公理

ここが集合算の公理

----

A5　　無限集合公理

A6　　Fraenkelの置換公理型

----

A7　　正則性公理(1,2,3,4,5,2,3,4,5,6,7みたいにぐるぐる廻ることがないということ)

A7までが　Zermelo-Frankel(ZF)公理化

----

AC　　選択公理　「全ての集合は、その元を並べて数えることができる」

ZF(A1~A7)-|AC ... ACのZFに対する独立性(ZFからACを証明できない)

ZF-|~AC ... ACのZFに対する無矛盾性

この２つが証明できたのは1960年代

----

ガリレイのパラドックス

「偶数と自然数の個数は一緒である」


