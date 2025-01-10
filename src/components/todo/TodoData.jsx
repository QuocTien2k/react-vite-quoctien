const ToDoData = (props) => {
    //console.log(props);
    const { age, todoList } = props;

    return (
        <div className='todo-data'>
            <div>{JSON.stringify(props.todoList)}</div>

        </div>
    )
}
export default ToDoData; // Export ToDoData