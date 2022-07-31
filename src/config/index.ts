const base = '/api/v1';
const domain = 'somecompany.com';
const DEFAULTS = {
  domain,
  appName: 'FridayApp',
  defaultLocale: {
    lang: 'en',
  },
  app: {
    platforms: ['ios', 'android'],
  },
  apis: {
    baseUrl: `https://movie-database-alternative.p.rapidapi.com`,
    host: 'movie-database-alternative.p.rapidapi.com',
    key: 'a31b811d85mshdbf1eec80a2769fp123457jsn554f71d8ae23',
    public: {
      backend: `${base}`,
    },
    search: `${base}/search`,
    user: {
      base: `${base}`,
      login: `${base}/login`,
      logout: `${base}/logout`,
    },
  },
};

export default DEFAULTS;
