import {ADD_TODO_ITEM,DEL_TODO_ITEM} from './ActionType';
import axios from 'axios';
export const add_todo=(value)=>({type:ADD_TODO_ITEM,value:value});
export const del_todo=(index)=>({type:DEL_TODO_ITEM,index:index});

// export  const add_todo= ()=>{
//     return (dispatch)=>{
//         axios.get('https://api.apiopen.top/recommendPoetry').then(res=>{
//             let data = res.data.result.content
//             dispatch({type:ADD_TODO_ITEM,value:data})
//         })
//     }

// };  //直接返回



/* 
---------------------thunk原生代码解释-------------------------
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = function(props){
    var dispatch = props.dispatch;
    var getSate = props.getState;
    return function(next){
        return function(action){
            if (typeof action === 'function') {
                return action(dispatch, getState, extraArgument);
            }
            return next(action);
        }
    }
}
export default thunk;

---------------------applyMiddleware--------------------------------
import compose from './compose'
export default function applyMiddleware(...middlewares) {  //middlewares就是刚才的thunk函数
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))  //调用thunk (thunk函数的参数是个对象)
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}

-------------------------compose-----------------------
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

----------------------------createStore---------------------------------
export default function createStore(reducer, preloadedState, enhancer) {
  if (
    (typeof preloadedState === 'function' && typeof enhancer === 'function') ||
    (typeof enhancer === 'function' && typeof arguments[3] === 'function')
  ) {
    throw new Error(
      'It looks like you are passing several store enhancers to ' +
        'createStore(). This is not supported. Instead, compose them ' +
        'together to a single function.'
    )
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }

    return enhancer(createStore)(reducer, preloadedState) //enhancer是applyMiddleware返回的箭头函数
  }
}

----------------------bindActionCreator---------------------------------------
//考试题

function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
 
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  // 报错可以不用管
  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(
      `bindActionCreators expected an object or a function, instead received ${
        actionCreators === null ? 'null' : typeof actionCreators
      }. ` +
        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
    )
  }

  const boundActionCreators = {}
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)   //boundActionCreators[key]属性相当于add_todo
    }
  }
  return boundActionCreators   //最终boundActionCreators是个对象
}


*/