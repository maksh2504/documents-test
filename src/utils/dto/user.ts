import { BaseDto } from './baseDto';

export type Organisation = {
  id: number;
  name: string;
  logo_url: string;
  is_personal: boolean;
};

export type UserModel = {
  id: number;
  name: string;
  email: string;
  profile_picture_url: string;
  email_verified_at: Date;
  identification_number: string;
  current_organisation: Organisation;
};

export type User = {
  data: UserModel;
};

export type UserRes = BaseDto<User>;

export const userResponseToModel = (data: UserRes): UserModel => ({
  ...data.record.data,
  email_verified_at: new Date(data.record.data.email_verified_at),
});
