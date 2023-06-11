​​export interface UserCredentials {
    username: string,
    password: string
}
 
export interface LoggedInUser {
    id?: number,
    token?: string,
    username?: string
}

export class LoggedInUser {
    constructor(
      public id?: number,
      public username?: string,
      public token?: string
    ) {}
  }
  