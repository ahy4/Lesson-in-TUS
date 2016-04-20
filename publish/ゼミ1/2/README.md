# 安定マッチング問題

n人の男性の集合

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20M%20%3D%20%5C%7Bm_1%2C%20...%2C%20m_n%5C%7D">

n人の女性の集合

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20W%20%3D%20%5C%7Bw_1%2C%20...%2C%20w_n%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20M%20%5Ctimes%20W%20%3D%20%5C%7B%28m%2C%20n%29%20%7C%20m%20%5Cin%20M%2C%20w%20%5Cin%20W%5C%7D"> とする

例えば、n=2のとき

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20M%20%3D%20%5C%7Bm_1%2C%20m_2%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20W%20%3D%20%5C%7Bw_1%2C%20w_2%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20M%20%5Ctimes%20W%20%3D%20%5C%7B%28m_1%2C%20w_1%29%2C%20%28m_1%2C%20w_2%29%2C%20%28m_2%2C%20w_1%29%2C%20%28m_2%2C%20w_2%29%5C%7D">

マッチング：

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5C%7B%28m_1%2C%20w_1%29%5C%7D%2C%20%5C%7B%28m_1%2C%20w_2%29%5C%7D%2C...%2C%20%5C%7B%28m_1%2C%20w_1%29%2C%20%28m_2%2C%20w_2%29%5C%7D%2C%20%5C%7B%28m_1%2C%20w_2%29%2C%20%28m_2%2C%20w_1%29%5C%7D">

完全マッチング：

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5C%7B%28m_1%2C%20w_1%29%2C%20%28m_2%2C%20w_2%29%5C%7D%2C%20%5C%7B%28m_1%2C%20w_2%29%2C%20%28m_2%2C%20w_1%29%5C%7D">

### 例1

- mはw'よりwが好き
- m'はwよりw'が好き
- wはmよりm'が好き
- w'はm'よりmが好き

=>

{(m, w), (m', w')} ←これが安定
{(m, w'), (m', w)} ←これが不安定要素があるため(上の例)安定ではない


### 例2

- mはw'よりwが好き
- m'はwよりw'が好き
- wはmよりm'が好き
- w'はmよりm'が好き

=>

{(m, w), (m', w')} ←wだけ不幸せな安定マッチング

{(m, w'), (m', w)}


## 安定マッチングのアルゴリズム(Gale-Shapleyのアルゴリズム)

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20M%20%3D%20%5C%7Bm_1%2C%20m_2%2C%20m_3%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20W%20%3D%20%5C%7Bw_1%2C%20w_2%2C%20w_3%5C%7D">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20m_1%2C%20m_2%2C%20m_3"> の好意順：

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20w_1%3Ew_2%3Ew_3">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20w_1%2C%20w_2%2C%20w_3"> の好意順：

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20m_3%3Em_2%3Em_1">

流れ：

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28m_1%2C%20w_1%29"> x

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28m_2%2C%20w_1%29"> x

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28m_1%2C%20w_2%29"> x

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28m_3%2C%20w_1%29">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28m_2%2C%20w_2%29">

<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%28m_1%2C%20w_3%29">

よって下3つをとったものが安定マッチング

t回までにプロポーズしたペア(m, w) (m, wはn人ずつ)

P(t)とするなら、P(t)<P(t+1)

アルゴリズム全体で、P(・)は高々<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20n%5E2">回しか増加しない
