module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  watchIgnoreFiles: ["**/private/**"],
  });
   