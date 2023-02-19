import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
    imports: [CommonModule ],
    controllers: [TodoController],
    providers:[TodoService]
})
export class TodoModule {}
