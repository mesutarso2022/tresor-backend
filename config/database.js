module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "172.27.100.9"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "dtos"),
        username: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {
        pool: {
          min: 2,
          max: 200,
          createTimeoutMillis: 3000,
          acquireTimeoutMillis: 30000,
          idleTimeoutMillis: 30000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 100,
          propagateCreateError: false,
        },
      },
    },
  },
});
