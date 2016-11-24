SLPC恒真式型

ある式があって、その方を持つ式がSLPC恒真式である時、その式の形をSLPC恒真式型であるという

SLPC恒真式型は、SLPC恒真式の集合と考えることが出来、この式の集合Aと<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%5Cin%20A">について

SLPC|=a <=> 任意の付値関数V^MについてV^M[a]=a

## SLPC-T1(トートロジー１)

任意の対象変項xを含む任意の式α(x)について

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Csim%5Cforall%20x%5Ba%28x%29%5D%20%5Cequiv%20%5Cexists%20x%5B%5Csim%20a%28x%29%5D">

これより

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5B%5Csim%20a%28x%29%5D%20%5Cequiv%20%5Csim%20%5Cexists%20x%5Ba%28x%29%5D">

(ド・モルガンを考えよう)

対象定項の集合N={a1,...,an}

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
V^M[\forall x[\alpha(x)]]=V^M[\alpha(a_1)\land...\land\alpha(a_n)]\\
\prod_{i=1}^nV^M[\alpha(a_i)]
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

同様に

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
V^M[\exists x[\alpha(x)]] = \sum_{i=1}^n V^M[\alpha(a_i)]
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
V^M[\sim\forall x[\alpha(x)]]\\
=-V^M[\forall x[\alpha(x)]]\\
=-\prod_{i=1}^nV^M[\alpha(a_i)]\\
=\sum_{i=1}^n -V^M[\alpha(a_i)]\\
=V^M[\exists x[\alpha(x)]]
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

## SLPC-T2

任意の対象変項xを含む任意の式α(x),β(x)について

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5B%5Calpha%28x%29%5Csupset%20%5Cbeta%28x%29%5D%5Csupset%20%28%5Cforall%20x%5B%5Calpha%28x%29%5D%5Csupset%20%5Cforall%20x%5B%5Cbeta%28x%29%5D%29">

略証

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
V^M[与式]\\
=-V^M[\forall x[\alpha(x)\supset\beta(x)]]+(-V^M[\forall x[\alpha(x)]+V^M[\forall x[\beta(x)]]])\\
=-\prod_{i=1}^n(-V^M[\alpha(a_i)]+V^M[\beta(a_i)])+(-\prod_{j=1}^nV^M[\alpha(a_j)]+\prod_{i
k=1}^nV^M[\alpha(a_k)])\\
=-\prod_{i=1}^n(-\alpha_i+\beta_i)+-\prod\alpha_j+\prod\beta_k\\
=\sum-(-\alpha_i+\beta_i) + \sum-\alpha_j + \prod\beta_k\\
=\sum(\alpha_i\times-\beta_i+-\alpha_i)+\prod\beta_k
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

場合分けする

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbeta_i%20%3D%20V%5EM%5B%5Cbeta%28a_i%29%5D">

#### 1 すべてのiで<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbeta_i%20%3D%201">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
\prod\beta_k=\prod\beta_i=1\\
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

ゆえに与式=1

#### 2 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbeta_i%20%3D%200">なるiが存在

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbeta_i%3D0">とする

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha_i%5Ctimes-0+-%5Calpha_i%3D1">

したがって

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
\sum(\alpha_i\times-\beta_i+-\alpha_i)=1
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

ゆえに

与式=1

よって示された

逆は成り立たない

## SLPC-T4

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%5B%5Calpha%28x%29%5D%5Cequiv%20%5Cforall%20y%5B%5Calpha%28y%29%5D">

ただし、a(y)はa(x)に現れる対象変項xを**すべてa(x)に含まれていない変項y**に置き換えて得られる式である(名前空間的に同じ変数名のものを用意するなって意味)

以上も計算により恒真式系であるといえる:

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
V^M[\forall x[\alpha(x)]]\\
=\prod_{i=1}^nV^M[\alpha(a_i)]\\
=V^M[\forall y[\alpha(y)]]
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

## SLPC-T5

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20x%5B%5Calpha%5Cland%5Cbeta%28x%29%5D%5Cequiv%5Calpha%5Cland%5Cexists%20x%5B%5Cbeta%28x%29%5D">

## SLPC-T6

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20x%5B%5Calpha%5Csupset%5Cbeta%28x%29%5D%5Cequiv%5Calpha%5Csupset%5Cexists%20x%5B%5Cbeta%28x%29%5D">

## SLPC-T3

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20x%5B%5Calpha%5Cequiv%5Cbeta%28x%29%5D%5Cequiv%5Calpha%5Cequiv%5Cexists%20x%5B%5Cbeta%28x%29%5D">

## SLPC-T7

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20y%5B%5Cexists%20x%5B%5Calpha%28x%29%5D%5Csupset%5Calpha%28y%29%5D">

ただし対象変項yはα(x)に含まれないものとし、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%28y%29">は<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%28x%29">の全てのｌｓｄヵｄ、んｂｋ「

slpc-t6と組み合わせるとイカが得られる

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20x%5B%5Calpha%28x%29%5D%5Csupset%5Cexists%20y%5B%5Calpha%28y%29%5D">

これより

SLPC-T4もここから得られる事がわかる
