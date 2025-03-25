<script setup lang="ts">
import { MyPromise } from '@/service/MyPromise'
// 示例使用
const promise = new MyPromise((resolve: any, reject: any) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
})

promise
  .then(
    (value: any) => {
      console.log(value) // 输出: 成功
    },
    (error) => {
      console.error(error)
    }
  )
  .catch((error) => {
    console.error(error)
  })
function print(delay: any, message: any) {
  return new MyPromise(function (resolve: any, reject: any) {
    setTimeout(function () {
      console.log(message)
      resolve()
    }, delay)
  })
}
print(1000, 'First')
  .then(function () {
    return print(4000, 'Second')
  })
  .then(function () {
    print(3000, 'Third')
  })
</script>
<template>
  <div>测试手写promise</div>
</template>
