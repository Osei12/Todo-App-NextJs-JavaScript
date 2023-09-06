import getQueryClient from "@/utils/getQueryClient";
import Todo from "./Todo";
import { getTodos } from "@/Services/Todo";
import { Hydrate, dehydrate } from "@tanstack/react-query";

export default async function ListTodo() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["todos"], getTodos);
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hydrate state={dehydratedState}>
        <Todo />
      </Hydrate>
    </>
  );
}
