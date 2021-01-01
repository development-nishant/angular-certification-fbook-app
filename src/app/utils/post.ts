export class Post{
  private post :string;
  private userId:string;
  private userName:string;
  private userPhotoId:string;
  private postImageId:string;
  private isAdmin:boolean;
  private isActive:boolean;
  private profession:string;


  get _post(): string {
    return this.post;
  }

  set _post(value: string) {
    this.post = value;
  }

  get _userId(): string {
    return this.userId;
  }

  set _userId(value: string) {
    this.userId = value;
  }

  get _userName(): string {
    return this.userName;
  }

  set _userName(value: string) {
    this.userName = value;
  }

  get _userPhotoId(): string {
    return this.userPhotoId;
  }

  set _userPhotoId(value: string) {
    this.userPhotoId = value;
  }

  get _postImageId(): string {
    return this.postImageId;
  }

  set _postImageId(value: string) {
    this.postImageId = value;
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
    this.isActive = value;
  }

  get _profession(): string {
    return this.profession;
  }

  set _profession(value: string) {
    this.profession = value;
  }
}


