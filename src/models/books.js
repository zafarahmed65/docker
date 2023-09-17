import { DataTypes } from 'sequelize';
import { SequelizeFactory } from '../drivers/SequelizeFactory.js';

const sequelize = SequelizeFactory.createConnection(process.env.NODE_ENV);

export const Books = sequelize.define(
  'Books',
  {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.INTEGER,
    },
    publication: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Books',
  }
);
