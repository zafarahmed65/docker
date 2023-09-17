import { db_config } from '../../configs/config.js';
import { Sequelize } from 'sequelize';

export class SequelizeFactory {
  static createConnection(server) {
    const config = db_config[server];
    if (!config) {
      throw new Error(`incorrect config requested: ${server}`);
    }

    // db connection object
    return new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: config.dialect,
      logging: false,
    });
  }
}
