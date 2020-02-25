export const habitsMutation = {
  Mutation: {
    async addHabit(_, { habit }) {
      console.log("add habit", habit);
    }
  }
};
