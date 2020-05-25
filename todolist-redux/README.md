## Redux flow
redux是视图层框架，把所有数据都放在store之中，每个组件都要从store里拿数据，然后每个组件也要去改store里面的数据，
 举例：把这个流程理解成一个图书馆的流程 
1. react components: 借书的人 
2. action creators: 借书 (语句的表达，数据的传递)
3. store: 图书馆管理员 (没办法记住所有书籍的存储情况)
4. reducers:图书馆管理员的记录本 (要借什么书，先查有没有，要还的书查一下放到某个位置)
借书的人 => 我要借一本书 => 图书管理员听见 => 查阅reducers手册 => 去store找书~把对应的书给借书人
![Test Image 1](https://raw.githubusercontent.com/pacofeng/jianshu/master/todolist-redux/src/img/redux_flow.png)


## 设置redux
1. 引入redux的createStore方法
    *  import {createStore} from 'redux' 
2. 创建Store并输出
    * const store = createStore();
    * export default store
3. 创建Reducer并返回一个值
    * export default (state, action) => {return state} 
4. 设置Reducer默认值： 
    * const defaultState = {inputValue: '123', list:[1,2]}; 
    * export default (state = defaultState, action) => {return state} 
5. 将reducer传入到store中 
    * import reducer from './reducer' 
    * const store = createStore(reducer)
6. 通过redux提供的getState()方法获取Store中的数据
    * import store from './store' 
    * constructor() {this.state = store.getState()} 
    * return <input value={this.state.inputValue}>

## redux调试工具
https://github.com/zalmoxisus/redux-devtools-extension

## Redux三个基本原则：
1. Store是唯一的。有且只能存在一个。 
2. 只有Store才能够改变自己的内容。所以reducer不能改变store的内容，只能深克隆store的内容并修改后再返回给Store，Store在对自身数据进行修改。 
3. reducer必须是纯函数。纯函数是指，给予固定的输入，就会有固定的输出，而且不会有任何副作用。像Ajax请求、定时器、new Date()都会导致内容输出不固定，使用它们会导致reducer变为一个不纯的函数。

## redux-thunk
1. 不使用中间件，store接收的action只能是对象 
2. 使用了中间件(redux-thunk)，action可以是一个函数，通过store.dispatch将action函数传给store 
3. store接收到action后进行判断，如果action是函数，则会执行调用对应的函数，反之是对象，会调动对应的对象返回值 
4. action是函数时，内部先进行函数操作，之后去改变store中的数据(state)，函数内部可创建一个action对象，外部action这个函数默认接收store的dispatch方法，因此直接调用dispatch方法将内部action对象传给store以便更新数据
```
export const getTodoListAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:8888/todolist.json').then((res) => {
            const action = initListAction(res.data);
            dispatch(action);
        }).catch((error) => {
            console.log(error)
        });
    }
};
```

## redux data flow
中间件在action和store之间，引入中间件后，action可以是函数。如果dispatch接受到的参数是对象，会直接传给store，如果是函数，会先执行再传值。
![Test Image 2](https://raw.githubusercontent.com/pacofeng/jianshu/master/todolist-redux/src/img/redux_data_flow.png)


## react-redux
1. Provider提供器。将Provider与Store进行链接。将store以属性的形式传递给Provider组件。Provider包裹的组件，都可以访问到Store。 
2. connect连接器。只使用Provider组件还无法将组件与store进行链接。在包裹的组件中使用connect方法，将组件与store进行链接，然后将store数据和store.dispatch()方法映射到组件的props中。 链接后，组件中调用store数据就需要使用this.props.xx来调用。store.dispatch()方法也需要使用this.props.methodsName来调用。
