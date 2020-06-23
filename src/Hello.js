import React from 'react';
import './Hello.css'

function Hello({name, age, color, isTrueFalse}){
    if(isTrueFalse){
        return (
            <div style={{color:color}}>안녕하세요. {name}
            </div>
        )
        } else {
        return (
            <div style={{color:color}}>반갑습니다. {name}</div>
        )
    }
}

Hello.defaultProps = {
    name:'모름',
    age:'모름',
    color:'black'
}

export default Hello