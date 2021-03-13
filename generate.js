const faker = require('faker');
const _ = require('lodash');

module.exports = () => {

  return {
    people: _.times(20, id => ({
      id,
      name: faker.name.findName(),
      avatar: faker.internet.avatar()
    }))
  };
};
