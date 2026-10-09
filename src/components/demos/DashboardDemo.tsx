import { useState, type FormEvent } from "react";
import { Activity, ArrowUpRight, CircleUserRound, LayoutDashboard, Plus, Search, Users, X } from "lucide-react";

interface DemoUser { id: number; name: string; email: string; role: string; status: "Active" | "Invited" }
const initialUsers: DemoUser[] = [
  { id: 1, name: "Alex Morgan", email: "alex@example.com", role: "Editor", status: "Active" },
  { id: 2, name: "Sam Taylor", email: "sam@example.com", role: "Viewer", status: "Active" },
  { id: 3, name: "Jordan Lee", email: "jordan@example.com", role: "Editor", status: "Invited" },
  { id: 4, name: "Casey Park", email: "casey@example.com", role: "Viewer", status: "Active" },
];

export function DashboardDemo() {
  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [formOpen, setFormOpen] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const filteredUsers = users.filter((user) => (status === "All statuses" || user.status === status) && `${user.name} ${user.email}`.toLowerCase().includes(query.toLowerCase()));
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") || "").trim();
    const email = String(values.get("email") || "").trim();
    if (name.length < 2) { setError("Please enter a name with at least 2 characters."); return; }
    if (users.some((user) => user.email.toLowerCase() === email.toLowerCase())) { setError("That email is already in the sample directory."); return; }
    setUsers((previous) => [...previous, { id: Date.now(), name, email, role: String(values.get("role")), status: "Invited" }]);
    setError("");
    setFormOpen(false);
    setNotice(`${name} was added to the local preview. No invitation was sent.`);
  };

  return (
    <div className="demo-surface demo-dashboard">
      <div className="demo-topbar"><span className="demo-app-brand"><LayoutDashboard size={22} /> overview<span>.</span></span><span className="demo-fine-print">SAMPLE WORKSPACE</span></div>
      <div className="dashboard-heading"><div><h3>A clearer view of your workspace.</h3><p>Fictional data. Real interactions.</p></div><button type="button" className="demo-button" onClick={() => { setError(""); setFormOpen(!formOpen); }} aria-expanded={formOpen} aria-controls={formOpen ? "add-demo-user" : undefined}>{formOpen ? <X size={15} /> : <Plus size={15} />}{formOpen ? "Cancel" : "Add member"}</button></div>
      <div className="dashboard-stats"><div><Users size={18} /><span>Total members</span><strong>{users.length.toString().padStart(2, "0")}</strong></div><div><Activity size={18} /><span>Active members</span><strong>{activeUsers.toString().padStart(2, "0")}</strong></div><div><CircleUserRound size={18} /><span>Invited</span><strong>{(users.length - activeUsers).toString().padStart(2, "0")}</strong></div></div>
      <div className="dashboard-chart"><div><h4>Workspace activity</h4><span>Illustrative data <ArrowUpRight size={12} /></span></div><svg viewBox="0 0 680 115" role="img" aria-label="Illustrative weekly activity chart. Monday 12, Tuesday 18, Wednesday 15, Thursday 26, Friday 22, Saturday 34, Sunday 38."><defs><linearGradient id="activity-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a3e635" stopOpacity=".2" /><stop offset="100%" stopColor="#a3e635" stopOpacity="0" /></linearGradient></defs><path d="M0 24H680M0 60H680M0 96H680" stroke="#263244" strokeDasharray="3 6" fill="none" /><path d="M8 89 118 70 228 81 338 43 448 57 558 21 670 11V110H8Z" fill="url(#activity-fill)" /><path d="M8 89 118 70 228 81 338 43 448 57 558 21 670 11" fill="none" stroke="#a3e635" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg><div className="chart-axis">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}</div></div>
      {formOpen && <form id="add-demo-user" className="add-user-form" onSubmit={addUser}><div><label htmlFor="demo-user-name">Name</label><input id="demo-user-name" className="demo-input" name="name" required minLength={2} maxLength={60} placeholder="Sample member" /></div><div><label htmlFor="demo-user-email">Email</label><input id="demo-user-email" className="demo-input" name="email" type="email" required maxLength={254} placeholder="member@example.com" /></div><div><label htmlFor="demo-user-role">Role</label><select id="demo-user-role" className="demo-input" name="role"><option>Viewer</option><option>Editor</option></select></div>{error && <p className="field-error" role="alert">{error}</p>}<button type="submit" className="demo-button">Add to preview <Plus size={15} /></button><p className="demo-fine-print">Local sample only. No emails or invitations are sent.</p></form>}
      <div className="dashboard-table-heading"><h4>Team directory</h4><div className="dashboard-filters"><div className="demo-search"><Search size={14} /><label className="sr-only" htmlFor="user-search">Search team directory</label><input id="user-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search members..." /></div><label className="sr-only" htmlFor="user-status-filter">Filter by status</label><select className="demo-input" id="user-status-filter" value={status} onChange={(event) => setStatus(event.target.value)}><option>All statuses</option><option>Active</option><option>Invited</option></select></div></div>
      <div className="demo-table-scroll" role="region" aria-label="Sample team directory" tabIndex={0}><table className="demo-table"><thead><tr><th scope="col">Member</th><th scope="col">Role</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead><tbody>{filteredUsers.map((user) => <tr key={user.id}><td><span className="table-user-name">{user.name}</span><span className="table-email">{user.email}</span></td><td>{user.role}</td><td><button type="button" className={`user-status ${user.status.toLowerCase()}`} aria-label={`Change ${user.name}'s status from ${user.status} to ${user.status === "Active" ? "Invited" : "Active"}`} onClick={() => { setUsers((previous) => previous.map((item) => item.id === user.id ? { ...item, status: item.status === "Active" ? "Invited" : "Active" } : item)); setNotice(`${user.name}'s sample status updated.`); }}><span />{user.status}</button></td><td><button type="button" className="task-delete" aria-label={`Remove ${user.name} from sample directory`} onClick={() => { setUsers((previous) => previous.filter((item) => item.id !== user.id)); setNotice(`${user.name} removed from the sample directory.`); }}><X size={15} /></button></td></tr>)}</tbody></table></div>
      {filteredUsers.length === 0 && <p className="demo-empty">No members match your filters.</p>}
      <p className="dashboard-notice" role="status">{notice || "Tip: select a status to toggle it. All names and data here are fictional."}</p>
    </div>
  );
}