import { get_all_projects } from "@/lib/actions";

export async function GET() {
  const projects = await get_all_projects();
  return Response.json(projects);
}
