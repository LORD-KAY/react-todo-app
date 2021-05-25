import React from "react";

import { Empty, Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
export const Todos = ({ todos, deleteTodo }) => {
  const todoList =
    todos.length > 0 ? (
      <List
        bordered
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                onClick={() => deleteTodo(todo.id)}
                icon={<DeleteOutlined />}
              />,
            ]}
          >
            {todo.content}
          </List.Item>
        )}
      />
    ) : (
      <Empty
        className={"placeholder"}
        description={"No todo has been added yet!"}
      />
    );
  return <div>{todoList}</div>;
};
