import { ConfigType } from '@nestjs/config';
import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import config from '../config/config';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      inject: [config.KEY],
      useFactory: async (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          port,
          dbName,
        } = configService.mongo;

        const url = `${connection}://${user}:${password}@${host}:${port}/?authSource=admin&readPreference=primary`;

        const client = new MongoClient(url);
        await client.connect();
        return client.db(dbName);
      },
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
