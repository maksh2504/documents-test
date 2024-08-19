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

export type UserResponse = {
  data: UserModel;
};

export const userResponseToModel = (data: UserResponse): UserModel => ({
  ...data.data,
  email_verified_at: new Date(data?.data?.email_verified_at),
});
