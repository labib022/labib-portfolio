import type { ProjectKind } from "../../types";
import { CommerceDemo } from "./CommerceDemo";
import { TaskDemo } from "./TaskDemo";
import { BlogDemo } from "./BlogDemo";
import { DashboardDemo } from "./DashboardDemo";

export default function ProjectDemos({ kind }: { kind: ProjectKind }) {
  if (kind === "commerce") return <CommerceDemo />;
  if (kind === "tasks") return <TaskDemo />;
  if (kind === "blog") return <BlogDemo />;
  return <DashboardDemo />;
}