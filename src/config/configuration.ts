export default () => ({
  app: {
    env: process.env.ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  mongoUri: process.env.MONGO_URI,
});
