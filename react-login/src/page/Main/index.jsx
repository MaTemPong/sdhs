import { useState } from "react";

function Main(){
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('id');
    let text;
    if(!name){
       text = (<button onClick={e => window.location.href="/login"}>로그인</button>);
    } else {
        text = (<a href="#" onClick={()=> {localStorage.setItem('id', null); localStorage.setItem('name', null);}}>로그아웃</a>);
    }
    
    return(<>
    <p>{name}({id}) 환영합니다!</p>
    <div>
        {text}
    </div>
    </>);
}

export default Main;
