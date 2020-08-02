# Test vuepress

::: danger 测试 Vuepress
引入 greet.ts 并进行调用测试。
:::

<template>
  <collapse title="查看答案">{{msg}}</collapse>
</template>

```typescript
import greet from "algorithms-utils/greet";
greet("hello");
```

<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
  import greet from 'algorithms-utils/greet'
  const msg = greet('ziyi')
  export default {
    data() {
      return {
         msg
      }
    },
  }
</script>
