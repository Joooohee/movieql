const joohee = {
  name: "Joohee",
  age: 25,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => joohee,
  },
};

export default resolvers;
