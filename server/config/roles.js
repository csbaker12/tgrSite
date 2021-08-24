const AccessControl = require('accesscontrol');

let grantsObject = {
  admin: {
    profile: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*'],
    },
    // articles: {
    //   'read:any': ['*'],
    // },
    // article: {
    //   'create:any': ['*'],
    //   'read:any': ['*'],
    //   'update:any': ['*'],
    //   'delete:any': ['*'],
    // },
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
    // articles: {
    //   'read:any': ['*'],
    // },
    // article: {
    //   'create:any': ['*'],
    //   'read:any': ['*'],
    //   'update:own': ['*'],
    //   'delete:own': ['*'],
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
