export class Users {
    userId: number;
    name: string;
    userCity: string;
    userName: string;
    password: string;
    userType: string;
}

export class UsersResolved {
  users: Users;
  error?: any = null;
}
