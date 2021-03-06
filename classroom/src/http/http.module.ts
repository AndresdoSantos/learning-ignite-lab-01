import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import path from 'node:path';

import { DatabaseModule } from '../database/database.module';
import { TestResolver } from './test.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(), // Faz o módulo HTTP ler variáveis ambientes.
    DatabaseModule,
    GraphQLModule.forRoot({
      // Configuração do schema.gql
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
  ],
  providers: [TestResolver],
})
export class HttpModule {}
