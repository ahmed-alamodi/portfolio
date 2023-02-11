import { Skill } from "typing";

export const fetchSkills = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

  const date = await res.json()
  const skills: Skill[] = date.skills

  return skills
}