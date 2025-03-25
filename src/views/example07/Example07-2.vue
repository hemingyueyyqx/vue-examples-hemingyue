<script setup lang="ts">
// const promise = new Promise((resolve, reject) => {
//   // 异步操作
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       resolve('success');
//     } else {
//       reject('error');
//     }
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// });
// new Promise(function (resolve, reject) {
//   var a = 0
//   var b = 1
//   if (b == 0) reject('Divide zero')
//   else resolve(a / b)
// })
//   .then(function (value) {
//     console.log('a / b = ' + value)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })
//   .finally(function () {
//     console.log('End')
//   })
function print(delay: any, message: any) {
  return new Promise(function (resolve: any, reject: any) {
    setTimeout(function () {
      console.log(message)
      resolve()
    }, delay)
  })
}
// 在 print 函数中，返回了一个 Promise 对象。在 Promise 内部借助 setTimeout 模拟了异步操作，在延迟指定时间之后输出信息，然后调用 resolve 方法来标记 Promise 已经完成。
// 在第一个 then 方法里，使用 return print(4000, "Second") 把一个新的 Promise 对象返回。这就意味着下一个 then 方法会在这个新的 Promise 完成之后才执行。
// 若第一个 then 方法里没有使用 return，那么下一个 then 方法会马上执行，而不会等待 print(4000, "Second") 这个异步操作完成。
//原生promise
print(1000, 'First')
  .then(function () {
    return print(4000, 'Second')
  })
  .then(function () {
    print(3000, 'Third')
  })
//异步函数
// async function asyncFunc() {
//     await print(1000, "First");
//     await print(4000, "Second");
//     await print(3000, "Third");
// }
// asyncFunc();
//处理异常
// async function asyncFunc() {
//     try {
//         await new Promise(function (resolve, reject) {
//             throw "Some error"; // 或者 reject("Some error")
//         });
//     } catch (err) {
//         console.log(err);
//         // 会输出 Some error
//     }
// }
// asyncFunc();
//返回正常值
async function asyncFunc() {
  let value = await new Promise(function (resolve, reject) {
    resolve('Return value')
  })
  console.log(value)
}
asyncFunc()
//一个理解proise的例子
var promise = new Promise(function (resolve, reject) {
  //To Do 要异步执行的事情，这个异步执行的事情有可能成功执行完毕，那么Promise将是fulfilled状态，如果执行失败则是rejected;
  //下面测试代码，人为设置为rejected状态;
  reject('将当前构建的Promise对象的状态由pending（进行中）设置为rejected（已拒绝）') //当然此处也可以设置为fulfilled(已完成)状态
})

promise
  .then(
    //调用第一个then()
    (success) => {
      console.log('异步执行成功，状态为：fulfilled，成功后返回的结果是：' + success)
      return ' 当前 success '
    },
    (error) => {
      console.log('异步执行失败，状态为rejected，失败后返回的结果是：' + error)
      return ' 当前 error '
    }
  )
  .then(
    //调用第二个then() 因为调用第一个then()方法返回的是一个新的promise对象，此对象的状态由上面的success或者error两个回调函数的执行情况决定的：
    //如果回调函数能正常执行完毕，则新的promise对象的状态为fulfilled，下面执行success2,如果回调函数无法正常执行，则promise状态为rejected;下面执行error2
    (success2) => {
      console.log('第一个then的回调函数执行成功 成功返回结果：' + success2)
      throw ' 当前 success2 ' //自定义异常抛出
    },
    (error2) => {
      console.log('第一个then的回调函数执行失败 失败返回结果：' + error2)
      return ' 当前 error2 '
    }
  )
  .catch((err) => {
    //当success2或者error2执行报错时，catch会捕获异常;
    console.log('捕获异常：' + err)
  })

//上述代码,打印如下:
//异步执行失败，状态为rejected，失败后返回的结果是：将当前构建的Promise对象的状态由pending（进行中）设置为rejected（已拒绝）
//第一个then的回调函数执行成功 成功返回结果： 当前 error
//捕获异常： 当前 success2

const p1 = new Promise((resolve, reject) => {
//   resolve('成功')
  reject('失败')
})
console.log('p1', p1)
p1.then(
  (value) => {
    console.log('成功', value)
  },
  (error) => {
    console.log('失败', error)
  }
).catch((error) => {
  console.log('失败1', error)
})

</script>
<template>
  <div>
    <a href="https://www.runoob.com/js/js-promise.html">教程</a>
  </div>
</template>
