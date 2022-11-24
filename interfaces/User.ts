// Generated by https://quicktype.io

export interface UsersData {
  ok:    boolean;
  users: User[];
}

export interface User {
  name:        string;
  email:       string;
  role:        Role;
  password:    string;
  createdDate: number;
  id:          string;
  token: string
}

export interface Role {
  label: string;
  value: string;
  _id:  string;
}