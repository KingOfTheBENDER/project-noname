module.exports = {
  env: 'production',
  port: process.env.PORT,
  host: process.env.HOST,
  db: process.env.MONGO_DB_URI,
  jwtSecret: process.env.JWT_SECRET
};