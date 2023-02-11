import { Experience } from "typing";

export const fetchExperiences = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)

  const date = await res.json()
  const experiences: Experience[] = date.experiences

  return experiences
}
