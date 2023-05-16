import { useEffect,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';



import * as S from './styled';

import { setTodos, createTodo, deleteTodo, deleteSelectedTodos} from '../../reduce/todos'

import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';

function Todos(){
    const [todoName, setTodoName] = useState('');
    const [searchTodo, setSearchTodo] = useState('');
    
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todos);
    //선택한 todos들을 저장하는 state
    const [selectedTodoIds, setSelectedTodoIds] = useState([]);

    const handleCreateTodo = () =>{
        if(!todoName.trim()) return alert("공백 게시물은 게시가 불가합니다.");
        setTodoName('');
        dispatch(createTodo({id: uuidv4(), name: todoName}))
    }

    const handleTodoDelete = (id) => {
        console.log(id);
        dispatch(deleteTodo(id));
    }

    const handleSelectedTodoDelete = () => {
        dispatch(deleteSelectedTodos(selectedTodoIds));
        
    }

    useEffect(() => {
        try{
            const parseTodos = JSON.parse(localStorage.getItem('todos'));
            dispatch(setTodos(parseTodos));
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(()=>{
        try{
            const stringifyTodos = JSON.stringify(todos);
            localStorage.setItem('todos', stringifyTodos);
        }catch(error){
            console.log(error);
        }
    }, [todos]);

    return (
        <S.Container>
            <S.Title>To do list</S.Title>
            <SearchBar onChange={value => {
                setSearchTodo(value);
            }}/>
            <CreateItemBox value={todoName} onChange={setTodoName} createTodoItem={handleCreateTodo}/>
            <Button onClick={handleSelectedTodoDelete}>선택한 TO do 삭제</Button>
            <ItemList todos={todos} searchValue={searchTodo} deleteTodo={handleTodoDelete} setSelectedTodoIds={setSelectedTodoIds}/>
        </S.Container>
    );
}

export default Todos;