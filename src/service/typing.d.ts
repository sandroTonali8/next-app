namespace API {
  type LoginParameters = {
    username: string;
    password: string;
  }

  type LoginResult = {
    code: number;
    data?: API.User;
    message: string;
  }

  interface User {
    id: number;
    username: string;
    nickname: string;
    password?: string;
  }
}