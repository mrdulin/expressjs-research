const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const doTask = async (taskId) => {
  await wait(taskId);
  doSubTask(taskId * 3);
  doSubTask(taskId * 5);
  console.log('end task :' + taskId);
};

const doSubTask = async (subTaskId) => {
  await wait(subTaskId);
  console.log('end subTask :' + subTaskId);
};

const app = {
  doTask,
  doSubTask,
};

module.exports = app;
