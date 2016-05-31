### (1.6)　SをG-Sアルゴリズムの一つで返されるペアの集合とすると、Sは安定マッチングである

### 男と女を入れ替えた場合は？

- m: w < w'
- m': w < w'
- w: m < m'
- w': m' < m

男性視点の安定マッチング: (m, w), (m', w')

女性視点の安定マッチング: (m', w), (m, w')

### 特徴づける

どの男性も出来る限り可能な最善のパートナーとペアになる

各男性mに対してペア(m, w)を含む安定マッチングが存在するとき、

wはmの正当なパートナーという。

なおかつ、wより好きなどの女性もmさんと正当なパートナーにならないとき

wさんをmの「最善の正当なパートナー」という。

mの最善のパートナーのことを <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20best%28m%29"> と書きます。

ペアの集合 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5C%7B%28m%2C%20best%28m%29%29%20%7C%20m%20%5Cin%20M%5C%7D"> を <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S%5E*"> とする。

### (1.8) 安定マッチング <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S%5E*">において、女性は最悪の正当な男性とペアになっている
