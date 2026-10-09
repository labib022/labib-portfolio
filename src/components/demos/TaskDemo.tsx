import { useRef, useState, type FormEvent } from "react";
import { CheckCheck, Plus, Search, X } from "lucide-react";

type TaskStatus = "todo" | "doing" | "done";
interface Task { id: number; title: string; status: TaskStatus }
const columns: { id: TaskStatus; title: string }[] = [{ id: "todo", title: "To do" }, { id: "doing", title: "In progress" }, { id: "done", title: "Done" }];
const initialTasks: Task[] = [
  { id: 1, title: "Map out the user journey", status: "todo" },
  { id: 2, title: "Write the API documentation", status: "todo" },
  { id: 3, title: "Build the project showcase", status: "doing" },
  { id: 4, title: "Add accessible form labels", status: "doing" },
  { id: 5, title: "Choose the design tokens", status: "done" },
];

export function TaskDemo() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const nextId = useRef(6);
  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim().length < 3) { setError("Use at least 3 characters for your task."); return; }
    const task: Task = { id: nextId.current++, title: title.trim(), status: "todo" };
    setTasks((previous) => [...previous, task]);
    setTitle("");
    setError("");
    setNotice(`Added ${title.trim()} to To do.`);
  };

  return (
    <div className="demo-surface demo-tasks">
      <div className="demo-topbar"><span className="demo-app-brand"><CheckCheck size={23} /> taskflow<span>.</span></span><span className="demo-fine-print">YOUR FOCUS SPACE</span></div>
      <div className="demo-heading"><h3>Make room for progress.</h3><p>A little structure. A lot more clarity.</p></div>
      <form onSubmit={addTask} className="add-task-form"><label className="sr-only" htmlFor="new-task">New task title</label><input id="new-task" className="demo-input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What needs to get done?" required minLength={3} maxLength={80} aria-describedby={error ? "task-error" : undefined} aria-invalid={Boolean(error)} /><button type="submit" className="demo-button"><Plus size={16} /> Add task</button></form>
      {error && <p className="field-error" id="task-error" role="alert">{error}</p>}
      <div className="demo-search"><Search size={15} /><label htmlFor="task-search" className="sr-only">Search tasks</label><input id="task-search" placeholder="Search your tasks..." value={query} onChange={(event) => setQuery(event.target.value)} /></div>
      <div className="kanban-board">{columns.map((column) => {
        const visibleTasks = tasks.filter((task) => task.status === column.id && task.title.toLowerCase().includes(query.toLowerCase()));
        return <section className={`kanban-column ${column.id}`} key={column.id}><h4><span className="kanban-dot" />{column.title}<span>{visibleTasks.length}</span></h4><div className="kanban-task-list">{visibleTasks.map((task) => <article className="kanban-task" key={task.id}><div><p>{task.title}</p><button type="button" className="task-delete" aria-label={`Delete ${task.title}`} onClick={() => { setTasks((previous) => previous.filter((item) => item.id !== task.id)); setNotice(`Deleted ${task.title}.`); }}><X size={14} /></button></div><label className="sr-only" htmlFor={`task-status-${task.id}`}>Status of {task.title}</label><select id={`task-status-${task.id}`} value={task.status} onChange={(event) => { const status = event.target.value as TaskStatus; setTasks((previous) => previous.map((item) => item.id === task.id ? { ...item, status } : item)); setNotice(`Moved ${task.title} to ${columns.find((item) => item.id === status)?.title}.`); }}>{columns.map((option) => <option key={option.id} value={option.id}>{option.title}</option>)}</select></article>)}{visibleTasks.length === 0 && <p className="kanban-empty">{query ? "No matching tasks." : "A little breathing room."}</p>}</div></section>;
      })}</div>
      <p className="sr-only" role="status">{notice}</p>
    </div>
  );
}