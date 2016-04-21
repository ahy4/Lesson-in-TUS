# 第1章　確率

## §1.1 標本空間と事象

### 標本空間

- 起こりうる結果を表す**集合**

### 標本点

- 標本空間の**要素**

### 事象

- 標本空間の部分**集合**


#### 空事象

- 起こりえない事象, <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cphi"> (全事象:<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5COmega">)

#### 和事象

- <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A%5Ccup%20B">

#### 積事象

- <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A%5Ccap%20B">

#### 余事象

- <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A%5Ec">

#### 差事象

- <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A%20-%20B%20%3D%20A%5Ccap%20B%5Ec">

#### 背反(重要)

- <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A%5Ccap%20B%20%3D%20%5Cphi">の時、「AとBは互いに背反である」


### 交換法則、結合法則、分配法則が成り立つ

### ドモルガンの法則が成り立つ


### 定義1.2.1 (p.5)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5COmega">を空でない集合として、その部分集合のある族<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20F">が

1. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5COmega%20%5Cin%20%5Cmathcal%20F">

2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A%20%5Cin%20F%20%5CRightarrow%20A%5Ec%20%5Cin%20F">

3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A_1%2C%20A_2%2C%20...%20%5Cin%20F%20%5CRightarrow%20%5Ccup_%7Bi%3D1%7D%5E%7B%5Cinfty%7DA_i%20%5Cin%20F">

を満たす時、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20F">を完全加法族、<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Csigma">-集合体あるいは <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Csigma">-代数と呼ぶ

### 確率公理

空でないある集合 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5COmega">とその集合加法族Fがあって

Fとの実数位集合関数 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20P%3A%20F%5Cin%20A%20%5Crightarrow%20P%28A%29%5Cin%20%5CBbb%20R"> が条件

1. すべての <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A%5Cin%20F"> で <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20P%28A%29%5Cgeq%200">

2. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20P%28%5COmega%20%29%20%3D%201">

3. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20A_1%2C%20A_2%2C%20...%20%5Cin%20F%2C%20A_i%20%5Ccap%20A_j%20%3D%20%5Cphi%20%5CRightarrow">
   <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20P%28%5Ccup_%7Bi%3D1%7D%5E%7B%5Cinfty%7DA_i%29%3D%5CSigma_%7Bi%3D1%7D%5E%7B%5Cinfty%7DP%28A_i%29">

を満たす時、PをΩ上の確率制定あるいは確率と呼ぶ
