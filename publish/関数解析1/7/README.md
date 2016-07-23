6/7

p40

### [Th.2.2]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28X%2C%20dx%29%2C%20%28Y%2C%20dy%29%3A%20metric%20space">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%3A%7EX%5Crightarrow%20Y">

このとき、

「fがXで連続」

⇔

「<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20U%5Csubset%20Y">がopen set ならば、

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%5E%7B-1%7D%28U%29%5Cequiv%5C%7Bx%5Cin%20X%20%7C%20f%28x%29%5Cin%20U%5C%7D"> はXのopen setである」

p42

## 2.5 コンパクト性と最大値・最小値の原理

### [Def 2.9]

(a)

X: metric space

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S%5Csubset%20X"> に対して

開集合の属 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20u%3D%5C%7BO_u%20%7C%20%5Cmu%5Cin%20M%5C%7D">

があって

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S%5Cin%20%5Cdisplaystyle%5Ccup_%7B%5Cmu%5Cin%20M%7D%20O_%5Cmu">

となるとき、uはSの一つの開被覆(open covering)という

(b)

Sの任意の開被覆uに対して、適当な有限この開集合<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20O_%7B%5Cmu_1%7D%2C...%2CO_%7B%5Cmu_m%7D%5Cin%20u">

を選んで、 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S%5Csubset%20O_%7B%5Cmu_1%7D%5Ccup...%5Ccup%20O_%7B%5Cmu_m%7D">

となるとき、Sはコンパクト(compact)

という

(c\)

Sの点から構成されるどんな点列 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28x_n%29%5E%5Cinfty_%7Bn%3D1%7D"> に対しても

S中のいずれかの点に収束する部分列 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28x_m%28k%29%29_%7Bk%3D1%7D%5E%7B%5Cinfty%7D"> の存在が保証される時、

Sは点列コンパクトであるという。

### [Th.2.3]

(a)

X: metric space

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S%20%5Csubset%20X">

「Sはcompact」

⇔

「Sは点列コンパクト」

⇒

「Sは有界閉集合」

(b) [Heine-Borelの被覆定理]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20l%5E2%28N%29%5Cequiv%28%5CBbb%20R%5EN%2C%20d_2%29%2C%20S%5Csubset%20%5CBbb%20R%5En">

「Sはcompact」⇔「Sは点列コンパクト」⇔「Sは有界閉集合」

### [Ex.2.8]

(a)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CBbb%20R"> において

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S_1%20%3D%20%5C%7B0%5C%7D%5Ccup%5C%7B1%5C%7D%5Ccup%5C%7B%5Cfrac%7B1%7D%7B2%7D%5C%7D%5Ccup...%5Ccup%5C%7B%5Cfrac%7B1%7D%7Bn%7D%5C%7D%5Ccup...">

はcompactとなる

(b) <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CBbb%20R"> において

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S_1%20%3D%20%5C%7B1%5C%7D%5Ccup%5C%7B%5Cfrac%7B1%7D%7B2%7D%5C%7D%5Ccup...%5Ccup%5C%7B%5Cfrac%7B1%7D%7Bn%7D%5C%7D%5Ccup...">

はcompactではない

### [Th.2.4]

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%28X%2C%20d_X%29%2C%28Y%2Cd_Y%29">: metric space

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%3AX%5Crightarrow%20Y">は連続写像とすると

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S%5Csubset%20X">: compact setminus

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5CRightarrow%20f%28S%29%5Csubset%20Y"> はcompactとなる

### [Th.2.5] (最大値・最小値の定理)

X: metric space

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20S%5Csubset%20X">: compact

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20f%3A%20S%5Crightarrow%20%5CBbb%20R"> が連続

⇒fはS上で最大値及び最小値をとる
