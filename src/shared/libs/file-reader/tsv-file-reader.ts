import { readFileSync } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import { Offer, User, UserType, PropertyType, Amenities, Coordinates } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  private validateRawData(): void {
    if (! this.rawData) {
      throw new Error('File was not read');
    }
  }

  private parseRawDataToOffers(): Offer[] {
    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => this.parseLineToOffer(line));
  }

  private parseLineToOffer(line: string): Offer {
    const [
      title,
      description,
      postDate,
      city,
      preview,
      photos,
      rating,
      type,
      roomsCount,
      guestsCount,
      price,
      amenities,
      name,
      email,
      avatarPath,
      password,
      userType,
      latitude,
      longitude,
    ] = line.split('\t');

    return {
      title,
      description,
      postDate: new Date(postDate),
      city,
      preview,
      photos: photos.split(';'),
      rating: Number.parseInt(rating, 10),
      type: type as PropertyType,
      roomsCount: Number.parseInt(roomsCount, 10),
      guestsCount: Number.parseInt(guestsCount, 10),
      price: Number.parseInt(price, 10),
      amenities: amenities.split(';') as Amenities[],
      author: this.parseUser(name, email, avatarPath, password, userType) as User,
      coordinates: this.parseCoordinates(latitude, longitude) as Coordinates,
    };
  }

  private parseUser(
    name: string,
    email: string,
    avatarPath: string,
    password: string,
    userType: string
  ): User {
    return { name, email, avatarPath, password, type: userType as UserType };
  }

  private parseCoordinates(latitude: string, longitude: string) {
    return {
      latitude: Number.parseInt(latitude, 10),
      longitude: Number(longitude)
    };
  }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    this.validateRawData();
    return this.parseRawDataToOffers();
  }
}
