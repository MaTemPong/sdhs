import * as S from './styled';
import Button from '../../components/Button';
import CreateItemBox from './CreateItemBox';

function Todos(){
    return (
        <S.Container>
            <S.Title>To do list</S.Title>
            <CreateItemBox/>
        </S.Container>
    );
}

export default Todos;