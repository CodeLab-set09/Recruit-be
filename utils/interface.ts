import { Document } from "mongoose";

interface iUser {
  userName?: string;
  email?: string;
  password?: string;
  verifyToken?: string;
  verify?: boolean;
}

export interface iUserData extends iUser, Document {}

interface iForm {
    name?: string
    email?: string
    address?: string
    phone?: number
}
export interface iFormData extends iForm, Document {}