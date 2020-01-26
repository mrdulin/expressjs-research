export const resolvers = {
  getTemplates: async (_, args, { db }) => {
    const result = await db.goalTemplate.findAll();
    return result.slice(0, args.first);
  },
};
