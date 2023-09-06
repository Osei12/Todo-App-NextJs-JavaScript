export async function getTodos() {
  const response = await fetch("http://localhost:8000/api/todo");
  if (!response.ok) {
    throw new Error("Failed to get todos");
  }

  return response.json();
}

export async function getTodo(id) {
  const response = await fetch(`http://localhost:8000/api/todo/${id}`);
  if (!response.ok) {
    throw new Error("Failed to get todos");
  }

  return response.json();
}

export async function createTodo(newTodo) {
  const response = await fetch(`http://localhost:8000/api/todo/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to get todos");
  }

  return response.json();
}

export async function updateTodo(updatedTodo) {
  const response = await fetch(
    `http://localhost:8000/api/todo/update/${updatedTodo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    },
  );
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return response.json();
}

export async function updateTodoPartial({ id, is_completed }) {
  const response = await fetch(
    `http://localhost:8000/api/todo/partial-update/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, is_completed }),
    },
  );
  if (!response.ok) {
    throw new Error("Failed to get update todo");
  }

  return response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:8000/api/todo/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  return true;
}
