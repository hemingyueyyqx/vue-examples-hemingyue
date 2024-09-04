import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue'
import type { User } from '@/type'
export const useExample05Store = createGlobalState(() => {
  const counts = ref(0)
  const increment = () => counts.value++
  const userS = ref<User>({ name: 'BO', address: '925', level: 1 })
  const doubleCountG = computed(() => counts.value * 2)
  const premissionG = computed(() => (level: number) => userS.value?.level == level)
  return { counts, increment, userS, doubleCountG, premissionG }
})
