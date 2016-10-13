一般にある演繹的体型MとこのMについて

公理化した体型ASがあって

任意の式 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha">について、「<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha">が直感的に真である」

ということを、「<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha">はM恒真式である」と言い、これを

「<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20M%7C%3D%5Calpha">」

とかく。また、公理化ASにおいて「αがASショウメイカノウナシキデアル」

ということを

AS|-α

「αがAS証明可能なしきでないといい」

AS-|α


## ASの完全性

### 弱い完全性：

任意の式αについて

M|=α<=>AS|-α

### 強い完全性

AS-|α (αのASに対する独立性)

AS-|~α (αのASに対する無矛盾性)

AS-|αかつAS-|~α

であるような式αは存在しない

ASによって証明も反証もされないような命題は存在しない


SPC(標準命題論理(?))の体型において「αが直感的に真である」

ということを「αはSPC恒真式である」といい、

SPC|=α

とかく。その定義として

SPC|=α <=(def)=>  任意の付値関数<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i">について<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5B%5Calpha%5D%3D1">

SPC=|αと書く時、これを「αはSPC恒偽式である」

とよみ、

SPC=|α <=(def)=> 任意の付値関数<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i">について<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5B%5Calpha%5D%3D0">


SPCを公理化したPM公理化について、

任意の式αについて、「αがPM証明可能式である」

ということを

PM|-α

「αがPM証明可能式でない」

ということを

PM-|α

とかく。

任意のαについて

1. [PMの健全性] PM|-α ==> SPC|=α
2. [PMの無矛盾性] PM|-α ==> PM-|~α
3. [PMの完全性] SPC|=α ==> PM|-α


# 1. [PMの健全性]

任意の式αについて

PM|-α ==> SPC|=α

▽

a) A1-A4の公理がすべてSPC恒真式であること

b) PDR1,2は恒真式を保存すること

これらを証明する

a)について

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5BA1%5D%3DV_i%5BpVp%3Ep%5D%3DV_i%5B%7E%28pVp%29Vp%5D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%3D-V_i%5BpVp%5D+V_i%5Bp%5D%3D-%28V_i%5Bp%5D+V_i%5Bp%5D%29+V_i%5Bp%5D">

いま<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5Bp%5D">=1or0なので

V_i[p]=1のときV_i[A1]=1
V_i[p]=0のときV_i[A1]=1

ゆえに任意の<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i">について

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5BA1%5D%3D1">

なので定義により

SPC|=A1

(真理値表を書いてるのと同じ)

同様にしてA2,3,4もまたSPC恒真式であることが証明される

b)について

PDR1の恒真性の保存は自明

PDR2の[分離則] PM|-αかつPM|-α>β ==> PM|-β

ここで証明されるべきは

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20SPC%7C%3D%5Calpha%20%u304B%u3064%20SPC%7C%3D%5Calpha%3E%5Cbeta%20%5CRightarrow%20SPC%7C%3D%5Cbeta">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20SPC%7C%3Da%u3068SPC%7Cb">を仮定する

このとき定義により　任意の<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i">について

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5Ba%5D%3D1">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5Ba%3Eb%5D%3D1">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5B%7EaVb%5D%3D1">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20-V_i%5Ba%5D+V_i%5Bb%5D%3D1">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20-1+V_i%5Bb%5D%3D1">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5Bb%5D%3D1">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Ctherefore%20SPC%7C%3Db">

△

(2) [無矛盾性]

任意の式について

PM|-α ==> PM-|~α

▽

1 PM|-α ==> SPC|=α [健全性]

2 SPC|=α<=>任意のV_iについてV_i[α]=1 [SPC恒真式の定義]
<=>-V[α]=V[~a]=-1=0
<=>SPC=|~a

3 PM|-a ==> SPC|=~a [仮言的三段論法]

4 SPC|=a でない => PM-|a [1. 対偶]

5 SPC|=~aでない => PM-|~a [4. 代入　a->~a]

6 SPC=|~a <==> 任意のV_iについて<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5Ba%5D%3D0">

7 任意のV_iについて<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5B%7Ea%5D%3D0"> ==> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20V_i%5B%7Ea%5D%3D0">なるV_iが存在

<==> <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20SPC%7C%3D%7Ea">でない

8 SPC=|~a ==> SPC|=~a でない [6,7 仮言的三段論法]

9 SPC=|~a ==> PM-|~a [5,8 仮言的三段論法]

10 PM|-a ==> PM-|~a [3,9 仮言的三段論法]

△


(3) [PMの完全性]　任意の式aについて

SPC|=a ==> PM|-a

和積標準形(CNF)とは、リテラルの論理和の論理積.

ex. (pV~pVqV^r)A(pV~qVs)A(~tV~uVv)

<CNF定理-1> important

任意のSPC論理式は同値変換によって

それと同値のCNFに書き換えることができる

<CNF定理-2> important

任意のCNFにおいて、次の恒真性条件をみたすとき、

**その限りで**CNFはSPC恒真式である。

[CNFの任意の相乗項となる論理和に、

任意の命題変更pとその否定~pが同時にふくまれている]←恒真性条件
