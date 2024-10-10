export interface JobGroup {
  id: number
  name: string
}

export interface ProfileData {
  jobGroup: string | null
  company: string | null
  experience: string | null
}
