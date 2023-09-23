const { faker } = require('@faker-js/faker');
const { times } = require('lodash');

module.exports = () => {
  return {
    people: times(20, (id) => ({
      id,
      name: faker.person.fullName(),
      avatar: faker.internet.avatar(),
    })),
  };
};
