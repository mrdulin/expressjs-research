import { init } from './config';
import { moduleQuestion } from './questions';
import { ModuleAnswer } from './choice';

export async function initActions(): Promise<any> {
  const moduleAnswer: ModuleAnswer = await moduleQuestion();

  return init(moduleAnswer.name);
}
