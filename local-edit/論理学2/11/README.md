12/15 休み
 
12/22 最終講義、単位の取り方
 
## A1 [始元存在公理]
 
$\exists x~\forall t~[t \not \in x]$
 
=> 始原の唯一性
 
$\forall x~\forall y~\forall t~[t \not \in x\land t \not \in y\supset x=y]$

### Df.$\emptyset$

$\forall x [x=\emptyset \equiv df. ~~~ \forall t[t\not\in x]]$

## A2 [対集合公理]

$\forall u \forall v \exists x\forall t[t\in x\equiv t=u\lor t=v]$

### Df.{}

$\forall u \forall v \exists x[x=\{u,v\}\equiv df.~~~\forall t[t\in x\land (t=u\lor t=v)]]$

※u=vのとき{u,v}={u,u}={u}

## A3 [和集合公理]

$\forall u\forall v\exists x\forall t[t\in x \equiv t\in u\land u\in v]$

「任意の集合vについて、そのvの元となるuすべての元tを元とする集合xが存在する」

$x=\bigcup_v$

### Df.$\bigcup$

$\forall u\forall v\forall x[x=\bigcup_v \equiv df.~~~ \forall t [t\in x \equiv t\in u\land u\in v]]$

### Df.$\cup$

$\forall u\forall v\forall x[x=\bigcup_v \equiv df.~~~ \forall t [x = u\cup v \equiv \bigcup_{\{u,v\}}]]$

$n+1 = n\cup \{n\} = \{0,1,...,n-1\}\cup \{n\} = \{0,1,...,n\}$


$\Bbb N$ = {1,2,3,...}

$\Bbb R$ ... 実数集合

$b/a~~(a,b\in \Bbb N) = <a,b>$ (a,bによるベクトル)

$\Bbb N^2 = \{<x,y>|x,y\in \Bbb N\}$

$<x,y,z>=df.$  {x,{y},{{z}}}

$\Bbb R$について

実数とは：自然数の片側無限な部分集合のこと

Rとは：Nの部分集合の集合

べき集合：部分集合の集合

$P_\Bbb N = \Bbb R$

## A4 [べき集合公理]

$\forall u \forall v\exists x\forall t[t\in x\equiv u\in t\supset u\in v]$

$\forall v\exists x\forall t[t\in x\equiv t\subseteq v]$

### Df.$P$

$\forall v\forall x[x=P_v \equiv \forall t[t\in x\equiv t\subseteq v]]$

## A5 [無限集合存在公理]

$\exists a [\emptyset \in a \land \forall t [t\in a \supset t\cup {t}\in a]]$

この無限集合を出発において様々な集合残を行うことにより様々な無限集合を作ることができる

## A6 [Fraenkelの置換公理型]

任意の述語関数ψについて

$\forall x\forall y\forall z[\psi(x,y)\land \psi(x,z)\supset y=z]\supset \exists x\forall u\forall t [t\in x\equiv \exists v[v\in u\land \psi(v, t)]]$

前件：「述語関数ψが函数である時=>任意の演算ψに関して」

後件：集合同士の演算の返り値は絶対に集合