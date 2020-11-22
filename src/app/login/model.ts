export class User {
    id: Int32Array;
    username: string;
    password: string;

    constructor(id: any, username: any, password: any) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}