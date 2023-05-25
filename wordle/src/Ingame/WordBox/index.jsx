import Char from '../../components/char';
import * as S from './styled'
import Word from './Word';
import { useState } from 'react';

function WordBox(){
    const [pAnswer, setPAnser] = useState(['','','','','']);
    const [count, setCount] = useState(0);
    const wordRender = [1,2,3,4,5,6];
    const [charCount, setCharCount] = useState(0);
    
    document.addEventListener("keydown", (e)=>{
        if(65 <= e.keyCode  && e.keyCode  <= 90){
            // let copyPAnswer = [...pAnswer];
            // copyPAnswer[charCount] = e.key;
            // setPAnser(copyPAnswer);
            // console.log(pAnswer);
            setCharCount(charCount + 1);
            console.log(charCount);
        }
    })

    return (
    <S.Container>
        {
            wordRender.map((item, index) =>{
                return <Word value={index}/>;

            })
        }
    </S.Container>);
}

export default WordBox;