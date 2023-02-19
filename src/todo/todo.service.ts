/*
https://docs.nestjs.com/providers#services
*/
import { Inject, Injectable } from '@nestjs/common';
import { TodoModel, TodoStatusEnum } from './todo.controller';

@Injectable()
export class TodoService { 
    constructor(@Inject('uuid') private uuid){

 }
 private todos = [];
        getTodos() {
        // Todo 2 : Get the todo liste
         return this.todos;
        }
        addToDo(todo){
        let to= new TodoModel(this.uuid(),todo.name,todo.description,new Date(),TodoStatusEnum.waiting);
        this.todos.push(to);}

        getTodobyid(id) {
         return this.todos.find(x => x.id == id);
        }
        
        DeleteTodobyid(id) {
        const index = this.todos.indexOf(this.todos.find(x => x.id == id));
        this.todos.splice(index,1);
        }
        
        
        Modify(id,todo) {
        let obj = this.todos.find(x => x.id == id);
        obj.name= todo.name;
        obj.description=todo.description;
        obj.status=todo.status;
        }
}
