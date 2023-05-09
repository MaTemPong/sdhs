import * as S from './styled';
import Button from '../Button';

function Todo(){
    return (
    <S.Container>
        <S.Title></S.Title>
        <Button>중요</Button>
        <Button>삭제</Button>
    </S.Container>
    );
}

export default Todo;