import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {getConnectionOptions} from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { MediaModule } from './media/media.module';
import { ChatModule } from './pp.chat/chat.module';

const getType = (envType: any) => {
  switch (envType) {
    case 'mysql':
    case 'mssql':
    case 'postgres':
    case 'mariadb':
    case 'mongodb':
      return envType;
    default:
      return 'mysql';
  }
};

getConnectionOptions();
console.log('+++++++++++++ Database Connection ++++++++++++++++');
console.log('process.env.databaseHost: \t', process.env.databaseHost);
console.log('process.env.databasePort: \t', process.env.databasePort);
console.log('Number.parseInt(process.env.databasePort): \t',
    Number.parseInt(process.env.databasePort || '3306', 10));
console.log('process.env.databaseUser: \t', process.env.databaseUser);
console.log('process.env.databasePass: \t', process.env.databasePass);
console.log('process.env.databaseName: \t', process.env.databaseName);
console.log('process.env.databaseCache: \t', process.env.databaseCache);
console.log('process.env.databaseLog: \t', process.env.databaseLog);
console.log('process.env.databaseSync: \t', process.env.databaseSync);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: getType(process.env.databaseType),
      host: process.env.databaseHost || 'localhost',
      port: Number.parseInt(process.env.databasePort || '3306', 10),
      username: process.env.databaseUser || 'root',
      password: process.env.databasePass || '',
      database: process.env.databaseName || 'node',
      entities: [process.env.tOrmEntities || '**/**/*.entity{.ts,.js}'],
      synchronize: (process.env.databaseSync === 'true' || false),
      logging: (process.env.databaseLog === 'true' || false),
      cache: (process.env.databaseCache === 'true' || false),
    }),
    UserModule,
    AuthModule,
    MediaModule,
    ChatModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
