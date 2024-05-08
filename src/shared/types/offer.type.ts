import { User } from './user.type.js';

export type PropertyType = 'apartment' | 'house' | 'room' | 'hotel';
export type Amenities = 'Breakfast' | 'Air' | 'conditioning' | 'Laptop' | 'friendly' | 'workspace' | 'Baby seat' | 'Washer' | 'Towels' | 'Fridge';

export enum CitiesEnum {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export type Coordinates = {
  latitude: number,
  longitude: number
};

// const Cities = {
//   [CitiesEnum.Paris]: { latitude: 48.85661, longitude: 2.351499 },
//   [CitiesEnum.Cologne]: { latitude: 50.938361, longitude: 6.959974 },
//   [CitiesEnum.Brussels]: { latitude: 50.846557, longitude: 4.351697 },
//   [CitiesEnum.Amsterdam]: { latitude: 52.370216, longitude: 4.895168 },
//   [CitiesEnum.Hamburg]: { latitude: 53.550341, longitude: 10.000654 },
//   [CitiesEnum.Dusseldorf]: { latitude: 51.225402, longitude: 6.776314 },
// };

export type Offer = {
  title: string,
  description: string,
  postDate: Date,
  city: string,
  preview: string,
  photos: string[],
  // isPremium: boolean,
  // isFavorite: boolean,
  rating: number,
  type: PropertyType,
  roomsCount: number,
  guestsCount: number,
  price: number,
  amenities: Amenities[],
  author: User,
  coordinates: Coordinates,
}
