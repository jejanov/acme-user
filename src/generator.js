const { faker } = require("@faker-js/faker");

const createRandomUser = () => {
  return {
    name: faker.company.name(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    password: faker.internet.password(),
    birthday: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

const generate = () => {
  const users = [];

  while (users.length < 50) {
    users.push(createRandomUser());
  }
  return users;
};

module.exports = {
  generate,
};
