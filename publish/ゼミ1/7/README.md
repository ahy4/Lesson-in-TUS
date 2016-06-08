## 2.4 よく現れる計算時間の復習

### 1. 線形時間 O(n)

例1: 最大値の計算

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20a_1%2C%20a_2%2C%20...%2C%20a_n">

    max = a_1
    For i = 2 to n // => O(n)
      If a_i > max then
        max = a_i // 定数時間
      Endif
    Endfor

例2: ２つのソートリストのマージ

    ２つのソート済リストをA, Bとする
    各リストで、リスト内の場所をさすポインター Current を用意する
    初期設定でそれぞれの先頭の要素をさすようにする
    While 両方のリストがともに空でない
      Current ポインターがさす要素を a_i, b_j とする
      ２つのうち小さい方を出力のリストに追加する
      小さい方の要素野あったリストのCurrentポインタを一つ進める
    Endwhile
    出力リストの後に空でない方のリストをつないで出力する

### 4. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20O%28n%5E3%29">

n個の集合 <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20S_1%2C%20...%2C%20S_n%2C%7E%7E%20S_i%20%5Csubset%20%5C%7B1%2C2%2C...%2Cn%5C%7D%7E%7E%28i%3D1%2C...%2Cn%29">

で、共通の要素を持たない２つの集合があるかどうかを調べる時<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20O%28n%5E3%29"> になる

### 5. <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20O%28n%5Ek%29">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cbegin%7Bpmatrix%7Dn%5C%5Ck%5Cend%7Bpmatrix%7D%20%3D%20%5Cfrac%7Bn%28n-1%29...%28n-k+1%29%7D%7Bk%28k-1%29...%282%29%281%29%7D%5Cleq%20%5Cfrac%7Bn%5Ek%7D%7Bk%21%7D">
