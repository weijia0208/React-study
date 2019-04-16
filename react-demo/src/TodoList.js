import React, { Component } from 'react';
import { Input } from 'antd';
import store from './store';
import 'antd/dist/antd.css';
import * as ActionCreators from './actions/index';
import {connect} from 'react-redux';
import axios from 'axios';
import {fetch} from 'whatwg-fetch';
//bindActionCreators将actionCreator和dispatch绑定
//传给子组件，子组件感受不到redux存在
import {bindActionCreators} from 'redux';
import Put from './components/Input';

// class TodoList extends Component {
//     constructor(){
//         super();
//         // this.state = {
//         //     list:store.getState().list
//         // }
//         // store.subscribe(()=>{
//         //     this.setState({
//         //         list:store.getState().list
//         //     })
//         // })
//     }
//     //添加item
//     handleAdd = (e)=>{
//         // if(e.keyCode===13){
//         //     store.dispatch({
//         //         type:'add_item',
//         //         value:e.target.value
//         //     })
//         //     document.getElementById('text').value = '';
//         // }
//         if(e.keyCode===13){
//             this.props.dispatch(add_todo(e.target.value));
//             // document.getElementById('text').value = '';
//         }
//     }
//     //点击item删除
//     handleDel(i){
//         store.dispatch({
//             type:'del_item',
//             value:i
//         })
//     }
//     render() {
//         let {list} = this.props;
//         return (
//             <div>
//                 <input onKeyDown={this.handleAdd} type='text' id="text"/><br/>
//                 <ul>
//                     {
//                         list.map((item,index)=>(
//                             <li key={index} onClick={()=>(this.handleDel(index))}>{item}</li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

// console.log(ActionCreators.add_todo);

let TodoList = ({dispatch,list})=>{
    let bindActions = bindActionCreators(ActionCreators,dispatch);
    // let handleAdd = (e)=>{
    //     if(e.keyCode===13){
    //         // let data = '';
    //         // axios.get('https://api.apiopen.top/recommendPoetry').then(res=>{
    //         //     // console.log(res.data.result.content);
    //         //     data = res.data.result.content;
    //         //     dispatch(add_todo(data));
    //         // });
    //         // fetch('https://api.apiopen.top/recommendPoetry')
    //         // .then(res=>res.json())
    //         // .then(res=>{
    //         //     console.log(res);
    //         // })

    //         // dispatch( add_todo(e.target.value));
    //         // let action = add_todo(e.target.value);
    //         // dispatch(action);

    //         bindActions.add_todo(e.target.value);
            
    //     }
    // }
    let handleDel = (index)=>{
        // dispatch(del_todo(index));
    }
    return  (
        <div>
            <Put add_todo={bindActions.add_todo} />
            <ul>
                {
                    list.map((item,index)=>(
                        <li key={index} onClick={()=>handleDel(index)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

// export default TodoList;
let mapStateToProps = (state)=>{
    return {
        list:state
    }
}
export default connect(mapStateToProps)(TodoList);  