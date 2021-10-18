import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
  'postgres://jmhmebgqmzwgmo:376a1f2ddf94df939de249b6abe5beb58e7dc9ebd255dc3d6666b0d93312593a@ec2-34-233-64-238.compute-1.amazonaws.com:5432/d5fem7pvp9hmu4',
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
testConnection();

export default sequelize;
