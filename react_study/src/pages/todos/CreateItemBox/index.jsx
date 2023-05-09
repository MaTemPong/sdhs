import * as S from './styled';
import Button from '../../../components/Button';


function CreateItemBox({onChange}){

    const handleInputValue = (e) => {
        onChange(e.target.value)
    }

    return(
        <S.InputBox>
                <S.Input placeholder='To do를 입력해주세요.' onChange={handleInputValue}></S.Input>
                <Button>등록</Button>
        </S.InputBox>
    )
}

export default CreateItemBox;