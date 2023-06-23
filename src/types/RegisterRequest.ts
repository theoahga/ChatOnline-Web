export interface RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
}

export class RegisterRequestImpl implements RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  username: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    username: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.username = username;
  }

}
