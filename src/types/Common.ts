

export interface User {
  email: string
  password: string
  name: string
}


export type SignInValue = Partial<User>