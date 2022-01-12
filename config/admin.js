module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '46372285ad0ab3535441546d7603f006'),
  },
});
