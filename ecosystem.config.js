module.exports = {
  apps : [{
    name: 'strapi-religian-online',
    cwd: '/home/ubuntu/religian-strapi',
    script: 'server.js',
    env: {
      NODE_ENV: 'production',
      DATABASE_HOST: 'ds349587.mlab.com', // database Endpoint under 'Connectivity & Security' tab
      DATABASE_PORT: '49587',
      DATABASE_NAME: 'religian',  // DB name under 'Configuration' tab
      DATABASE_USERNAME: 'admin', // default username
      DATABASE_PASSWORD: 'mkcntu9b',
    },
  }],
};
