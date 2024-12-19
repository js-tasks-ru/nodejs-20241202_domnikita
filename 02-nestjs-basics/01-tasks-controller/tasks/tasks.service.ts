import { Injectable } from "@nestjs/common";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | null {
    return this.tasks.find(task => task.id === id) || null;
  }

  createTask(task: Task): Task {
    const created = { ...task, id: new Date().toISOString() };
    this.tasks.push(created);
    return created;
  }

  updateTask(id: string, update: Task): Task | null {
    const task = this.getTaskById(id);

    if (!task) {
      return null;
    }

    const nextTasks = this.tasks.filter(task => task.id !== id);
    const updatedTask = { ...task, ...update };
    this.tasks = [...nextTasks, updatedTask];
    return updatedTask;
  }

  deleteTask(id: string): Task | null {
    const task = this.getTaskById(id);

    if (!task) {
      return null;
    }

    this.tasks = this.tasks.filter(task => task.id !== id);
    return task;
  }
}
