import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit{
  name: string = "John";
  age: number = 33;
  hobbies: Array<string> = ['Read', 'Watch TV', 'Study'];
  technologies = {
    back: "Go",
    database: "MySQL",
    front: "Angular",
  };

  constructor() {}
  
  ngOnInit(): void {}
}
