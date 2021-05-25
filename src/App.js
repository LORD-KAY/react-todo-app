import React, { useState } from "react";
import { Todos } from "./Todos";
import "./App.css";
import { Typography, Col, Row } from "antd";
import "antd/dist/antd.css";
import { AddTodo } from "./AddTodo";

const { Title } = Typography;
function App(props) {
  const [todos, setTodo] = useState([]);

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodo(filteredTodo);
  };

  const addTodo = (content) => {
    const todo = [...todos].pop();
    setTodo((prevState) => [
      ...prevState,
      { ...content, id: todo ? todo.id + 1 : 1 },
    ]);
  };
  return (
    <div className="App">
      <Title
        className={"todo-title"}
        style={{ textAlign: "center", textTransform: "uppercase" }}
      >
        Todos
      </Title>
      <Row>
        <Col span={12} offset={6}>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} deleteTodo={deleteTodo} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
