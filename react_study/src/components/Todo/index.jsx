import * as S from './styled';
import Button from '../Button';

function Todo(props){
    const { deleteTodo } = props;
    return (
    <S.Container>

        <S.Title>{props.children}</S.Title>
        <div>
            <Button>중요</Button>
            <Button onClick={deleteTodo}>삭제</Button>
        </div>
    </S.Container>
    );
}

export default Todo;