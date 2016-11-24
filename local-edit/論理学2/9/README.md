SLPC恒真式型

ある式があって、その方を持つ式がSLPC恒真式である時、その式の形をSLPC恒真式型であるという

SLPC恒真式型は、SLPC恒真式の集合と考えることが出来、この式の集合Aと$\alpha\in A$について

SLPC|=a <=> 任意の付値関数V^MについてV^M[a]=a

## SLPC-T1(トートロジー１)

任意の対象変項xを含む任意の式α(x)について

$\sim\forall x[a(x)] \equiv \exists x[\sim a(x)]$

これより

$\forall x[\sim a(x)] \equiv \sim \exists x[a(x)]$

(ド・モルガンを考えよう)

対象定項の集合N={a1,...,an}

$$
V^M[\forall x[\alpha(x)]]=V^M[\alpha(a_1)\land...\land\alpha(a_n)]\\
\prod_{i=1}^nV^M[\alpha(a_i)]
$$

同様に

$$
V^M[\exists x[\alpha(x)]] = \sum_{i=1}^n V^M[\alpha(a_i)]
$$

$$
V^M[\sim\forall x[\alpha(x)]]\\
=-V^M[\forall x[\alpha(x)]]\\
=-\prod_{i=1}^nV^M[\alpha(a_i)]\\
=\sum_{i=1}^n -V^M[\alpha(a_i)]\\
=V^M[\exists x[\alpha(x)]]
$$

## SLPC-T2

任意の対象変項xを含む任意の式α(x),β(x)について

$\forall x[\alpha(x)\supset \beta(x)]\supset (\forall x[\alpha(x)]\supset \forall x[\beta(x)])$

略証

$$
V^M[与式]\\
=-V^M[\forall x[\alpha(x)\supset\beta(x)]]+(-V^M[\forall x[\alpha(x)]+V^M[\forall x[\beta(x)]]])\\
=-\prod_{i=1}^n(-V^M[\alpha(a_i)]+V^M[\beta(a_i)])+(-\prod_{j=1}^nV^M[\alpha(a_j)]+\prod_{i
k=1}^nV^M[\alpha(a_k)])\\
=-\prod_{i=1}^n(-\alpha_i+\beta_i)+-\prod\alpha_j+\prod\beta_k\\
=\sum-(-\alpha_i+\beta_i) + \sum-\alpha_j + \prod\beta_k\\
=\sum(\alpha_i\times-\beta_i+-\alpha_i)+\prod\beta_k
$$

場合分けする

$\beta_i = V^M[\beta(a_i)]$

#### 1 すべてのiで$\beta_i = 1$

$$
\prod\beta_k=\prod\beta_i=1\\
$$

ゆえに与式=1

#### 2 $\beta_i = 0$なるiが存在

$\beta_i=0$とする

$\alpha_i\times-0+-\alpha_i=1$

したがって

$$
\sum(\alpha_i\times-\beta_i+-\alpha_i)=1
$$

ゆえに

与式=1

よって示された

逆は成り立たない

## SLPC-T4

$\forall x[\alpha(x)]\equiv \forall y[\alpha(y)]$

ただし、a(y)はa(x)に現れる対象変項xを**すべてa(x)に含まれていない変項y**に置き換えて得られる式である(名前空間的に同じ変数名のものを用意するなって意味)

以上も計算により恒真式系であるといえる:

$$
V^M[\forall x[\alpha(x)]]\\
=\prod_{i=1}^nV^M[\alpha(a_i)]\\
=V^M[\forall y[\alpha(y)]]
$$

## SLPC-T5

$\exists x[\alpha\land\beta(x)]\equiv\alpha\land\exists x[\beta(x)]$

## SLPC-T6

$\exists x[\alpha\supset\beta(x)]\equiv\alpha\supset\exists x[\beta(x)]$

## SLPC-T3

$\exists x[\alpha\equiv\beta(x)]\equiv\alpha\equiv\exists x[\beta(x)]$

## SLPC-T7

$\exists y[\exists x[\alpha(x)]\supset\alpha(y)]$

ただし対象変項yはα(x)に含まれないものとし、$\alpha(y)$は$\alpha(x)$の全てのｌｓｄヵｄ、んｂｋ「

slpc-t6と組み合わせるとイカが得られる

$\exists x[\alpha(x)]\supset\exists y[\alpha(y)]$

これより

SLPC-T4もここから得られる事がわかる
