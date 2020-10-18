import {Driver} from './Driver';

export interface Address {
  id: number;
  postCode: string;
  city: string;
  street: string;
  houseNumber: string;
  drivers: Driver[];
}
