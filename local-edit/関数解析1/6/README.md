5/31

１． [Property 2.2]

(a)

(i)

$U_i ~ (i = 1, ..., n):~ open~set$ (有限個)

$\Rightarrow \cap_{i=1}^n U_i$ はopen set になる

(ii)

加算無限この閉集合U_i(i=1,2,...)

$\Rightarrow U_i$ は閉集合になるとは限らない

(b)

閉集合について、$S_i = X \backslash U_i$

・有限個→ $\cup_{i=1}^n S_i$はclosed set

・加算無限個→ $\cup_{i=1}^n S_i$は閉集合になるとは限らない

２．[Def 2.6]

(a) X: metric space

$S\subset X, x\in S$ に対して

$\exists r > 0; B(x, r) \subset S$

が成り立つ時xをSの内点という

Sの内点の集合全体を内部(interior)といい、int S とも書き、

$S^0$で表す

(b) $x \in S$ が与えられた時、

$x_n \rightarrow x$ (x_n \in S \backslash \{x\})

となる点列{x_n}が定義できるとき、xを

Sの集積点(accumulation point)という。

集積点の集合全体をSの導集合(derived set)といい、

$S^d$と表す

３．[Property 2.3] (点列による閉集合の特徴付け)

X: metric space

$S \subset X$

(a) $\overline S = S \cup S^d$ (Sバーは閉包)

(b) Sは閉集合 $\Rightarrow S^d \subset S~~~(S=\overline S)$

(c) Sは閉集合⇔「$x\in X$に収束する点列$x_n\in S$が存在するならば$x\in S$」


## 2.4 写像の連続性

４． [Def 2.7]

X(metric space) -> $d_X$ (metric)

Y(metric space) -> $d_Y$ (metric)

$D\subset X, f: D\rightarrow Y$

$\displaystyle \lim_{x\rightarrow \xi}f(x)=\alpha$

５． [Property 2.4] (p38)

６． [def] (写像の連続性)

fが $\xi \in D$ で連続であるとは、

$x\rightarrow\xi \Rightarrow f(x) \rightarrow f(\xi )$

または、

$f(D\cap B_X(\xi ,\delta)) \subset B_Y(f(\xi ), \varepsilon)$

### 関数解析の小テスト

３週間後(6/21)

教科書の証明

* 距離空間

* 完備性

先生が指定した場所：
1.
  - p18 例題2.1 $(l^p, d_p)$
  - $D_1, D_2, D_3$が証明できるか？ $(l^∞, d_∞)$
  (ヘルダー, Minkowskey は結果を使って良い)
2. Th 2.4 (p24~)
  $\mathbb R, \Bbb R^N$の完備性
2. 例題2.3 $l^p$ の完備性 (p26~)

4. 例題 2.4 (p27~) (a)のみ
  $(C[a,b],d_p)$: metric space
