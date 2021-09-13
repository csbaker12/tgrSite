const AccessControl = require('accesscontrol');

let grantsObject = {
  admin: {
    profile: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*'],
    },
    articles: {
      'read:any': ['*'],
    },
    article: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*'],
    },
    thread: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*'],
    },

    threads: {
      'read:any': ['*'],
    },

    comments: {
      'create:any': ['*'],
      'read:any': ['*'],
      'delete:any': ['*'],
    },
    // categories: {
    //   'create:any': ['*'],
    //   'read:any': ['*'],
    //   'update:any': ['*'],
    //   'delete:any': ['*'],
    // },
  },
  user: {
    profile: {
      'read:own': ['*', '!password'],
      'update:own': ['*'],
      'delete:own': ['*'],
    },
    thread: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
    },
    threads: {
      'read:any': ['*'],
    },
    comments: {
      'create:any': ['*'],
      'read:any': ['*'],
    },
    // articles: {
    //   'read:any': ['*'],
    // },
    // article: {
    //   'read:any': ['*'],
    // },
    // comments: {
    //   'create:any': ['*'],
    //   'read:any': ['*'],
    //   'update:own': ['*'],
    //   'delete:own': ['*'],
    // },
  },
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
