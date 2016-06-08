6/7

p40

### [Th.2.2]

$(X, dx), (Y, dy): metric space$

$f:~X\rightarrow Y$

このとき、

「fがXで連続」

⇔

「$U\subset Y$がopen set ならば、

$f^{-1}(U)\equiv\{x\in X | f(x)\in U\}$ はXのopen setである」

p42

## 2.5 コンパクト性と最大値・最小値の原理

### [Def 2.9]

(a)

X: metric space

$S\subset X$ に対して

開集合の属 $u=\{O_u | \mu\in M\}$

があって

$S\in \displaystyle\cup_{\mu\in M} O_\mu$

となるとき、uはSの一つの開被覆(open covering)という

(b)

Sの任意の開被覆uに対して、適当な有限この開集合$O_{\mu_1},...,O_{\mu_m}\in u$

を選んで、 $S\subset O_{\mu_1}\cup...\cup O_{\mu_m}$

となるとき、Sはコンパクト(compact)

という

(c\)

Sの点から構成されるどんな点列 $(x_n)^\infty_{n=1}$ に対しても

S中のいずれかの点に収束する部分列 $(x_m(k))_{k=1}^{\infty}$ の存在が保証される時、

Sは点列コンパクトであるという。

### [Th.2.3]

(a)

X: metric space

$S \subset X$

「Sはcompact」

⇔

「Sは点列コンパクト」

⇒

「Sは有界閉集合」

(b) [Heine-Borelの被覆定理]

$l^2(N)\equiv(\Bbb R^N, d_2), S\subset \Bbb R^n$

「Sはcompact」⇔「Sは点列コンパクト」⇔「Sは有界閉集合」

### [Ex.2.8]

(a)

$\Bbb R$ において

$S_1 = \{0\}\cup\{1\}\cup\{\frac{1}{2}\}\cup...\cup\{\frac{1}{n}\}\cup...$

はcompactとなる

(b) $\Bbb R$ において

$S_1 = \{1\}\cup\{\frac{1}{2}\}\cup...\cup\{\frac{1}{n}\}\cup...$

はcompactではない

### [Th.2.4]

$(X, d_X),(Y,d_Y)$: metric space

$f:X\rightarrow Y$は連続写像とすると

$S\subset X$: compact setminus

$\Rightarrow f(S)\subset Y$ はcompactとなる

### [Th.2.5] (最大値・最小値の定理)

X: metric space

$S\subset X$: compact

$f: S\rightarrow \Bbb R$ が連続

⇒fはS上で最大値及び最小値をとる
