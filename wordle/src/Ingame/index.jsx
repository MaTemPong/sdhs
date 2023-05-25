import * as S from './styled'
import Words from '../list/words'
import { useState } from 'react';
import WordBox from './WordBox';

function Ingame(){
    const words = Words;
    const [answer, setAnswer] = useState(words[Math.floor(Math.random() * words.length)]);


    return (<S.Container>
        <WordBox></WordBox>
    </S.Container>);
}

export default Ingame;