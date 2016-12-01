SLPCのPM公理化
 
## [SLPC-公理型]
 
任意の対象変項xを含むSLPC論理式α(x)の**すべてのxを、任意のα(x)に含まれない**対象定項aに置き換えて得られる式をα(a)とする。

このとき、次の式型をもつSLPC論理式はすべて公理である

$\forall x[\alpha(x)]\supset \alpha(a)$ 　 [全称例化]

#### 例

φ(x): xはこの部屋にいる人である

ψ(x): xは山田くんの親戚である

$\forall x[\varphi(x)\supset\psi(x)]$ : この部屋にいる人全員が山田くんの親戚である

a: 山田くん

$\varphi(a)\supset\psi(a)$ : 山田くんがこの部屋にいるならそのとき山田くんは山田くんは山田くんの親戚である←偽

## SLPC-PM-Th.1 $\alpha(a)\supset \exists x[\alpha(x)]$ 　 [存在汎化]

▼

$\forall x[\alpha(x)]\supset\alpha(a)$ から出発し

$\forall x[\sim \alpha(x)]\supset\sim\alpha(a)$

$\sim\sim\alpha(a)\supset\sim\forall x[\sim\alpha(x)]$

$\alpha(a)\supset\exists x[\alpha(x)]$

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

$\forall x\exists u[x\in u \equiv \phi(x)]$
</div>

たとえば、

φ(x):$x\not\in x$

u={x|\φ(x)}={x|$x\not\in x$}

==>パラドックス

集合の作り方＝集合算(Standard Set Caluclus)のルール(公理)の体型

## Zermeloの公理的集合論

$\emptyset$ ...始元

数学とは何の科学か？〜関係一般の理論

$\in$ ...原始２項述語関数

この２つだけでなんとかなるんじゃね？とかいう結構すごめやばめなやつ

### [原始記号]

a,b,c,... 集合記号

x,y,z,... 集合変項

$\in$ ... 原始２項述語関数

### [構成規則]

任意の集合項t,sについて $t\in s$

を素式と呼び、最も単純なSSC論理式とする

この素式のSLPC論理式への代入形をSSC論理式とする

### [派生記号の定義]

$Df.\not\in ~~~ \forall x\forall y[x\not\in y\equiv df.\sim x\in y]$

$Df.\subseteq ~~~ \forall x\forall y[x\subseteq y\equiv df. \forall u[u\in x \supset u\in y]]$

$Df.= ~~~ \forall x\forall y[x= y\equiv df. x\subseteq y \land y\subseteq x]$

これより次が直ちに導かれる

$\forall x\forall y[x=y\equiv \forall u[u\in x\equiv u\in y]]$

これは「同一の集合であることは全く元が一致する」ということである

したがって任意の述語関数φ(x)について次が成り立つ

$\forall x\forall y [x=y \equiv [\varphi (x)\equiv \varphi(y)]]$

「同一の集合であるということはその数学的性質が全く一致すること

不可識別者同一性原理 - 同一性代入則

また、次が成り立つことは、定義Df.=と論理法則とが直ちに証明される：

(1) [反射律] $\forall x[x=x]$

(2) [対称律] $\forall x\forall y[x=y\equiv y=x]$

(3) [推移律] $\forall x\forall y\forall z[x=y\land y=z\supset x=z]$

数学とは関係一般の記述

関係->数える==並べる

#### フレーゲの定理

$$
0=\emptyset\\
1=\{x|x\simeq{\emptyset}\}=\{x|x\simeq{0}\}
2=\{x|x\simeq{0,1}\}
$$

---->>　$3\in a\in3$

#### 序数としての自然数

$$
0=\emptyset\\
1=\{0\}\\
2=\{0,1\}\\
3=\{0,1,2\}\\
...\\
n=\{0,1,...,n-1\}
$$


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


