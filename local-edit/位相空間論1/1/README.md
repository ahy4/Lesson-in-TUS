## 連続性に関する概念の抽象化

距離空間 →(抽象化) 位相空間

### 定理
- X, Yを位相空間
- X×Yを　X, Yの直積空間
- $$$\phi \not\in A \subseteq X, \phi \not\in B \subseteq Y$$$

とすると、

**A×BがX×Yの閉集合⇔AがXの閉集合かつBがYの閉集合**

X, Yを集合とし、

f: X->Yとするとき、

$$$A \subseteq X$$$ に対し、$$$f(A) = \{f(x)|x \in A}$$$

と定義し、

$$$B \subseteq Y$$$ に対し、$$$f^{-1}(A) = \{x|f(x) \in Y, f(Y) \in B}$$$

と定義する

Xを集合とする

Xにおける数列$$$(a_1, ...)$$$を$$$(a_n)_{n\in{N}}$$$のように表す

一般に、$$$\Lambda$$$を集合とし、各$$$\lambda \in \Lambda$$$に対して

$$$a_\lambda \in X$$$　が与えられてるとするとき

$$$\Lambda$$$ を添数集合とするXにおける元の族

$$$(a_\lambda{})\_{\lambda \in \lambda}$$$

を考えることができる

集合族$$$(A_\lambda)\_{\lambda \in \Lambda}$$$ に対し、

$$$\prod_{\lambda\in\Lambda} = {(a\_\lambda)|\forall \lambda \in \Lambda, a\_\lambda \in \Lambda}$$$

と定義し、これを

$$$(A_\lambda)\_{\lambda \in \Lambda}$$$ の連続集合という。

Λ={1, ..., n}のとき、

$$$\prod_{\lambda\in\Lambda}$$$を$$$\Lambda_1\times...\times\Lambda\_n$$$とも書く

Xを集合、d: X*X->Rとし、次の３条件を満足するとする

1. $$$\forall x, y \in Y, d(x, y) \geq 0$$$ であって、
    d(x, y) = 0 <=> x = y
2. $$$\forall x, y \in X, d(x, y) = d(y, x)$$$
3. $$$\forall x, y, z \in X, d(x, y) + d(y, z) \geq d(x, z)$$$

このとき、

dはX上の距離(関数)である

Xはdに関して距離空間をなす

(X, d)は(Xを集合とする)距離空間である

Xは距離空間である

などという

d'(x, y) -= d|(X'*X')

今後、距離空間(X, d)に対し、Xの部分集合X'を距離空間とみなすときは

特に断らなければ上述のd'を距離空間として考える

一般に、A', B'を集合、y: A' -> B, A in A'としf: A->Bを

f(a)=g(a)(a in A)により定めるとき、fをgへの制限といい、

f = g | A と表す


眠くなった
