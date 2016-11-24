## 悪循環原理 (Russell)

**パラドックスには必ず自己否定的自己言及が含まれている**


言語についての言語

言語の階層秩序を犯さないように構成すること


###述語関数

第一階(first order)  ものの性質 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cvarphi%5E1%28x%29">

第二階  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cvarphi%5E2%28x%29">

...

###対象

a,b,c...  もの　　第０型(zero type)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a%5E1%3D%5C%7Bx%7C%5Cvarphi%5E1%28x%29%5C%7D">  第１型

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a%5E2%3D%5C%7Bx%7C%5Cvarphi%5E2%28x%29%5C%7D">  第２型

...


## russellの禁則

第ｎ階の述語関数に、第n-1型よりも高い型をもつ対象記号を代入してはならない


## Russelの解決

ｎ階一般述語論理+階型理論＝＝＞数学

* 理論が煩雑

* 自己否定的自己言及ではなく、自己言及一般を禁止(ex.ヴァイエルシトラス=デデモンドの定理〜例外)

## Zermeloの解決策

〜公理的集合論  (sasc)

数学の対象としての集合のつくりかた(定義の仕方：集合算)


## Cantorの素朴集合論におけり内包公理型


「任意の述語関数φ(x)が定義可能ならば

それから{x|φ(x)}という集合を定義できる」

これでは怪しい集合がたくさんつくれる

⇩

集合算(集合から集合を作る演算)のルールを、公理体系として示し、かつパラドックスを導かないようなものを作る

解決策：(ZF公理化)

１階述語論理+公理的集合論＝＝＞数学


高階述語関数

〜低階述語関数に関する述語関数

## 標準１階述語論理

### [原始記号]

SLPCはSPCの上に展開される

a,b,c ... [対象定項]

x,y,z ... [対象変項]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cphi%2C%5Cpsi%2C%5Czeta"> ... [述語関数記号]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists"> [原始高階関数記号]

### [構成規則]

SPC論理式の命題項(A,B,C,...,p,q,r,...)に

任意のSLPC論理式を代入して得られる式は

SLPC論理式である

FR1  任意の述語関数記号<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cphi">の後ろに

対象項<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20t_1%2Ct_2%2C...%2Ct_n">のベクトルをつけてできる <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cvarphi%28t_1%2C...%2Ct_n%29"> はSLPC論理式である

FR2  任意の対象変項xを含む、任意のSLPC論理式α(x)の前に <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20x"> をつけてできる

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20x%7E%5B%5Calpha%28x%29%5D"> はSLPC論理式である

----

[]派生記号の定義]

Df.<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall">  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20x%7E%7E%5B%5Calpha%28x%29%5D%5Cequiv%20df%20%7E%7E%5Csim%5Cexists%20x%20%7E%7E%20%5B%5Csim%5Calpha%28x%29%5D">
