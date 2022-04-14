import { Options } from '@mikro-orm/core';

export function getMicroOrmOptions(): Options {
  let options: Options = {
    entities: ['./dist/src/entities'],
    entitiesTs: ['./src/entities'],
    clientUrl:
      process.env.DATABASE_URL ||
      'postgresql://postgres:postgres@127.0.0.1:5432/for-ios-app',
    type: 'postgresql',
  };
  if (process.env.NODE_ENV === 'production') {
    options.driverOptions = {
      connection: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    };
  }
  return options;
}
