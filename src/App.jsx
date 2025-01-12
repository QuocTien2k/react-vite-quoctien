import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {

  const [todoList, setTodoList] = useState([

  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomFromInterval(1, 1000), // Tạo một id ngẫu nhiên
      name: name
    }
    setTodoList([...todoList, newTodo]); // Thêm phần tử mới vào mảng
  };

  const randomFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); // Trả về một số ngẫu nhiên trong khoảng từ min đến max
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ?
        <TodoData todoList={todoList} />
        :
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      }
    </div>
  )
}

export default App

/* 
-props: là một object chứa các thuộc tính của component được truyền vào từ component cha sang component con
vd: <TodoData age={age} todoList={todoList} /> : truyền 2 props age và todoList vào component TodoData

-useState: là một hook của react giúp chúng ta quản lý state trong functional component
-usesState trả về một mảng gồm 2 phần tử, phần tử đầu tiên là giá trị của state, 
phần tử thứ 2 là hàm để thay đổi giá trị của state
*/