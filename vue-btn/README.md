# @siniangy/vue-btn

![npm (scoped)](https://img.shields.io/npm/v/@siniangy/vue-btn.svg)

参考链接： https://juejin.cn/post/6844903918414102535

## Install

```shell
npm install @siniangy/vue-btn
```

## Use

```vue
import btn from '@siniangy/vue-btn'

Vue.use(btn)

<template>
  <div class="demo">
    <btn :text="msg"></btn>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: '成功'
    }
  }
}
</script>
```
