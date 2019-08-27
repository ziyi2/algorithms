# 比较

## `setCompare` <Badge text="1.0.0+"/>

``` javascript
setCompare([compareFunction])
```

#### 描述

**设置比较方法**：为[equal](#equal)、[greaterThan](#greaterthan)、[lessThan](#lessthan)、[greaterThanOrEqual](#greaterthanorequal)、[lessThanOrEqual](#lessthanorequal)等API设置比较方法。如果不设置`compareFunction`则默认采用[defaultcompare](#defaultcompare)进行比较。

#### 参数

- `compareFunction(Function)`：可选，自定义比较方法

#### 返回

`(Object)`：比较实例对象`comparator`

#### 示例

``` javascript
import compartor from 'i-algorithms/_comparator'

comparator.setCompare()
comparator.greaterThan(1, 2)
// comparator.setCompare().greaterThan(1, 2)
// => false

comparator.setCompare((a, b) => {
  if (a === b) {
    return 0
  }
  return a > b ? 1 : -1
})
comparator.greaterThan(1, 2)
// => false
```

## `defaultCompare` <Badge text="1.0.0+"/>


``` javascript
setCompare(a, b)
```

#### 描述

**默认比较方法**：[equal](#equal)、[greaterThan](#greaterthan)、[lessThan](#lessthan)、[greaterThanOrEqual](#greaterthanorequal)、[lessThanOrEqual](#lessthanorequal)等API的默认比较方法。

#### 参数

- `a(Number)`：比较元素
- `b(Number)`：比较元素

#### 返回

`(Number)`：如果`a > b`，返回`1`、如果`a < b`，则返回`-1`，否则返回`0`。

#### 示例

``` javascript
import comparator from 'i-algorithms/_comparator'

comparator.defaultCompareFunction(1, 2)
// => -1
```

## `equal` <Badge text="1.0.0+"/>

``` javascript
equal(a, b)
```

#### 描述

**相等**：判断两个元素是否相等。

#### 参数

- `a(Any)`：比较元素
- `b(Any)`：比较元素

#### 返回

`(Boolean)`：如果`compareFunction`返回`0`，则返回`true`，否则返回`false`。


#### 示例


``` javascript
import comparator from 'i-algorithms/_comparator'

comparator.setCompare()
comparator.equal(1, 1)
// => true

comparator.setCompare((a, b) => {
  // 这里自定义两个数相等的规则，若a=b+1，则判定a=b
  if (a === b + 1) {
    return 0
  }

  return a > b ? 1 : -1
})

console.log(comparator.equal(2, 1))
// => true
```

## `greaterThan` <Badge text="1.0.0+"/>

``` javascript
greaterThan(a, b)
```

#### 描述

**大于**：判断元素`a`是否大于元素`b`。


#### 参数

- `a(Any)`：比较元素
- `b(Any)`：比较元素

#### 返回

`(Boolean)`：如果`compareFunction`返回`1`，则返回`true`，否则返回`false`。


#### 示例


``` javascript
import comparator from 'i-algorithms/_comparator'

comparator.setCompare()
comparator.greaterThan(2, 1)
// => true
```


## `lessThan` <Badge text="1.0.0+"/>

``` javascript
lessThan(a, b)
```

#### 描述

**小于**：判断元素`a`是否小于元素`b`。


#### 参数

- `a(Any)`：比较元素
- `b(Any)`：比较元素

#### 返回

`(Boolean)`：如果`compareFunction`返回`-1`，则返回`true`，否则返回`false`。


#### 示例


``` javascript
import comparator from 'i-algorithms/_comparator'

comparator.setCompare()
comparator.lessThan(2, 1)
// => false
```


## `greaterThanOrEqual` <Badge text="1.0.0+"/>

``` javascript
greaterThanOrEqual(a, b)
```

#### 描述

**大于或等于**：判断元素`a`是否大于或等于元素`b`。


#### 参数

- `a(Any)`：比较元素
- `b(Any)`：比较元素

#### 返回

`(Boolean)`：如果`compareFunction`返回`1`或`0`，则返回`true`，否则返回`false`。


#### 示例


``` javascript
import comparator from 'i-algorithms/_comparator'

comparator.setCompare()
comparator.greaterThanOrEqual(2, 1)
// => true
```



## `lessThanOrEqual` <Badge text="1.0.0+"/>

``` javascript
lessThanOrEqual(a, b)
```

#### 描述

**小于或等于**：判断元素`a`是否小于或等于元素`b`。


#### 参数

- `a(Any)`：比较元素
- `b(Any)`：比较元素

#### 返回

`(Boolean)`：如果`compareFunction`返回`-1`或`0`，则返回`true`，否则返回`false`。


#### 示例


``` javascript
import comparator from 'i-algorithms/_comparator'

comparator.setCompare()
comparator.lessThanOrEqual(2, 1)
// => false
```