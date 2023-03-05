import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {

  topItemName = "Saroash's TODOs";
  @ViewChild('addTodoInput') addTodoInput:any; 
  
  todoItems:{name:string}[] = [];

  delete = (index: number) => {

    this.todoItems.splice(index, 1);
  };

  add = () => {
    this.todoItems.push({
      name: this.addTodoInput.nativeElement.value,
    });
    this.addTodoInput.nativeElement.value = '';
  }
}
