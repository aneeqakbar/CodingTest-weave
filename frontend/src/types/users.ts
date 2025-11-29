export type TUserAddressGeo = {
  lat: string;
  lng: string;
};

export type TUserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TUserAddressGeo;
};

export type TUserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: TUserAddress;
  company: TUserCompany;
};
