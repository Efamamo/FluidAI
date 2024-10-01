import './Todo.css';
export default function Todo({ todo }: { todo: string }) {
  return (
    <div className="todo">
      <h3>New Todo</h3>
      <h2>{todo}</h2>
    </div>
  );
}
