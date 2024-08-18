export const configVar = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT) || 3000,
  NODE_NAME: process.env.NODE_NAME,
  MONGO_CONNECTION_STRING: 'mongodb://admin:secretpassword@localhost:27017'//process.env.MONGO_CONNECTION_STRING,
});
