# PM公理化

## [公理]

A1 $p\vee p\supset p$

A2 $p\supset p\vee q$

A3 $p\vee q\supset q\vee p$

A4 $(p\supset q)\supset (r\vee p\supset r\vee q)$

## [原始演繹規則]

PM証明とは、PM証明可能な式の列である

PM証明可能な式とは、公理及び公理を以下の原始演繹規則(PDR)によって書き換えて得られる式のことである

### PDR1 [一様代入則]

$$
PM \vdash\alpha[p]\Rightarrow PM\vdash\alpha[\beta]
$$

任意の命題変項pを含む任意の式$\alpha[p]$のpのすべてを

任意の一種類の式$\beta$に置き換えて得られる式を$\alpha[\beta]$とする。

このとき$\alpha[p]$がPM証明可能式ならば、$\alpha[\beta]$もまたそうである

### PDR2 [分離則]

$$
PM \vdash\alpha~かつ~PM\vdash\alpha\supset\beta\Rightarrow PM\vdash \beta
$$


定言的三段論法

Modus Ponens

任意の式$\alpha, \beta$について、$\alpha$と$\alpha\supset\beta$とがともにPM証明可能式ならば、$\beta$もまたそうである


### ※ メタ記号

任意の式$\alpha$について、「$\alpha$がPM証明可能式である」

ということを

$$
PM\vdash\alpha
$$

と表す。また "ならば" という記号を "$\Rightarrow$" とする

公理とPDRをあわせて公理家の基底という。

その他　次の省略記号の定義を用いてPM証明を書く。

### PM-Th1

$$
(q\supset r)\supset \{(p\supset q)\supset(p\supset r)\}
$$

▼(PM証明)

1. $(p\supset q)\supset (r\vee p \supset r\vee q)$　　[A4]
2. $(q\supset r)\supset(\sim p\vee q \supset \sim p\vee r)$　　[1. PDR1: p→q, q→r, r→~p]
3. $(q\supset r)\supset\{(p\supset q)\supset (p\supset r)\}$　　[2. Df2 (def $\alpha\supset\beta$)]　▲

### PM-Th2

$$
p\supset p
$$

▼

1. $(q\supset r)\supset\{(p\supset q)\supset (p\supset r)\}$ [PM-Th1]
2. $(p\vee p \supset p)\supset \{(p\supset p\vee p)\supset(p\supset p)\}$ [1. PDR1]
3. $p\vee p \supset p$ [A1]
4. $(p\supset p\vee p)\supset(p\supset p)$ [2.3 PDR2]
5. $p\supset p\vee q$ [A2]
6. $p\supset p\vee p$ [3. PDR1]
7. $p\supset p$ [4,6 PDR2]

## 派生的演繹規則(DR(DDR))

任意の式$\alpha,\beta,\gamma$について

$$
PM\vdash\alpha\supset\beta かつ PM\vdash\beta\supset\gamma \Rightarrow PM\vdash\alpha\supset\gamma
$$

### PM-Th2 $p\supset p$

▼

1. $p\vee p\supset p$ [A1]
2. $p\supset p\vee q$ [A2]
3. $p\supset p\vee p$ [2. PDR1: q→r]
4. $p\supset p$ [1.4 DR5]

## PM化(?)

A1 $p\vee p\supset p$ → $PM\vdash\alpha\vee\alpha\Rightarrow PM\vdash\alpha$ DR1

のようにかける

DR6まである

DR5 $PM\vdash\alpha\supset\betaかつPM\vdash\beta\supset\gamma\Rightarrow PM\vdash\alpha\supset\gamma$

DR6 $p\supset p$　からのやつ

## DR1 $PM\vdash\alpha\vee\alpha\Rightarrow PM\vdash\alpha$ [縮約律]

▽(メタ証明)

０. $PM\vdash \alpha\vee\alpha$

----

1. $PM\vdash p\vee p\supset p$ [A1]
2. $PM\vdash\alpha\vee\alpha\supset\alpha$ [1 PDR: p->α]
3. $PM\vdash\alpha$ [0.3. PDR2]

---

$\therefore PM\vdash \alpha \vee \alpha \Rightarrow PM\vdash \alpha \vee \alpha $

### PM-Th3 $p\vee\sim p$

▼

1. $p\supset p$ [PM-Th2]
2. $\sim p\vee p$ [1 Df2]
3. $p\vee\sim p$ [2 DR3]

### PM-Th4 $p\equiv \sim\sim p$

### PM-Th4a $p\supset \sim\sim p$

### PM-Th4b $\sim\sim p\supset p$