import React, { Component } from 'react';

class Input extends Component {
    handleAdd = (e)=>{
        if(e.keyCode===13){
            this.props.add_todo(e.target.value);    //dispatch 派发actions
        }
        
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd} type='text' id="text"/><br/>
            </div>
        );
    }
}

export default Input;
