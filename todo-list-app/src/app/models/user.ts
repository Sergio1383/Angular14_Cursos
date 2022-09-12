export class User {
  id?: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  userName?: string;
  email?: string;
  deleted: boolean = false;
  userStatusId: number = 1;
  groupId: number = 1;
  accountId: number = 1;
  isFullAccount: boolean = false;

}
