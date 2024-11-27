// const remoteUrl = process.env.NODE_ENV === 'production'
//   ? 'https://your-production-url/remoteEntry.js'
//   : 'http://localhost:4201/remoteEntry.js';

module.exports = {
  remotes: {
    taskapp: `taskapp@https://angular-mfa-taskapp.vercel.app/remoteEntry.js`,
  },
};
