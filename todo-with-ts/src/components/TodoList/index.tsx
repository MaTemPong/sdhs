import type { Dispatch, SetStateAction } from "react";
import type {Todo as TodoType} from '../../types/todo';
import type { DispatchSetStateAction } from "../../types/util";
import Todo from "../Todo";

interface TodoListProps{
    todos: TodoType[];
    searchValue: string;
    deleteTodo: (id: TodoType['id']) => void;
    setSelectedTodoIds: DispatchSetStateAction<TodoType["id"][]>;
}

function TodoList({todos, searchValue, deleteTodo, setSelectedTodoIds}: TodoListProps){
    return (
    <ul>
        {
            todos.map(({id, name}) => {
                const handleDeleteTodo = () => {
                    deleteTodo(id);
                }
                const handleSelected = (checked: boolean) => {
                    if(checked){
                        setSelectedTodoIds((prevState) => [...prevState, id]);
                    } else{
                        setSelectedTodoIds((prevState)=>{
                            return prevState.filter((prevId)=> prevId !== id);
                        })
                    }
                }
                return <Todo key={id} name={name} deleteTodo={handleDeleteTodo} handleSelected={handleSelected}/>;
            })
        }
    </ul>
    );
}

export default TodoList;