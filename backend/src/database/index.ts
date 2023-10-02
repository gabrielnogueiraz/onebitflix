import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'highcourses_development',
  username: 'highcourses',
  password: 'highcourses',
  define: {
    underscored: true
  }
})