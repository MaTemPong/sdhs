import * as S from './styled';
import Button from '../Button';
import CheckBox from '../CheckBox';

function Todo(props){
    const { deleteTodo, handleSelected} = props;
    return (
    <S.Container>
        <CheckBox onChange={handleSelected}/>
        <S.Title>{props.children}</S.Title>
        <div>
            <Button onClick={deleteTodo}>삭제</Button>
        </div>
    </S.Container>
    );
}

export default Todo;