<script setup lang="ts">
defineProps(['ming', 'mima'])
const emit = defineEmits(['update:ming', 'update:mima'])
</script>
<template>
  <div>
    <input
      type="text"
      :value="ming"
      @input="emit('update:ming', (<HTMLInputElement>$event.target).value)" />
    <br />
    <input
      type="text"
      :value="mima"
      @input="emit('update:mima', (<HTMLInputElement>$event.target).value)" />
  </div>
</template>
<style>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
</style>
