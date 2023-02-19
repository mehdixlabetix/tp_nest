import { Global, Injectable, Module } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import {v4 as uuid} from 'uuid';
const uui= {provide: 'uuid',
useValue:uuid };
@Global()
@Module({
    imports: [],
    providers: [uui],
    exports: [ uui],
  })
@Module({})
export class CommonModule {
  
}
