import {Driver} from './Driver';

export interface Address {
  id: number;
  postCode: number;
  city: string;
  street: string;
  houseNumber: string;
  drivers: Driver[];
}
