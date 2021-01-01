export class User{
  // tslint:disable-next-line:variable-name
  private firstName : string;
  private lastName : string;
  private email : string;
  private gender : string;
  private password : string;
  private dob : string;


  get _firstName(): string {
    return this.firstName;
  }

  set _firstName(value: string) {
    this.firstName = value;
  }

  get _lastName(): string {
    return this.lastName;
  }

  set _lastName(value: string) {
    this.lastName = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _gender(): string {
    return this.gender;
  }

  set _gender(value: string) {
    this.gender = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _dob(): string {
    return this.dob;
  }

  set _dob(value: string) {
    this.dob = value;
  }
}
