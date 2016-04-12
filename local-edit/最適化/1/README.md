# 序章  

## 最適化問題とは  

- 数理計画問題 Mathematical Programming Problem  

- 何らかの計画的な条件を満たす解を数理的手法でもとめる問題といい、  

  それを解く手法の研究全般を数理計画法(Mathematica Programming)という  
  

### 最適化問題  

- Optimization Problem  

- 与えられた条件の下で何らかの関数を最小化または最大化する問題  

理論的研究は古くからあったが、コンピュータの登場とそれに向いた手法(線
形計画法に対する)が  

1940年代に開発され実用的になり急速に発展  

=> 非線形計画問題への拡張が進み現在は大規模問題へ  
  
## 変数が属する空間  

$$$\\boldsymbol{x} = (x_1, x_2, ..., x_n)$$$  

- 有限次元空間 finite dimensioned space  
- 無限次元空間 infinite dimensioned space  
  - ex. 数列空間 $$$\boldsymbol{x} = (x_1, x_2, ...,   x_n, ...) = (x_n)_{n\in{\\boldsymbol{N}}}$$$  
  - ex. 関数空間 $$$ \boldsymbol{x} = f, g, h, ...  $$$
- 変分問題  
- 最適制御問題  
  - 以後専ら有限次元に限る  
- 問題のいろいろな分類  
  1. 変数の性質  
    - 連続(=実数)変数  
      - 連続最適化問題(continuous)  
    - 離散(=整数)変数  
      - 離散最適化問題(discrete)  
