import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./task.model";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(":id")
  getTaskById(@Param("id") id: string) {
    const task = this.tasksService.getTaskById(id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  @Post()
  createTask(@Body() task: Task) {
    return this.tasksService.createTask(task);
  }

  @Patch(":id")
  updateTask(@Param("id") id: string, @Body() task: Task) {
    const updated = this.tasksService.updateTask(id, task);

    if (!updated) {
      throw new NotFoundException('Task not found');
    }

    return updated;
  }

  @Delete(":id")
  deleteTask(@Param("id") id: string) {
    const deleted = this.tasksService.deleteTask(id);

    if (!deleted) {
      throw new NotFoundException('Task not found');
    }

    return deleted;
  }
}
