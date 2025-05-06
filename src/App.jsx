import Header from "./components/Header";
import TaskBlockList from "./components/TaskBlockList";
import TaskBlock from "./components/TaskBlock";
import { useGetTasksQuery } from "./store/apiSlice";

export default function App() {
  const { data, isLoading } = useGetTasksQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <TaskBlockList>
        <TaskBlock block="open" data={data} />
        <TaskBlock block="progress" data={data} />
        <TaskBlock block="done" data={data} />
      </TaskBlockList>
    </>
  );
}
