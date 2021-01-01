export class JwtToken {

  private isAdmin: boolean;
  private isActive: boolean;
  private id: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private photoId:string;
  private token:string;

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
  get _isAdmin(): boolean {
    return this.isAdmin;
  }

  set _isAdmin(value: boolean) {
    this.isAdmin = value;
  }
  get _isActive(): boolean {
    return this.isActive;
  }

  set _isActive(value: boolean) {
    this.isAdmin = value;
  }

  get _token(): string {
    return this.token;
  }

  set _token(value: string) {
    this.token = value;
  }
  get _photoId(): string {
    return this.photoId;
  }

  set _photoId(value: string) {
    this.photoId = value;
  }
  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }
}
