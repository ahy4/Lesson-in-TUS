## PM-Th.5 $p\supset q \equiv \sim q\supset \sim p$

### PM-Th.5a $(p\supset q) \supset (\sim q \supset \sim p)$

▼

1. $p\supset \sim\sim p$ [PM-Th4b]
2. $q\supset \sim\sim q$ [1. PDR1]
3. $\sim p \vee q\supset \sim p\vee\sim\sim q$ [2. DR4]
4. $(p\supset q)\supset\sim p\vee\sim\sim q$ [3.Df2]
5. $p\vee q \supset q \vee p$ [A3]
6. $\sim p \vee \sim\sim q\supset\sim\sim q\vee \sim p$ [5. PDR1]
7. $(p\supset q)\supset \sim\sim q\vee \sim p$ [4,6 DR5]
8. $(p\supset q)\supset (\sim q\supset \sim p)$ [7. DR2]

▲

### PM-Th.5b $(\sim q \supset \sim p)\supset(p\supset q)$

▼

1. $\sim\sim p\supset p$ [PM-Th4b]
2. $\sim\sim q\supset q$ [1. PDR1: p->q]
3. $\sim p \vee\sim\sim q\supset \sim p \vee q$ [2 DR4]
4. $\sim p \vee\sim\sim q\supset (p\supset q)$ [3 Df2]
5. $p\vee q \supset q \vee p$ [A3]
6. \~~qv~p>~pv~~q [5 PDR1]
7. ~~qv~p>(p>q) [4,6. DR5]
8. (~q>~p)>(p>q) [7 Df2]

▲

## ド・モルガンの法則

## PM-Th.6 $\sim(p\land q)\equiv \sim p \lor \sim q$

## PM-Th.7 $\sim(p\lor q)\equiv \sim p \land \sim q$

Df.1 $a\land b := \lnot(\lnot a\lor \lnot b)$

### PM-Th6a ~(pAq)>~pv~q  (A:and)

▼

1. p>p[PH-Th2]
2. ~(pAq)>~(pAq) [PDR1]
3. ~(pAq)>~~(~pv~q) [Df1]
4. ~~p>p
5. ~~(~pv~q)>~pv~q
6. ~(pAq)>~pv~q [DR5]

▲

### PM-Th6a ~pv~q>~(pAq)

▼

6a同様

▲

### PM-Th.7a ~(pvq)>~pA~q

▼

1. ~~p>p [PM-Th4b]
2. qv~~p>qvp [1. DR4]
3. pvq>qvp [A3]
4. \~~pvq>qv~~p [3.PDR1:p->~~p]
5. ~~pvq>qvp [2, 4 DR5]
6. qvp>pvq [3 PDR1]
7. ~~pvq>pvq [5, 6 DR5]
8. ~~q>q [1. PDR1]
9. \~~pv~~q>~~pvq [8 DR4]
10. \~~pv~~q>pvq [7, 9 DR5]
11. ~(pvq)>~(~~pv~~q) [10 DR9]
12. ~(pvq)>~pA~q [11 Df.1]

▲

※PM-Th5 (p>q)>(~q>~p)  --> DR9 PM|a>b ==> PM|~b>~a

### PM-Th.7a ~pA~q>~(pvq)

証明略

## DR＊ PM| ...vav... かつ PM|a>b ==> PM| ...vbv...

要するに

PM| cvavd かつ PM|a>b ==> PM| cvbvd

DR4 PM|a>b ==> PM|cva>cvb

### DR4* PM|a>b ==> PM|cvavd>cvbvd

▽

0\. PM|a>b [仮定]

----

1. PM|a>b ==> PM|cva>cvb [DR4]
2. PM|cva>cvb [分離則]
3. PM|dv(cva)>dv(cvb) [2 DR4]
4. PM|pvq>qvp [A3]
5. PM|(cva)vd>dv(cva) [4 PDR1]
6. PM|cvavd>dv(cvb) [3, 5 DR5]
7. PM|dv(cvb)>(cvbvd) [4 PDR1]
8. PM|cvavd>dvcvb [6,7 DR5]

$\therefore$ PM|a>b==>PM|cvavd>cvbvd

△

## DR4** PM|cvavdかつPM|a>b==>PM|cvbvd

▽

0\. PM|cvavd

00\. PM|a>b

----

1. PM|a>b ==> PM|cvavd>cvbvd
2. PM|cvavd>cvbvd [ぶんりそく]
3. PM|cvbvd [0,2 PDR2]

$\therefore$ PM|cvavdかつPM|a>b==>PM|cvbvd

#### DR4**+PM-Th4b(~~p>p) ---> DR8b**

PM|cv~~avdかつPM|~~a>a ==> PM|cvavd

### PM-Th7a ~(pvq)>~pA~q

▼

1. ~(pAq)>~pv~q [PM-Th6a]
2. ~(~pv~q)>~~(pAq) [1. DR9]
3. ~(~pv~q)>pAq [2 DR4**+PM-Th4b]
4. ~(~~pv~~q)>~pA~q [3 PDR1]
5. ~(pvq)>~pA~q [4 DR4**+PM-Th4b]

▲
