import { Social } from "typing";

export const fetchSocial = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

  const date = await res.json()
  const Socials: Social[] = date.Socials

  return Socials
}
