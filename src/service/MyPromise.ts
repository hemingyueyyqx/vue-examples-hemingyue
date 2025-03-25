// 定义 Promise 的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// 定义 resolve 函数的类型
type Resolve<T> = (value: T) => void
// 定义 reject 函数的类型
type Reject = (reason: any) => void
// 定义 executor 函数的类型
type Executor<T> = (resolve: Resolve<T>, reject: Reject) => void

export class MyPromise<T> {
  // 定义状态
  status: string
  // 存储成功之后的值
  value: T | undefined
  // 存储失败的原因
  reason: any
  // 存储成功回调
  onFulfilledCallbacks: (() => void)[]
  // 存储失败回调
  onRejectedCallbacks: (() => void)[]

  constructor(executor: Executor<T>) {
    // 初始化状态为 pending
    this.status = PENDING
    // 存储成功的值
    this.value = undefined
    // 存储失败的原因
    this.reason = undefined
    // 存储成功回调
    this.onFulfilledCallbacks = []
    // 存储失败回调
    this.onRejectedCallbacks = []

    const resolve: Resolve<T> = (value) => {
      if (this.status === PENDING) {
        // 状态变为 fulfilled
        this.status = FULFILLED
        this.value = value
        // 执行所有成功回调
        this.onFulfilledCallbacks.forEach((callback) => callback())
      }
    }

    const reject: Reject = (reason) => {
      if (this.status === PENDING) {
        // 状态变为 rejected
        this.status = REJECTED
        this.reason = reason
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach((callback) => callback())
      }
    }

    try {
      // 执行执行器函数
      executor(resolve, reject)
    } catch (error) {
      // 捕获异常并调用 reject
      reject(error)
    }
  }

  then(onFulfilled: (value: T) => any, onRejected: (reason: any) => any) {
    // 处理 onFulfilled 不是函数的情况
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    // 处理 onRejected 不是函数的情况
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error
          }

    const newPromise = new MyPromise<any>((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          const result = onFulfilled(this.value!)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      }

      const handleRejected = () => {
        try {
          const result = onRejected(this.reason)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      }

      if (this.status === FULFILLED) {
        // 如果状态已经是 fulfilled，立即执行成功回调
        setTimeout(handleFulfilled, 0)
      } else if (this.status === REJECTED) {
        // 如果状态已经是 rejected，立即执行失败回调
        setTimeout(handleRejected, 0)
      } else {
        // 如果状态还是 pending，将回调函数存储起来
        this.onFulfilledCallbacks.push(handleFulfilled)
        this.onRejectedCallbacks.push(handleRejected)
      }
    })

    return newPromise
  }
  // 实现 catch 方法
  catch(onRejected: (reason: any) => any) {
    return this.then((value) => value, onRejected)
  }
   // 实现 finally 方法
    finally(callback: () => void): MyPromise<T> {
        return this.then(
            (value) => {
                callback();
                return value;
            },
            (reason) => {
                callback();
                throw reason;
            }
        );
    }
}

