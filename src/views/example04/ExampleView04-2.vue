<template>
  <div>
    <h1>v-bind</h1>
    <p>v-bind, 将指定事件绑定到methods中的方法，动态绑定标签属性，至响应式数据的表达式</p>
    <p>
      <label for="">
        <input type="checkbox" @click="setAgree" />
        同意以上条款
      </label>
      <br />
      <button type="button" :disabled="submitButtonDisableRef">提交</button>
    </p>
    <hr />
    <p>也支持在事件中声明执行语句</p>
    <p
      @mouseover="activeRef = true"
      @mouseleave="activeRef = false"
      :class="{ 'b-red': activeRef }">
      元素class属性值与activeRef值绑定，当鼠标进入/移出时改变activeRef值，从而动态改变元素样式
    </p>
    <h1>v-bind color</h1>
    <p @mouseover="colorP = 'green'" @mouseleave="colorP = 'red'" class="v-bind-color">
      vue3.2添加通过
      <code>v-bind</code>
      直接绑定css属性功能，可以更便捷的修改css属性
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
const submitButtonDisableRef = ref(true)
const activeRef = ref(false)
watch(submitButtonDisableRef, (newValue: boolean) => alert(`按钮被禁用 ${newValue}`))
const setAgree = () => (submitButtonDisableRef.value = !submitButtonDisableRef.value)
const colorP = ref('red')
</script>
<style scoped>
.bg-red {
  background-color: red;
}
.v-bind-color {
  background-color: v-bind(colorP);
}
</style>
