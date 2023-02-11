import { PageInfo } from "typing";

export const fetchPageInfo = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

  const date = await res.json()
  const pageInfo: PageInfo = date.pageInfo

  return pageInfo
}
