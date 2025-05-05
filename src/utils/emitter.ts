// 引入mitt
import mitt from 'mitt'
// 调用mitt得到emitter,emitter能绑定事件，能触发事件
const emitter = mitt()
// 绑定某一个事件
// emitter.on('test1', () => {
//   console.log('test1被调用了')
// })
// emitter.on('test2', () => {
//   console.log('test2被调用了')
// })
// // 触发某一个事件
// setInterval(() => {
//   emitter.emit('test1')
//   emitter.emit('test2')
// }, 1000)
// // 拿到所有绑定事件
// // emitter.all

// // 解绑某一个事件
// setTimeout(() => {
//   //   emitter.off('test1')
//   //   emitter.off('test1')
//   emitter.all.clear()
// }, 3000)

// 暴露mitt
export default emitter
