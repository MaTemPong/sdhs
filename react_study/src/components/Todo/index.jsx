import * as S from './styled';
import Button from '../Button';

function Todo(props){
    return (
    <S.Container>
        <S.Title>{props.children}</S.Title>
        <div>
            <Button>중요</Button>
            <Button>삭제</Button>
        </div>
    </S.Container>
    );
}

export default Todo;