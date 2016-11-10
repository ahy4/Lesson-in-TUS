## 定義4.1 剰定理

※めんどっちいからK[X]ってかいてあるけど本当はXの上にバーが付きます

$I\subset K[X]$　イデアルとする

$f,g\in K[X]$ に対して

$f \sim g \Leftrightarrow f-g\in I$ で同値関係"~"を定める

~の同値類に対して

$[f]_\sim+[g]_\sim=[f+g]_\sim$

$[f]_\sim\cdot[g]_\sim=[f\cdot g]_\sim$

で＋と・を定めると同値群全体は可換環になる

この環でK[X]のIによる剰余環と呼び

K[X]/I で表す

### 例

$\Bbb R[X]\supset I = <X^2+1>$

$^\forall f \in \Bbb R[X]$ fをX^2+1で割ったあまりを$aX+b(a,b\in\Bbb R)$とすると

$f \sim aX+b$

$\Bbb R[X]/I=\{[aX+b]_\sim|a,b\in\Bbb R\}$

・・・要するに、$[aX+b]_\sim$は$ax+b$のこと

## 定義4.2

$K[X]$とIはK上の線形空間であるので(IはKの部分空間)

K[X]/Iは(乗算を無視して)K上の線型空間としての商空間ともみなせる

これの線形空間としての次元をdim K[X]/I で表す

### 例

$\Bbb K[X]/X^2+1$の基底は{1,X}なので

dim $\Bbb R[X]/<X^2+1>=2$
