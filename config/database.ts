module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'), // Default fallback
        port: env.int('DATABASE_PORT', 5432),   // Default fallback
        database: env('DATABASE_NAME', 'strapi_db'),
        username: env('DATABASE_USERNAME', 'strapi_user'),
        password: env('DATABASE_PASSWORD', 'secure_password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});