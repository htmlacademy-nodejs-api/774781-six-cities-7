import { User } from '../user/index.js';
import { Amenities } from './amenities.type.js';
import { City } from './cities.enum.js';
import { Coordinates } from './coordinates.type.js';
import { Photos } from './photos.type.js';
import { PropertyType } from './property-type.type.js';

export type Offer = {
  title: string,
  description: string,
  postDate: Date,
  city: City,
  preview: string,
  photos: Photos,
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  type: PropertyType,
  roomsCount: number,
  guestsCount: number,
  price: number,
  amenities: Amenities[],
  user: User,
  coordinates: Coordinates,
}
