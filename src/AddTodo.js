import React, { useState } from "react";
import { Input } from "antd";
export const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState({
    content: "",
  });
  const addToList = (e) => {
    if (e.keyCode === 13) {
      addTodo(content);
      setContent(() => {
        return {
          content: "",
        };
      });
    }
  };
  return (
    <>
      <Input
        placeholder={"Add new todo"}
        onChange={(e) => setContent({ content: e.target.value })}
        onKeyUp={(e) => addToList(e)}
        value={content.content}
      />
      <p style={{ paddingTop: "4px", color: "grey" }}>
        NB. Press enter to add to the list
      </p>
    </>
  );
};
