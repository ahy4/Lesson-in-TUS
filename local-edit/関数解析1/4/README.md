## 2.2 完備距離空間

### [Def 2.4]

(X, d): **metric space**(距離空間)

(X, d)の任意の**Cauchy列**に対して

この点列の極限が存在して

それが「Xに軸する時、Xは **完備(Complete)** という

→完備距離空間


### 完備化(Completion)

必ずしも完備でない距離空間 (X, d) に対して

Xに新しい点を追加→ $\tilde X \supset X$

さらに $\tilde X$に

$\tilde d(x, y) = d(x, y)~~~x, y \in X$

となる $\tilde d$ を導入して

完備距離空間 $(\tilde X, \tilde d)$ を構成することを完備という

### [Theorem 2.1] 距離空間 $\mathbb R^N$の完備性

1. $\mathbb R$は距離 d(x, y) = |x - y| のもとで完備距離空間

2. $\mathbb R^n$,<br>
  [例1 (b)] $d_p(x, y) = (\displaystyle \sum_{i=1}^{N}|x_i-y_i|^p)^{\frac{1}{p}}$<br>
  [例1 (c\)] $d_{\infty}(x, y) = \displaystyle \max_{1\leq i\leq N} |x_i - y_i|$

-> $d_p$のもとで $\Bbb R^n$は完備距離空間になる


### [Theorem 2.1] 距離空間 $\Bbb R^n$の完備性

1. $\Bbb R$は距離d(x,y)=|x, y|のもとで完備距離空間になる

2. $(\Bbb a_m)_{m=1}^{\infty}$ がcauchy列なので<br>
  $\forall \varepsilon>0, \exists N_1\in \Bbb N~~~N_1 < m_1, m_2 \Rightarrow d(\Bbb a_{m_1}, \Bbb a_{m_2})<\varepsilon$


### [Example 2.3] $l^p$の完備性

距離空間 $(l^p, d_p)(1\leq p< \infty)$ が完備である


l^pとは

$x\in l^p, \Bbb x = (x_1, ..., x_n)$

$((\displaystyle \sum_{i=1}^{\infty}|x_i|^p)^{\frac{1}{p}}<\infty)$
