import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfig } from 'src/config/mysql.config';
console.log(process.env.REDIS_HOST);
@Module({
  imports: [TypeOrmModule.forRoot(MysqlConfig)],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
