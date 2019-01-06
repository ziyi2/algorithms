## 常用函数习题

#### `问题1`

***
证明等式$ a^{log_bc} =  c^{log_ba} $。

#### `答案`

$$ a^{log_bc} =  a^{log_ac \over log_ab} = (a^{log_ac})^{1 \over log_ab} = c ^ {log_ba}$$


#### `问题2`

***

 用归纳法证明:第i个斐波拉契数满足

$$F_i = {{ \phi^i -  \hat \phi ^i } \over \sqrt 5 }$$

其中$ \phi$是黄金分割率，且$ \hat \phi $是其共轭数。


#### `答案`

证明：当$i = 1$时，$F_1 =  {{ \phi -  \hat \phi  } \over \sqrt 5 } =  1 $
设$i=k-1、i=k-2$时等式成立，即
$$F_{k-1} =  {{ \phi^{k-1} -  \hat \phi^{k-1}  } \over \sqrt 5 } $$
$$F_{k-2} =  {{ \phi^{k-2} -  \hat \phi^{k-2}  } \over \sqrt 5 } $$ 

那么$F_k = F_{k-1} + F_{k-2}$，即

$$F_k = {{ \phi^{k-1} -  \hat \phi^{k-1}  } \over \sqrt 5 }  + {{ \phi^{k-2} -  \hat \phi^{k-2}  } \over \sqrt 5 }  $$
$$ =  {{ \phi^{k} -  \hat \phi^{k}  } \over \sqrt 5 } $$

> 这里忽略了一些细节，具体可查看[CLRS](https://github.com/gzc/CLRS/blob/master/C03-Growth-of-Functions/3.2.md#answer-5)。
