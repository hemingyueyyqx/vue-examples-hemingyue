<script setup lang="ts">
const div = document.createElement('div')
console.log(div)

let props = ''
for (let key in div) {
  props += key + ''
}
console.log(props)
// const name = '掘金'
// const obj = { name: '沐华', age: 18 }
// with (obj) {
//   console.log(name) // 沐华  不需要写 obj.name 了
//   console.log(age) // 18   不需要写 obj.age 了
// }
</script>
<template>
  <div></div>
</template>
