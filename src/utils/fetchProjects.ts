import { Project } from "typing";

export const fetchProjects = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

  const date = await res.json()
  const projects: Project[] = date.projects

  return projects
}
