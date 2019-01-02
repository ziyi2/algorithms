## 常用函数
回顾标准的数学函数与记号并阐述两者之间的关系。

### 函数单调性

**单调递增**：若$m \le n 且 f(m) \le f(n)$，则$f(n)$ 是单调递增的。
**严格递增**：若$m < n 且 f(m) < f(n)$，则$f(n)$ 是严格递增的。
**单调递减**：若$m \le n 且 f(m) \ge f(n)$，则$f(n)$ 是单调递减的。
**严格递减**：若$m < n 且 f(m) > f(n)$，则$f(n)$ 是严格递减的。

### 取整记号

对于实数$x$，$\lfloor x \rfloor$读作"$x$的向下取整"，表示的是小于或等于$x$的最大整数。$\lceil x \rceil$则相反。同时$f(x) = \lfloor x \rfloor$ 以及$f(x) = \lceil x \rceil$都是单调递增的。

### 模运算

对于任意整数$a$和任意正整数$n$，$a\ mod\ n$表明是$a \over n$的余数。

$$ a \ mod \  n  = a - n{ \lfloor {a \over n } \rfloor} $$

### 多项式

给定一个非负整数$d$，$n$的$d$次多项式为具有以下形式的一个函数$p(n)$：

$$p(n) = \sum\limits_{i=0}^da_in^i $$

其中$a_i$是多项式的系数且$a_d \neq 0$。当$d \gt 0 $时，$p(n)$ 渐近正，此时有$p(n) = \Theta(n^d)$。


### 指数

对所有实数$a>0、m和n$，有

$$a^0 = 1$$$$a^0 = 1$$
$$a^1 = a$$
$$a^{-1} = {1 \over a}$$
$$(a^m)^n = a^{mn}$$
$$a^ma^n = a^{m+n}$$

对所有$a > 1$的常实数$a$和$b$，有


$$\lim\limits_{n \to \infty }{n^b \over a^n}  =  0 $$

据此可得 $n^b = o(a^n)$，任意大于1的指数函数比任意多项式函数增长得快。


### 对数

记号：

$$lgn = log_2n$$
$$ln\ n = log_en $$
$$ lg^kn = (lgn)^k $$
$$lg lg n = lg(lgn)$$


对于$a>0、b>0、c>0$的实数以及$n$，有

$$ a = b^{log_ba}$$
$$ log_c(ab) = log_ca +log_cb  $$
$$ log_b{a^n} = nlog_ba $$
$$ log_ba = {log_ca \over log_cb }$$
$$ log_b({1\over a}) = -log_ba $$
$$ log_ba = {1\over log_ab }$$
$$ a^{log_bc} =  c^{log_ba} $$

> 对于上面的每个等式，对数的底不为1。


根据**指数**列出的公式，用$lgn$代替$n$、$2^a$代替$a$（在**指数**中$a > 1$，因此这里代替后$ a > 0 $），可得：

$$\lim\limits_{n \to \infty }{n^b \over a^n}  =  0 $$
$$= \lim\limits_{n \to \infty }{lgn^b \over {(2^a)}^{lgn}} $$
$$=  \lim\limits_{n \to \infty }{lg^bn \over {(n)}^{lg2^a}} $$
$$=  \lim\limits_{n \to \infty }{lg^bn \over n^a }  = 0$$

因此对于任意常实数$a>0$和$b$，有$lg^bn  = o(n^a)$，因此任意正的多项式函数都比任意多对数函数增长得快。


### 多重函数

使用记号$f^{(i)}(n)$来表示函数$f(n)$重复$i$次作用于一个初值$n$上，假设$f(n)$为实数集上的一个函数。对非负整数$i$，我们递归的定义

$$f^{(i)}(n) =     \begin{cases} n & 若i = 0 \\\\ f(f^{(i-1)}(n))	& 若i > 0 \end{cases}  $$

例如$f(n) = 2n$，那么$f^{(i)}(n) = 2^in$。


### 多重对数函数

使用记号$lg^*n$来表示多重对数，假设$lg^{(i)}n$对应于**多重函数**的$f(n) = lgn$，那么**多重对数函数**$lg^*n$的定义为：

$$lg^*n = min \\{ i \ge 0 ：  lg^{(i)}n \le 1 \\}$$

> 注意$lg^{(i)}n$是从参数$n$开始，连续应用对数函数$i$次。$lg^in$是$n$的对数的$i$次幂。


### 斐波那契数

递归式定义：

$$F_0 = 0$$
$$F_1 = 1$$
$$F_i = F_{i-1} +  F_{i-2} ， i\ge2$$

斐波那契数与**黄金分割率**$\phi$以及共轭数$\hat \phi$相关，共轭数是以下方程的解：


$$ x^2 - x - 1 = 0$$

$$\phi = {{1+ \sqrt 5 } \over 2} = 1.61803... $$
$$\hat  \phi = {{1- \sqrt 5 } \over 2} = - 0.61803... $$


同时有（可以使用归纳法证明）：

$$F_i = {{ \phi^i -  \hat \phi ^i } \over \sqrt 5 }$$

因为$ \left| \hat \phi ^i \over \sqrt 5 \right| < 1 $，因此

$$F_i = {{ \phi^i - 1 } \over \sqrt 5 }$$


这说明第$i$个斐波那契数$F_i$以指数形式增长。




