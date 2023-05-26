module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e7a3b305ee820b1bdba7125fc5481164'),
    },
  },
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 50 * 1024 * 1024, // 50MB en bytes
      },
    },
  },
});
