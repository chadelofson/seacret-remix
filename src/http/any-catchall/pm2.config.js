module.exports = {
  apps: [
    // {
    //   name: 'Arc',
    //   script: 'arc',
    //   args: 'sandbox',
    //   env: {
    //     NODE_ENV: 'development',
    //   },
    // },
    {
      name: 'Remix',
      script: 'remix run2',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Postcss',
      script: 'npm run css:watch',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
