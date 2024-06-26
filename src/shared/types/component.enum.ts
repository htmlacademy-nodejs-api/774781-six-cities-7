export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Config: Symbol.for('Config'),
  Logger: Symbol.for('Logger'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  OfferService: Symbol.for('OfferService'),
  OfferModel: Symbol.for('OfferModel'),
} as const;
