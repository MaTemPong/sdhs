import { useState } from "react";

function Login(){
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    
    const [nameText, setNameText] = useState('공백입니다.');
    const [idText, setIdText] = useState('공백입니다.');
    const [pwText, setPwText] = useState('공백입니다.');

    const onNameCheck = (e) => {
        let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
        if(!e.target.value){
            setNameText('공백입니다.');
        } else if(reg.test(e.target.value)){
            setNameText('특수문자는 입력이 불가능합니다');
        } else if(2 > e.target.value.length || e.target.value.length > 5){
            setNameText('2글자 이상 5글자 이하로 입력해주세요');
        } else{
            setNameText('');
        }
        setName(e.target.value);
    }
    const onIdCheck = (e) => {
        if(!e.target.value){
            setIdText('공백입니다.');
        } else if(3 > e.target.value.length){
            setIdText('3글자 이상으로 입력해주세요.');
        }  else {
            setIdText('');
        }
        setId(e.target.value);
    }
    const onPasswordCheck = (e) => {
        if(!e.target.value){
            setPwText('공백입니다.');
        } else if(8 > e.target.value.length){
            setPwText('8글자 이상으로 입력해주세요.');
        } else {
            setPwText('');
        }
    }

    const LoginCheck = () => {
        if(nameText === "공백입니다." ||
            idText === "공백입니다." ||
            pwText === "공백입니다."){
                alert('빈 값은 입력할 수 없습니다.');
        }
        else if(!nameText && !idText && !pwText){
            try{
                const stringifyName = JSON.stringify(name);
                localStorage.setItem('name', stringifyName);
                const stringifyId = JSON.stringify(id);
                localStorage.setItem('id', stringifyId);
            }catch(error){
                console.log(error);
            }
            window.location.href="/"
            alert('로그인이 되었습니다');
        } else{
            alert('형식에 맞게 작성해주세요.');
        }
    }
    return(
        <form>
            <table>
                <tr>
                    <th>이름</th>
                    <td><input onChange={onNameCheck} placeholder="2글자 이상 5글자 이하 / 특수문자 입력 불가"></input></td>
                </tr>
                <tr>
                    <th></th>
                    <td>{nameText}</td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td><input onChange={onIdCheck} placeholder="4글자 이상"></input></td>
                </tr>
                <tr>
                    <th></th>
                    <td>{idText}</td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td><input onChange={onPasswordCheck} type="password" placeholder="8글자 이상"></input></td>
                </tr>
                <tr>
                    <th></th>
                    <td>{pwText}</td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={LoginCheck} type="button">로그인</button></th>
                </tr>
            </table>
        </form>
    );
}

export default Login;