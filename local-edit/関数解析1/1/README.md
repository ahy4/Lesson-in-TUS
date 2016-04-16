# 第1章　実数列の極限とベクトル空間

p.2

## 1.1. 実数列の極限

### 1 - Definition 1.1

$(a_n)_{n=1}^{\infty}$:実数列、α：実数

$lim\ a_n = \alpha$

$\forall \epsilon > 0, \exists N(\epsilon) \in \boldsymbol{N}$
$N(\epsilon < n \Rightarrow |a_n - \alpha| < \epsilon)$

### 2 - 公理 1.1 実数の連続性
#### 1 上に有界な任意の部分集合

$A\in{\boldsymbol{R}}$

に対して上限

$supA \in \boldsymbol{R}$が存在する

#### 2 下に有界なな任意の部分集合

$A\in{\boldsymbol{R}}$

に対して下限

$inf A \in \boldsymbol{R}$が存在する

### 3 Example 1.1 (収束列は有界である)

$\epsilon = 1$に対して、$N_1 \in \boldsymbol{N}$が存在して

$N_1 < n \Rightarrow$

$|a_n - \alpha| < \epsilon = 1 \Rightarrow$

$\alpha - 1 < a_n < \alpha + 1$

$b_n = min\{a_1, ..., a_{N_1}\}$

$c_n = max\{a_1, ..., a_{N_1}\}$

$b \leq a_n \leq c (n = 1, ..., N_1)$

より$a_n$は有界

### 4 Property 1.1

##### (a) 単調有界数列の収束性

1. 上に有界な単調増加列は収束する$(a_n \leq a_{n+1}), (lim\ a_n = sup{a_n})$

2. したに有界な単調減少列は収束する$(a_n \geq a_{n+1}), (lim\ a_n = inf{a_n})$

3. **単調な** 実数列a_nに対して、「a_nが収束する」⇔「a_nが有界」

##### (b) Cauchyの判定条件

「実数列a_nが収束する」⇔

a_n がCauchy列である

$\forall \epsilon > 0, \exists N(\epsilon{}) \in \boldsymbol{N}$

$N(\epsilon{}) \leq m, n \Rightarrow |a_m - a_n| < \epsilon $

Cauchy列⇒収束　が言えることを「完備性」という

（実数の完備性のような）

### 5 Definition 1.2

実数列a_nに対して

##### (a) 上極限$lim\ sup\ a_n$とは

###### a_n が上に有界でない時、

$lim\ sup\ a_n = \infty$

###### a_n が上に有界である時、

$(\hat{a_p})_{p=1}^{\infty}; \hat{a_p} = sup\ \{a_n | n \geq p\}$

$lim\ sup\ a_n = if\ (\hat{a_p})_{p=1}^{\infty}\ has\ bound\ then\ lim\ \hat{a_p} else -\infty{}$


p.8
## 1.2 ベクトル空間

### 1 - Definition 1.3
集合XがR上のベクトル空間であるとは、


#### (a) 加法について、
1. $\boldsymbol{x}+\boldsymbol{y} = \boldsymbol{y}+\boldsymbol{x}$ 可換則
2. $(\boldsymbol{x}+\boldsymbol{y}) + \boldsymbol{z} = \boldsymbol{x}+(\boldsymbol{y} + \boldsymbol{z})$ 結合則
3. $\exists \boldsymbol{0} \in \boldsymbol{x}; \boldsymbol{x}+\boldsymbol{0} - \boldsymbol{x}$ 単位元の存在
4. 逆元

#### スカラー乗法
1. 分配則
2. 結合則
3. 単位元

### Definition 1.4

#### (a) X, Y; R上のベクトル空間

写像Φ: X->Y

Φが線形写像であるとは、

Φ(ax+by) = aΦ(x)+bΦ(y)