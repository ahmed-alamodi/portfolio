export type Skill = {
  image: string
  progress: number
  title: string
}

export type Experience = {
  technologies: string[]
  points: string[]
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorkingHero: boolean
  companyImage: string
}

export type Projects = {
  title: string,
  summary: string,
  technologies: string[],
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
