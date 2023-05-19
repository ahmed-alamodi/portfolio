import { IconType } from "react-icons"

export type Skill = {
  image: (FunctionComponent<Props> | IconType)
  progress: number
  title: string
  bgColor?: string
  color?: string
}

export type Experience = {
  technologies: (FunctionComponent<Props> | IconType)[]
  points: string[]
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorkingHero: boolean
  companyImage: string
}

export type Projects = {
  title: string,
  summary: string,
  icon: string
  technologies: (FunctionComponent<Props> | IconType)[]
  link: string
}

export type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

export type ContactMe = {
  phoneNumber: string | number
  address: string
  subject?: string
  name?: string
  message?: string
  email: string
}
