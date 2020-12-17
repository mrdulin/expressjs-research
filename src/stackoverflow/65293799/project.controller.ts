import { getManager } from 'typeorm';
import { Project } from './project.entity';

export const findOneProject = async (queryParams: {}): Promise<Project> => {
  try {
    const project = await getManager()
      .getRepository(Project)
      .find({
        where: queryParams,
      });
    if (project.length > 1) {
      throw new Error('Found more than one project');
    }
    return project[0];
  } catch (e) {
    throw new Error(`Unable to find project: ${e.message}`);
  }
};
