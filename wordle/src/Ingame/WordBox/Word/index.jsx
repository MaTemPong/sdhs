import Char from '../../../components/char';
import * as S from './styled';
function Word(porps){
    const {value} = porps;
    return (
        <S.Container>
            <Char/>
            <Char/>
            <Char/>
            <Char/>
            <Char/>
        </S.Container>
    )
}

export default Word;