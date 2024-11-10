import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity'; // Adjust path if necessary
import { CreateUserTable1681234567890 } from './migrations/1681234567890-CreateUserTable'; // Include migration files here

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'nestjs_crud',
  entities: [User], // Add all entities
  migrations: [CreateUserTable1681234567890], // Add all migrations
  synchronize: false, // Don't auto-sync in production
});
