<script setup lang="ts">
import type { User } from '@/type'
import { useExample05Store } from './Example05Store'
import { ref } from 'vue'

const store = useExample05Store()
console.log(store)
const countR = store.counts
console.log(countR)
const increment = () => store.counts.value++
const userR = store.userS
console.log(userR)
const myUserR = ref<User>({})
const updateUserF = () => {
  setTimeout(() => (store.userS.value = myUserR.value), 1000)
}
const dCount = store.doubleCountG
console.log(dCount)
const premissionG = store.premissionG
console.log(premissionG)
const changePre = () => (store.userS.value = { name: 'He', address: '900', level: 2 })
</script>
<template>
  <div>
    {{ countR }} / {{ store.counts }}
    <br />
    <button @click="increment">increment</button>
    <hr />
    {{ userR?.name }} / {{ userR.address }}
    <br />
    <input type="text" v-model="myUserR.name" />
    <br />
    <input type="text" v-model="myUserR.address" />
    <br />
    <button type="button" @click="updateUserF">asyncUpdate</button>
    <hr />
    {{ dCount }} / {{ store.doubleCountG }}
    <hr />
    <button @click="changePre">changePre</button>
    <span v-if="premissionG(1)">权限为1的普通用户可见</span>
    <span v-if="store.premissionG.value(2)">权限为2的VIP用户可见</span>
  </div>
</template>
