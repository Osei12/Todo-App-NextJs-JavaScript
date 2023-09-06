"use client";
import { getTodo, updateTodo } from "@/Services/Todo";
import TodoForm from "@/components/TodoForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export default function EditTodo({ params }) {
  const { id } = params;
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isLoading, data: todo } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      router.push("/");
    },
  });

  const handleUpdateTodo = (updatedTodo) => {
    updateTodoMutation.mutate({
      id,
      ...updatedTodo,
    });
  };

  if (isLoading) {
    return "Loading ...";
  }
  return (
    <div>
      <div>
        <h2 className="sub__heading">Upate Todo</h2>
      </div>
      <TodoForm onSubmit={handleUpdateTodo} InitialValue={todo} />
    </div>
  );
}
