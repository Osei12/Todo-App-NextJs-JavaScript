"use client";

import { deleteTodo, getTodos, updateTodoPartial } from "@/Services/Todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Todo() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    isError,
    data: todos,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const deletetTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDelete = (id) => {
    deletetTodoMutation.mutate(id);
  };

  const todoPartialUpdate = useMutation({
    mutationFn: updateTodoPartial,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleCheckbox = (id, is_completed) => {
    todoPartialUpdate.mutate({
      id,
      is_completed,
    });
  };

  if (isLoading) {
    return "Loading ...";
  }

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full flex-col md:flex-row flex items-start md:items-center gap-2 mt-6 mb-4"
        >
          <div className="flex w-full items-start md:items-center  gap-2 md:flex-row flex-col">
            <input
              checked={todo.is_completed}
              type="checkbox"
              className="checkbox"
              onChange={(e) => handleCheckbox(todo.id, e.target.checked)}
            />
            <div className=" w-full flex bg-purple-50/70 px-3 py-6 justify-between items-center rounded-xl h-auto">
              <h4
                className={`${
                  todo.is_completed ? "line-through" : ""
                } text-purple-500 capitalize `}
              >
                {todo.title}
              </h4>
            </div>
          </div>
          <div className="gap-2 flex flex-1">
            <button
              onClick={() => router.push(`/todo/edit/${todo.id}`)}
              className="btn btn-secondary"
            >
              <FaEdit className="text-white" />
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="btn btn-error"
            >
              <FaTrash className="text-white" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
