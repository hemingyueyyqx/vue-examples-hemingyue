<script setup lang="ts"></script>
<template>
  <div>
    <h1>Vue Examples</h1>
    <h3><router-link to="/">Home</router-link></h3>
    <h3>Composition API</h3>
    <ul>
      <li>
        <router-link to="/ExampleView01-1">
          interface & ref() & computed() & watch() & watchEffect()
        </router-link>
      </li>
      <li><router-link to="/ExampleView01-2">reactive()</router-link></li>
      <li><router-link to="/ExampleView01-3">ref()-02</router-link></li>
      <li><router-link to="/ExampleView01-4">shallowRef()</router-link></li>
      <!-- <li><router-link to="/ExampleView03-1">defineProps()</router-link></li> -->
    </ul>
    <h3>Route With Params</h3>
    <ul>
      <li>
        <router-link to="/ExampleView02-1/students/25/homeworks/26">
          useRoute(): students/25/homeworks/26
        </router-link>
      </li>
      <li>
        <router-link to="/ExampleView02-1/students/18/homeworks/18">
          useRoute(): students/18/homeworks/18
        </router-link>
      </li>
    </ul>
    <h3>Directives</h3>
    <ul>
      <li>
        <router-link to="/ExampleView04-1">v-if v-show</router-link>
      </li>
      <li>
        <router-link to="ExampleView04-2">v-bind</router-link>
      </li>
      <li>
        <router-link to="ExampleView04-3">v-for</router-link>
      </li>
      <li>
        <router-link to="ExampleView04-4">v-model</router-link>
      </li>
    </ul>
    <h3>store</h3>
    <ul>
      <li>
        <router-link to="ExampleView05-1">state</router-link>
      </li>
    </ul>
  </div>
</template>
