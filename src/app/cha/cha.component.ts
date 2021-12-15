import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  public chaMessage='123';
  constructor() { }

  ngOnInit(): void {
  }
  public conGoi(name:string){
    console.log("ai gọi cha đó")
    this.chaMessage='chào con ('+name+')';
  }

}
