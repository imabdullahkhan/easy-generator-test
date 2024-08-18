import { User } from "./User";

export interface Auth {
  isAuthenticated: boolean;
  user: User | null;
}