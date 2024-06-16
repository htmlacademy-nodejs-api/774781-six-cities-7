import {
  Ref,
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
} from '@typegoose/typegoose';

import { Amenities, City, Coordinates, Photos, PropertyType } from '../../types/index.js';
import { UserEntity } from '../user/user.entity.js';

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_ROOMS_COUNT = 1;
const MAX_ROOMS_COUNT = 8;

const MIN_GUESTS_COUNT = 1;
const MAX_GUESTS_COUNT = 10;

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
    trim: true
  })
  public title!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true })
  public postDate!: Date;

  @prop({ required: true })
  public city!: City;

  @prop({ required: true })
  public preview!: string;

  @prop({
    required: true,
    type: () => [String]
  })
  public photos!: Photos;

  @prop({ default: false })
  public isPremium!: boolean;

  @prop({ default: false })
  public isFavorite!: boolean;

  @prop({
    required: true,
    min: MIN_RATING,
    max: MAX_RATING,
  })
  public rating!: number;

  @prop({ required: true })
  public type!: PropertyType;

  @prop({
    required: true,
    min: MIN_ROOMS_COUNT,
    max: MAX_ROOMS_COUNT,
  })
  public roomsCount!: number;

  @prop({
    required: true,
    min: MIN_GUESTS_COUNT,
    max: MAX_GUESTS_COUNT,
  })
  public guestsCount!: number;

  @prop({ required: true })
  public price!: number;

  @prop({
    required: true,
    type: () => [String]
  })
  public amenities!: Amenities[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop({
    required: true,
    type: () => Number
  })
  public latitude!: Coordinates['latitude'];

  @prop({
    required: true,
    type: () => Number
  })
  public longitude!: Coordinates['longitude'];

  @prop({ default: 0 })
  public commentCount!: number;
}

export const OfferModel = getModelForClass(OfferEntity);
