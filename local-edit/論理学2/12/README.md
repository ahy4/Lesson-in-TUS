## A6 [Fraenkelの置換公理]

$$
\forall x\forall y\forall z[\varphi(x,y)\land\varphi(x,z)\supset y=z]\supset \exists x\forall u\forall t[t\in x\equiv \exists v[v\in u\land \varphi (v,t)]]
$$

ただし、φ(x)は任意の述語関数である

任意の函数＝演算φについて

任意の与えられた集合の元vに演算φを行なった結果得られる集合tの全てを源とし、それ以外のげんを持たない集合xが存在する

A6は任意の集合算について定義域となる集合uが与えられればその値域xは集合になることを言っている。

集合算による集合の像は集合である。

## Russel-ZermeloのParadox(1903)

~~

#Cantor素朴集合論における内包公理型

任意の述語関数ψ(x)が定義されればこれによって性質ψをもつ集合を作ることができる。

すなわち：

$\exists\forall t[t\in x\equiv \psi (t)]$

これによってある性質ψから直ちにx={t|ψ(t)}という集合の存在が言えるとした

#Zermeloの分出分離定理型(1910)

任意の述語関数ψ(x)と任意の集合uが与えられたとき次の集合を作ることができる。

すなわち

$$
\exists x\forall t[t\in x\equiv t\in u\land \psi(t)]
$$

これによってある性質ψを持つことによって集合uから元tを取り出してx={t|t\in u\psi(t)}という集合を作れる

今$\phi(x,y)\equiv \psi(x)\land x=y$ として

A6に代入すると

$$
\forall x\forall y\forall z[(\psi(x)\land x=y)\land(\psi(x)\land x=z)\supset y=z]\supset \\ \exists x\forall u\forall t[t\in x\equiv \exists v[v\in u\land \psi(v)\land v=t]]
$$

このとき、$x=y\land x=z\supset y=z$は真なので、前件は真

$$
\exists x\forall u\forall t[t\in x\equiv t\in u\land \psi (t)]
$$

これはZermeloの分出分離定理型である

これにより、$W=\{x|x\not\in x\}$といった集合はこの体系ではつくれない。

これによりRussell-Zermelo型のparadoxを回避できる

##?

$x\in x$となるような集合があるか？

$\emptyset$と$\in$とから全ての集合を作れるか？

## A7 [正則性公理]

$$
\forall a[a\neq \emptyset \supset \exists x[x\in a \land \forall t[\sim(t\in x\land t\in a)]]]
$$

## Df.$\cap$

$$
\forall x\forall u\forall v[x=u\cap v\equiv df.\\
\forall t[t\in x\equiv t\in u\land t\in v]]
$$

このとき $u\cap v=\emptyset$すなわちuとvの共通元が存在しないとき、uとvは「互いに素である」という

これよりA7は次のように書き換えられる

$$
\forall a[a\neq\emptyset \supset \exists x [x\in a\land x\cap a = \emptyset]]
$$

任意の空でない集合は、それと互いに素である元xを持つ

これより、次が証明できる

$$
\forall x[x\not\in x]
$$

これから、任意の集合も、遡っていくと、$x\in x$にハマることがなく$\emptyset$にたどり着くことがわかる

以上のA1~A7までをZF公理化という

# 🌟選択公理

「ものを数える」

全てのものは数えることができるか？

「数えられる」＝「並べられる」

## AC選択公理

$$
\forall z[\forall x[x\in z\supset x\neq \emptyset]\land\forall x\forall y[x\in z\land y\in z\land x\neq y\supset x\cap y=\emptyset]\supset \exists u\forall x[x\in z\supset \exists t[u\cap x=\{t\}]]]
$$

$\forall z$←全ての集合について「やばい」

$\emptyset$を元として含まずその任意の元x,yが互いに素であるような集合zは、zの各々の元xと１個だけ共通元tを持ちそれ以外を元として持たない集合uが存在する

uのことをzの選択集合という


要するに。。。

ACは数学の大部分（解析）を救うために必要

ZFに対してACは

* 独立か？ $ZF-|AC$
* 無矛盾か？ $ZF-|\sim AC$

(証明済み)

ZF+AC-->全数学


# 単位

期末やらない

レポート

１

4つの公理

ならば　どうち

３

ノート

４

たくさん書けば点をくれる

1/6~1/26

名前

論理学２　森永

教務課レポートボックス
