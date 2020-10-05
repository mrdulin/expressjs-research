export function buildToSend(repo) {
  const { name, ...data } = repo;
  return {
    msg: {
      application: name,
      date: new Date(),
    },
  };
}
