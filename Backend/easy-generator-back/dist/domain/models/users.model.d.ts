export default class UserModel {
    private id?;
    private readonly name;
    private readonly email;
    private password;
    private createAt;
    constructor(id: string, name: string, email: string, password: string);
    validatePassword(): void;
    validateEmail(): void;
    convertPassIntoHash(): Promise<void>;
    getName(): string;
    getEmail(): string;
    getId(): string;
    setCreateAt(createdAt: Date): this;
}
