<script setup lang="ts">
// 需求：返回将以下二维数组拍平去重的数组。基于扩展操作符/Set()集合实现。(3行代码)

const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
//方法一
// flat 方法能够直接将多维数组扁平化，同时 TypeScript 能正确推断类型。
const flattenArray = arrays.flat() 
const setArray = new Set(flattenArray)// 2.Set()集合
const result1 = [...setArray] // 3.Array.from()集合
console.log(result1) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//方法二
// concat 是 JavaScript 数组的一个方法，用于合并两个或多个数组。它不会改变原数组，而是返回一个新数组，新数组包含原数组和传入的所有参数数组的元素
// ... 是扩展运算符，它能把一个数组展开成一个个独立的元素。在这行代码里，...arrays 会把二维数组 arrays 里的每个子数组展开。
const flattenedArray = ([] as number[]).concat(...arrays);
const uniqueSet = new Set(flattenedArray);
const result = [...uniqueSet];
console.log(result);
</script>
<template>
<div>控制台输出拍平后的二维数组</div>
</template>

