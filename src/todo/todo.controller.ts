
import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get,Param,Patch, Post, Put } from
    '@nestjs/common';
export class TodoDto {
  name: string;
  description: string;
  }
  export class TodoDtoUpdate {
    name: string;
    description: string;
    status:TodoStatusEnum;
    }
@Controller()
export class TodoController {
    private service;
    constructor(private todoservice:TodoService){
      this.service=todoservice;
    }
    @Get()
getTodos(){
    return this.service.getTodos()
}


@Get('add/:nom/:description')
  addtodo(@Body() t:TodoDto) {
    return this.service.addToDo(t)
  }

  @Get('find/:id')
    findbyID(@Param('id') id) {
        return this.service.getTodobyid(id)
    }

    @Get('delete/:id')
    delete(@Param('id')id){
      return this.service.DeleteTodobyid(id)

      }

      @Put('modify/:id')
        modify(@Param('id')id,@Body()t :TodoDtoUpdate){
         return this.service.modify(id,t)
      
        }

}

export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
    }
export class TodoModel{
    id: any;
    name: string;
    description: string;
    createdAt: Date;
    status: TodoStatusEnum;
  
    constructor(
      id: any,
      name: string,
      description: string,
      createdAt: Date,
      status: TodoStatusEnum,
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.createdAt = createdAt;
      this.status = status;
    }
}