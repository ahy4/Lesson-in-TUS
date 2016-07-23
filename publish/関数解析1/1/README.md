# 第1章　実数列の極限とベクトル空間

p.2

## 1.1. 実数列の極限

### 1 - Definition 1.1

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28a_n%29_%7Bn%3D1%7D%5E%7B%5Cinfty%7D">:実数列、α：実数

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20lim%5C%20a_n%20%3D%20%5Calpha">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20%5Cepsilon%20%3E%200%2C%20%5Cexists%20N%28%5Cepsilon%29%20%5Cin%20%5Cboldsymbol%7BN%7D">
<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20N%28%5Cepsilon%20%3C%20n%20%5CRightarrow%20%7Ca_n%20-%20%5Calpha%7C%20%3C%20%5Cepsilon%29">

### 2 - 公理 1.1 実数の連続性
#### 1 上に有界な任意の部分集合

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20A%5Cin%7B%5Cboldsymbol%7BR%7D%7D">

に対して上限

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20supA%20%5Cin%20%5Cboldsymbol%7BR%7D">が存在する

#### 2 下に有界なな任意の部分集合

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20A%5Cin%7B%5Cboldsymbol%7BR%7D%7D">

に対して下限

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20inf%20A%20%5Cin%20%5Cboldsymbol%7BR%7D">が存在する

### 3 Example 1.1 (収束列は有界である)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cepsilon%20%3D%201">に対して、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20N_1%20%5Cin%20%5Cboldsymbol%7BN%7D">が存在して

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20N_1%20%3C%20n%20%5CRightarrow">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%7Ca_n%20-%20%5Calpha%7C%20%3C%20%5Cepsilon%20%3D%201%20%5CRightarrow">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Calpha%20-%201%20%3C%20a_n%20%3C%20%5Calpha%20+%201">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b_n%20%3D%20min%5C%7Ba_1%2C%20...%2C%20a_%7BN_1%7D%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20c_n%20%3D%20max%5C%7Ba_1%2C%20...%2C%20a_%7BN_1%7D%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20b%20%5Cleq%20a_n%20%5Cleq%20c%20%28n%20%3D%201%2C%20...%2C%20N_1%29">

より<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20a_n">は有界

### 4 Property 1.1

##### (a) 単調有界数列の収束性

1. 上に有界な単調増加列は収束する<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28a_n%20%5Cleq%20a_%7Bn+1%7D%29%2C%20%28lim%5C%20a_n%20%3D%20sup%7Ba_n%7D%29">

2. したに有界な単調減少列は収束する<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28a_n%20%5Cgeq%20a_%7Bn+1%7D%29%2C%20%28lim%5C%20a_n%20%3D%20inf%7Ba_n%7D%29">

3. **単調な** 実数列a_nに対して、「a_nが収束する」⇔「a_nが有界」

##### (b) Cauchyの判定条件

「実数列a_nが収束する」⇔

a_n がCauchy列である

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cforall%20%5Cepsilon%20%3E%200%2C%20%5Cexists%20N%28%5Cepsilon%7B%7D%29%20%5Cin%20%5Cboldsymbol%7BN%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20N%28%5Cepsilon%7B%7D%29%20%5Cleq%20m%2C%20n%20%5CRightarrow%20%7Ca_m%20-%20a_n%7C%20%3C%20%5Cepsilon%20">

Cauchy列⇒収束　が言えることを「完備性」という

（実数の完備性のような）

### 5 Definition 1.2

実数列a_nに対して

##### (a) 上極限<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20lim%5C%20sup%5C%20a_n">とは

###### a_n が上に有界でない時、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20lim%5C%20sup%5C%20a_n%20%3D%20%5Cinfty">

###### a_n が上に有界である時、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28%5Chat%7Ba_p%7D%29_%7Bp%3D1%7D%5E%7B%5Cinfty%7D%3B%20%5Chat%7Ba_p%7D%20%3D%20sup%5C%20%5C%7Ba_n%20%7C%20n%20%5Cgeq%20p%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20lim%5C%20sup%5C%20a_n%20%3D%20if%5C%20%28%5Chat%7Ba_p%7D%29_%7Bp%3D1%7D%5E%7B%5Cinfty%7D%5C%20has%5C%20bound%5C%20then%5C%20lim%5C%20%5Chat%7Ba_p%7D%20else%20-%5Cinfty%7B%7D">


p.8
## 1.2 ベクトル空間

### 1 - Definition 1.3
集合XがR上のベクトル空間であるとは、


#### (a) 加法について、
1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cboldsymbol%7Bx%7D+%5Cboldsymbol%7By%7D%20%3D%20%5Cboldsymbol%7By%7D+%5Cboldsymbol%7Bx%7D"> 可換則
2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28%5Cboldsymbol%7Bx%7D+%5Cboldsymbol%7By%7D%29%20+%20%5Cboldsymbol%7Bz%7D%20%3D%20%5Cboldsymbol%7Bx%7D+%28%5Cboldsymbol%7By%7D%20+%20%5Cboldsymbol%7Bz%7D%29"> 結合則
3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cexists%20%5Cboldsymbol%7B0%7D%20%5Cin%20%5Cboldsymbol%7Bx%7D%3B%20%5Cboldsymbol%7Bx%7D+%5Cboldsymbol%7B0%7D%20-%20%5Cboldsymbol%7Bx%7D"> 単位元の存在
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