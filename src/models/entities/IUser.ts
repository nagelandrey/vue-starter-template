export interface IUser {
  name: string
  login: string
  role: {
    id: string
    descr: string
  }
  company: {
    id: string
    descr: string
  }
  avatarFileId: number
}
