import React from "react";
import Button from "@material-ui/core/Button";

export const Todo = ({ todo, onDelete }) => {
  return (
    <div className="text-center bg-success bg-gradient py-4">
      <h3 className="text-white text-uppercase">{todo.title}</h3>
      <h4>{todo.desc}</h4>
      <Button
        variant="contained"
        color="primary"
        className="btn btn-sm btn-danger my-3"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </Button>
    </div>
  );
};
