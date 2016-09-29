# PM公理化

## [公理]

A1 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cvee%20p%5Csupset%20p">

A2 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p%5Cvee%20q">

A3 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cvee%20q%5Csupset%20q%5Cvee%20p">

A4 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28p%5Csupset%20q%29%5Csupset%20%28r%5Cvee%20p%5Csupset%20r%5Cvee%20q%29">

## [原始演繹規則]

PM証明とは、PM証明可能な式の列である

PM証明可能な式とは、公理及び公理を以下の原始演繹規則(PDR)によって書き換えて得られる式のことである

### PDR1 [一様代入則]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
PM \vdash\alpha[p]\Rightarrow PM\vdash\alpha[\beta]
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

任意の命題変項pを含む任意の式<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%5Bp%5D">のpのすべてを

任意の一種類の式<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbeta">に置き換えて得られる式を<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%5B%5Cbeta%5D">とする。

このとき<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%5Bp%5D">がPM証明可能式ならば、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%5B%5Cbeta%5D">もまたそうである

### PDR2 [分離則]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
PM \vdash\alpha~かつ~PM\vdash\alpha\supset\beta\Rightarrow PM\vdash \beta
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">


定言的三段論法

Modus Ponens

任意の式<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%2C%20%5Cbeta">について、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha">と<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%5Csupset%5Cbeta">とがともにPM証明可能式ならば、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbeta">もまたそうである


### ※ メタ記号

任意の式<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha">について、「<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha">がPM証明可能式である」

ということを

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
PM\vdash\alpha
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

と表す。また "ならば" という記号を "<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CRightarrow">" とする

公理とPDRをあわせて公理家の基底という。

その他　次の省略記号の定義を用いてPM証明を書く。

### PM-Th1

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
(q\supset r)\supset \{(p\supset q)\supset(p\supset r)\}
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

▼(PM証明)

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28p%5Csupset%20q%29%5Csupset%20%28r%5Cvee%20p%20%5Csupset%20r%5Cvee%20q%29">　　[A4]
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28q%5Csupset%20r%29%5Csupset%28%5Csim%20p%5Cvee%20q%20%5Csupset%20%5Csim%20p%5Cvee%20r%29">　　[1. PDR1: p→q, q→r, r→~p]
3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28q%5Csupset%20r%29%5Csupset%5C%7B%28p%5Csupset%20q%29%5Csupset%20%28p%5Csupset%20r%29%5C%7D">　　[2. Df2 (def <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%5Csupset%5Cbeta">)]　▲

### PM-Th2

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
p\supset p
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

▼

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28q%5Csupset%20r%29%5Csupset%5C%7B%28p%5Csupset%20q%29%5Csupset%20%28p%5Csupset%20r%29%5C%7D"> [PM-Th1]
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28p%5Cvee%20p%20%5Csupset%20p%29%5Csupset%20%5C%7B%28p%5Csupset%20p%5Cvee%20p%29%5Csupset%28p%5Csupset%20p%29%5C%7D"> [1. PDR1]
3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cvee%20p%20%5Csupset%20p"> [A1]
4. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28p%5Csupset%20p%5Cvee%20p%29%5Csupset%28p%5Csupset%20p%29"> [2.3 PDR2]
5. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p%5Cvee%20q"> [A2]
6. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p%5Cvee%20p"> [3. PDR1]
7. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p"> [4,6 PDR2]

## 派生的演繹規則(DR(DDR))

任意の式<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%2C%5Cbeta%2C%5Cgamma">について

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">
PM\vdash\alpha\supset\beta かつ PM\vdash\beta\supset\gamma \Rightarrow PM\vdash\alpha\supset\gamma
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20">

### PM-Th2 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p">

▼

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cvee%20p%5Csupset%20p"> [A1]
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p%5Cvee%20q"> [A2]
3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p%5Cvee%20p"> [2. PDR1: q→r]
4. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p"> [1.4 DR5]

## PM化(?)

A1 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cvee%20p%5Csupset%20p"> → <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20PM%5Cvdash%5Calpha%5Cvee%5Calpha%5CRightarrow%20PM%5Cvdash%5Calpha"> DR1

のようにかける

DR6まである

DR5 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20PM%5Cvdash%5Calpha%5Csupset%5Cbeta%u304B%u3064PM%5Cvdash%5Cbeta%5Csupset%5Cgamma%5CRightarrow%20PM%5Cvdash%5Calpha%5Csupset%5Cgamma">

DR6 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p">　からのやつ

## DR1 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20PM%5Cvdash%5Calpha%5Cvee%5Calpha%5CRightarrow%20PM%5Cvdash%5Calpha"> [縮約律]

▽(メタ証明)

０. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20PM%5Cvdash%20%5Calpha%5Cvee%5Calpha">

----

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20PM%5Cvdash%20p%5Cvee%20p%5Csupset%20p"> [A1]
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20PM%5Cvdash%5Calpha%5Cvee%5Calpha%5Csupset%5Calpha"> [1 PDR: p->α]
3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20PM%5Cvdash%5Calpha"> [0.3. PDR2]

---

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Ctherefore%20PM%5Cvdash%20%5Calpha%20%5Cvee%20%5Calpha%20%5CRightarrow%20PM%5Cvdash%20%5Calpha%20%5Cvee%20%5Calpha%20">

### PM-Th3 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cvee%5Csim%20p">

▼

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20p"> [PM-Th2]
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Csim%20p%5Cvee%20p"> [1 Df2]
3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cvee%5Csim%20p"> [2 DR3]

### PM-Th4 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Cequiv%20%5Csim%5Csim%20p">

### PM-Th4a <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20p%5Csupset%20%5Csim%5Csim%20p">

### PM-Th4b <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Csim%5Csim%20p%5Csupset%20p">