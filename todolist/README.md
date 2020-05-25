## React数据更新原理：
1. state数据
2. JSX模板
3. 数据 + 模板 => 生成虚拟DOM (虚拟DOM就是一个JS对象， 用它来描述真是DOM) （损耗了新能）['div', {id: 'abc'}, ['span', {}, 'hello world']]
4. 用虚拟DO的结构生成真是的DOM： <div id=“abc”><span>hello world</span></div>
5. state发生变化
6. 数据 + 模板 => 生成新的虚拟DOM （极大提升性能）['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟DOM和新的虚拟DOM，找到差异（极大提升性能）
8. 直接操作DOM，改变span中的内容
有点：
1. 性能提升了
2. 它使得跨端应用得以实现， React Native



## React生命周期：
概念：生命周期函数指在某一个时刻（数据发生变化）组件会自动调用执行的函数 
1. Initialization: 组件初始加载
    * 执行constructor函数，props和state数据初始化
2. Mout: 组件挂载 
    * componentWillMount()--在组件即将被挂载到页面的时刻自动执行 
    * componentDidMount()--在组件挂载到页面的时候自动执行 
3. Update: 组件更新 
    * shouldComponentUpdate()--组件被更新之前，它会被自动执行，返回布尔值
    * componentWillUpdate()--组件被更新之前，若shouldComponentUpdate返回true它才执行，若返回false，这个函数就不会被执行 
    * componentDidUpdate()--组件更新完成之后，它会被执行
    *  componentWillReceiveProps()--一个组件要从父组件接受参数，只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行（ 如果这个组件第一次存在于父组件中，不会执行，如果这个组件之前已存在父组件中，会被执行）
4. Unmount:组件卸载 
    * componentWillUnmount()---当这个组件即将被页面剔除的时候，会被执行
![Test Image 1](https://raw.githubusercontent.com/pacofeng/jianshu/master/todolist/src/life-cycle.png)


## 提高性能的几个方法： 
1. bind(this)改变作用域的方法放在constructor里面
2. setState这个异步函数，可以将多次数据的改变结合成一次，可以降低虚拟DOM的比对频率； 
3. 用了虚拟DOM这个概念，加入了同层比对和key值的概念提升虚拟DOM比对的速度； 
4. 借助shouldComponentUpdate的方法避免组件的不必要的render函数运行


## react-transition-group:
import {CSSTransition} from 'react-transition-group’ 
in={this.state.show} --- 判断是否启动动画 
timeout={1000} ------动画持续时间；以秒数为时间
classNames='fade' -----fade是动画类名的前缀 CSS设置: 
* .fade-enter{} -----入场动画执行的第一个时刻 
* .fade-enter-actve{} ---- 入场动画执行的第二个瞬间，会存在该样式，一直到入场动画执行完为止
* .fade-enter-done{} ----当整个入场动画执行完成之后，执行该样式 
* .fade-exit{} ---- 出场动画执行的第一个时刻 
* .fade-exit-active{} ---- 和入场动画类似，第二个时刻 
* .fade-exit-done{} ---- 出场动画执行完成之后，执行该样式
unmountOnExit ---- 动画完成之后Dom元素被隐藏 
onEntered={(el-这个el代表标签包裹里面的div)=>{el.style.color='blue'}} ---- 动画执行完成之后执行的钩子函数 
appear={true} ---- 页面初始加载出现该函数, CSS设置: 
* .fade-appear{} ----- 入场动画在初始页面加载的时候执行 
* .fade-enter-apper ----- 入场动画执行的第二个瞬间在页面初始加载的时候





