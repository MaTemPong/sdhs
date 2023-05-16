import { useState } from 'react';
import * as S from './styled'

function SearchBar({onChange}){
    const [value, setValue] = useState('');

    const handleValue = ({target: {value}})=> {
        setValue(value);
        onChange?.(value);
    }
    return(<S.SearchBar value={value} onChange={handleValue} placeholder="검색할 내용을 입력해주세요"/>);
}

export default SearchBar;