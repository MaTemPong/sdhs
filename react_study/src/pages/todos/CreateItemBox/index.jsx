import * as S from './styled';
import Button from '../../../components/Button';


function CreateItemBox({ value, onChange, createTodoItem}){

    const handleInputValue = (e) => {
        onChange(e.target.value);
    }
    const handleEnterValue = (e) => {
        if(e.key === 'Enter') createTodoItem();
    }
    

    return(
        
        <S.InputBox>
            <S.Input value={value} placeholder='To do를 입력해주세요.' onChange={handleInputValue} onKeyDown={handleEnterValue}></S.Input>
            <Button onClick={createTodoItem}>등록</Button>
        </S.InputBox>
    )
}

export default CreateItemBox;