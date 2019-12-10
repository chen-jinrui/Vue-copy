import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) { // Vue 的庐山真面目，实际上是一个用 Function 实现的类
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 把 Vue 当参数传入，它们的功能都是给 Vue 的 prototype 上扩展一些方法
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue

// 为何 Vue 不用 ES6 的 Class 去实现呢？
// Vue 按功能把这些扩展分散到多个模块中去实现，而不是在一个模块里实现所有，
// 这种方式是用 Class 难以实现的。这么做的好处是非常方便代码的维护和管理

// Vue 本质上是一个用 Function 实现的 Class 然后它的原型 prototype 以及本身都扩展了一系列的方法和属性