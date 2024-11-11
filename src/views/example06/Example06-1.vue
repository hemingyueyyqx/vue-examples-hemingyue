<template>
<div class="container">
  <form action="">
    <input type="text" placeholder="Add task" v-model="newTaskText">
    <button @click="addTask" type="button">Add</button>
    <ul>
      <li v-for="task in initialTasks" :key="task.id">
        <input type="checkbox" v-model="task.done" :id="'task-' + task.id">
        <label :for="'task-' + task.id" v-if="!task.isEditing" >
          {{ task.text }}
        </label>
        <input v-else type="text" v-model="task.text" :id="'task-' + task.id">
        <button @click="editTask(task)" type="button">{{ task.isEditing ? 'Save' : 'Edit' }}</button>
        <button @click="deleteTask(task.id)" type="button">Delete</button>
      </li>
    </ul>

 </form>
</div>
</template>

<script setup lang="ts" >
import { ref,reactive } from 'vue';
let initialTasks = reactive([
  { id: 0, text: '参观卡夫卡博物馆', done: true , isEditing: false},
  { id: 1, text: '看木偶戏', done: false,isEditing: false },
  { id: 2, text: '打卡列侬墙', done: false,isEditing: false }
])
let tasks = reactive([
  { id: 0, isEditing: true },
  { id: 1, isEditing: true },
  {id: 2, isEditing: true}
]
);
console.log(tasks)
// console.log(initialTasks)
let newTaskText = ref('');
const addTask = () => {
        initialTasks.push({
          id: initialTasks.length, 
          text: newTaskText.value,
          done: false,
          isEditing: false
        });
        //console.log(initialTasks);
        newTaskText.value = ''; 
}; 
const deleteTask = (id:any) => {
      const index = initialTasks.findIndex(task => task.id === id);
      if (index !== -1) {
        initialTasks.splice(index, 1);
      }
}; 
const editTask = (task: any) => {
  // const task = tasks.find(task => task.id === id); // 查找任务
  // if (task) {
  //   task.isEditing = false; // 修改 isEditing 为 false
  // }
   if (task.isEditing) {
    // If it's in editing mode, save the task and toggle editing mode
    task.isEditing = false;
  } else {
    // Otherwise, enter edit mode
    task.isEditing = true;
  }
}  
</script>

<style scoped>
/* .container {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
} */
</style>