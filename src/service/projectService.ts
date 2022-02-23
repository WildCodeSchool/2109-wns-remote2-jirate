import { Project } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';

export const getAllProjects = async (): Promise<Project[]> => {
  const projects = await prismaContext.prisma.project.findMany();
  return projects;
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  return prismaContext.prisma.project.findFirst({ where: { id } });
};

export const createProject = async (name: string, token: string, userId: string): Promise<Project> => {
  const project = await prismaContext.prisma.project.create({ data: { name, token, userId } });
  return project;
};

export const getProjectsByUser = async (userId: string): Promise<Project[]> => {
  return prismaContext.prisma.project.findMany({ where: { userId } });
};

export const deleteProjectById = async (id: string): Promise<Project> => {
  return prismaContext.prisma.project.delete({ where: { id } });
};

export const updateProjectById = async (id: string, name: string, token: string, userId: string): Promise<Project> => {
  const project = prismaContext.prisma.project.update({ where: { id }, data: { name, token, userId } });
  return project;
};
