"use client";
import { createTodo } from "@/Services/Todo";
import TodoForm from "@/components/TodoForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

export default function Newtodo() {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleAddTodo = (formData) => {
    addTodoMutation.mutate(formData);
  };
  return (
    <>
      <div>
        <h2 className="sub__heading">Add New Todo</h2>
      </div>
      <TodoForm onSubmit={handleAddTodo} InitialValue={{}} />
    </>
  );
}
