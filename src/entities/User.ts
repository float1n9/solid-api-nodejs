const { v4: uuid_v4 } = require('uuid');

export class User {
   
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid_v4();
    }
  }
}