# 第1章　確率

## §1.1 標本空間と事象

### 標本空間

- 起こりうる結果を表す**集合**

### 標本点

- 標本空間の**要素**

### 事象

- 標本空間の部分**集合**


#### 空事象

- 起こりえない事象, $\phi$ (全事象:$\Omega$)

#### 和事象

- $A\cup B$

#### 積事象

- $A\cap B$

#### 余事象

- $A^c$

#### 差事象

- $A - B = A\cap B^c$

#### 背反(重要)

- $A\cap B = \phi$の時、「AとBは互いに背反である」


### 交換法則、結合法則、分配法則が成り立つ

### ドモルガンの法則が成り立つ


### 定義1.2.1 (p.5)

$\Omega$を空でない集合として、その部分集合のある族$F$が

1. $\Omega \in \mathcal F$

2. $A \in F \Rightarrow A^c \in F$

3. $A_1, A_2, ... \in F \Rightarrow \cup_{i=1}^{\infty}A_i \in F$

を満たす時、$F$を完全加法族、$\sigma$-集合体あるいは $\sigma$-代数と呼ぶ

### 確率公理

空でないある集合 $\Omega$とその集合加法族Fがあって

Fとの実数位集合関数 $P: F\in A \rightarrow P(A)\in \Bbb R$ が条件

1. すべての $A\in F$ で $P(A)\geq 0$

2. $P(\Omega ) = 1$

3. $A_1, A_2, ... \in F, A_i \cap A_j = \phi \Rightarrow$
   $P(\cup_{i=1}^{\infty}A_i)=\Sigma_{i=1}^{\infty}P(A_i)$

を満たす時、PをΩ上の確率制定あるいは確率と呼ぶ
