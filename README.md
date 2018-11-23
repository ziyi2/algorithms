# 算法导论与javascript实现

>注：在文档中使用Latex对数学公式进行排版，如果想要看到这些公式，建议安装[MathJax Plugin for Github](https://chrome.google.com/webstore/detail/mathjax-plugin-for-github/ioemnmodlmafdkllaclgeombjnmnbima)插件。

## 算法基础
主要讲解一个算法设计与分析的框架：说明**插入排序**算法，证明该算法能正确的排序，并分析其运行时间。引入用于算法设计的**分治法**并使用该方法设计**归并排序**算法，分析其运行时间。
- [插入排序](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.md) 
- [归并排序](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.md)

> 小结：分析运行时间引入了记号$ \Theta $，该记号用于标记算法运行时间与输入规模$n$的关系。$T(n)$是输入规模为$n$的一个问题的运行代价，如果对于某个常数$c$有$n \le c$，那么求解只需要常量时间，我们记为$\theta(1)$。如果$T(n) = an^2 + bn + c$，那么求解需要时间为$\theta(n^2)$。如果$T(n) = aT({n \over b}) + f(n)$，该递归式求解需要的时间为$\theta(nlgn)$。
