## 定義0.7

集合A, Bに対して

$A^B \overset{def}{=}\{f|f: B\rightarrow A\}$

とし、$|A|^{|B|}\overset{def}{=}|A^B|$ と定義する


### 定理0.5

$2^{|A|} > |A|$

#### 証明

Aが有限集合なら明らか

$2^{|A|} \geq |A|$ は明らか

$\because f: A\rightarrow \{0, 1\}$

$f_a(a) = \begin{cases}1\ (if\ x = a) \\ 0\ (otherwise)\end{cases}$

と考えると、

$f_a \neq f_b \leftarrow a \neq b$

$\Phi : A \rightarrow 2^A$, 単射

$2^{|A|} = |A|$ として矛盾を導く

$\{0, 1\}^A = \{f(a)|a\in A\}$

fはAから$\{0, 1\}^A$への全単射

$g(a) = \begin{cases}0\ if\ f(a)(a)=1\\1\ if\ f(a)(a)=0\end{cases}$

とおくと

$\forall a \in A g(a) \neq f(a)(a)$

よって$g \neq f(a)$

$g \in \{0,1\}^A, g\in S$で矛盾

### 定理0.6

$2^{|\Bbb N|} = |\Bbb R|$

#### 証明

$|\Bbb R| = |(0,1)|$

$(0,1)\in a$に対し、

aの２進数表記を

$0.a_1a_2...$

$a_i = 0, 1$

aに対し、$A_a \in \{0,1\}^N$

を$i \in A_a \Leftrightarrow a_i = 1$

φ: a->A_aは(0,1)から$\{0,1\}^N$の全単射

### 定理0.7

集合全体の集まりは集合ではない

#### 証明

Sを集合全体の集まりとして、それが集合だとすると

$a \in \{0,1\}^S$ に対して

$\{\phi\}$ を $\phi(a)$ とおくと

$\{0,1\}^S=A$ に対し、φはAからφ(A)への全単射

$|\phi(A)| = A$

$\phi (A)\in S$


$|A| = 2^{|S|}$

$|A|=|\phi(A)\leq |S| < 2^{|S|} = |A|$ (定理0.5より)

矛盾

## ラッセルのパラドックス

$\{x|x\ is\ Set, x \not\in x\} = A$

($\Bbb N \not\in \Bbb N$)

Aは集合の集まりであるが集合ではない

もしそうなら、任意の集合xに対して

$x\in A \Leftrightarrow x \not\in x$

xとしてAを代入すると、

$A\in A \Leftrightarrow A\not\in A$

矛盾

ようするに、集合という概念は"きちんと定める"必要がある

数学は自然科学ではない

公理が最初にありき

公理から、論理的推論によって定理を導く

## 問題1

$|\Bbb R| > |A| > |\Bbb N|$

なるRの部分集合Aは存在するか？

"このようなAは存在しない"

### 連続体仮説(略してCH)

我々が使っている使ってる数学(自然数、集合などの理論を含む)

からはCHの否定を証明することができない

これを示したのはゲーテル(1938)

1961、コーエンが逆も成り立つことを示した

“我々が普段使っている数学でCHが成り立つことも証明できない”


## 問題2

濃度上の順序は全順序か？

$|A| \geq |B|\ and\ |B| \geq |C| \Rightarrow |A| \geq |C|$

$|A| \geq |B|\ and\ |B| \geq |A| \Rightarrow |A| = |B|$

これらは順序

$|A|\neq|B|$ なものを全順序と呼ぶ


この解答は**YES**

次の公理を使う必要がある

## 定義0.8

Aを集合を要素にもつ集合

$\cup A = \{a|\exists b \in A, a \leq B\}$

例：

$A = \{\{1,2\}, \{1,3\}\}$

$\cup A = \{1,2,3\}$


## 選択公理 axiom of choice

公理的集合論における公理のひとつで、どれも空でないような集合を元とする集合（すなわち、集合の集合）があったときに、それぞれの集合から一つずつ元を選び出して新しい集合を作ることができるというもの

眠い

## 定義0.8(順序、全順序)

一般に集合S上の２項関係>=が順序であるとは、

1. $\forall a, b, c \in S, a\geq b, \geq b \geq c \Rightarrow a\geq c$

2. $\forall a \in S, a\geq a$

のことで、さらに

3. $\forall a, b \in S$でa>=bかb>=aが成り立つ

が成り立つとき、全順序という。


全順序になることは選択公理が必要
