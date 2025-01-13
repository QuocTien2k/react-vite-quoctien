import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
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

  const deleteTodo = (id) => {
    // Lọc ra các phần tử có id khác với id cần xóa
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo); // Cập nhật lại mảng todoList
  }

  const randomFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); // Trả về một số ngẫu nhiên trong khoảng từ min đến max
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length > 0 ?
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
          :
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        }
      </div>
      <Footer />
    </>
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