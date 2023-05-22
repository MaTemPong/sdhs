import * as S from './styled';

import Todo from '../../../components/Todo';

function ItemList({todos, deleteTodo, searchValue, setSelectedTodoIds}){

    return(
      <S.ItemList>
        {todos
        .filter(({name})=> name.includes(searchValue))
        .map(({id, name}) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          }

          const handleSelected = (checked) => {
            //checkbox가 check 되었을 때 (todo를 선택 했을 때)
            //기존에 선택 되어 있던 selectedTodoIds에 새로 선택한 todo의 id를 넣어준다.
            // -> 새로운 todo를 선택했다
            if(checked){
              setSelectedTodoIds(prevState => ([...prevState, id]))
            } else{
              setSelectedTodoIds(prevState => prevState.filter(prevId => prevId !== id));
            }
          }

            return <Todo key={id} deleteTodo={handleDeleteTodo} handleSelected={handleSelected}>{name}</Todo>;
        })}
      </S.ItemList>  
    );
}

export default ItemList;