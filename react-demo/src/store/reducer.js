import {combineReducers} from 'redux';
import {ADD_TODO_ITEM, DEL_TODO_ITEM} from '../actions/ActionType';

let initValue = [1,2,3];

export default (state=initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            // let newState = JSON.parse(JSON.stringify(state));
            // newState.list.push(action.value);
            // return newState;
            return [...state,action.value];  //新生成一个数组
        case DEL_TODO_ITEM:
            // let newList = JSON.parse(JSON.stringify(state));
            // newList.list.splice(action.index,1);
            // return newList;
            return state.filter((item,index)=>{
                return index !== action.index
            });
        default:
            return state;
    }
}





// let counter = (state=12,action)=>{
//     switch(action.type){
//         case 'ADD':
//             return state+action.value;
//         case 'DEC':
//             return state-action.value;
//         case 'ODD':
//             return state*2;
//         default:
//             return state;
//     }
// }

// let initValue = {
//     list:[1,2,3]
// }

// let todo = (state=initValue,action)=>{
//     switch(action.type){
//         case 'add_item':
//             let newState = JSON.parse(JSON.stringify(state));
//             newState.list.push(action.value);
//             // let obj = Object.assign({},state,{a:100})
//             return newState;
//         case 'del_item':
//             let newList = JSON.parse(JSON.stringify(state));
//             newList.list.splice(action.value,1);
//             return newList;
//         default:
//             return state;
//     }
// }

// export default combineReducers({
//     counter,todo
// })