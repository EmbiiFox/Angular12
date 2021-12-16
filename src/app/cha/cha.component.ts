import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  public chaMessage='123';
  @ViewChild ('beNairubi') beNairubi:ConComponent|undefined;
  @ViewChild ('beHuyLee') beHuyLee:ConComponent|undefined;
  constructor() { }

  ngOnInit(): void {
  }
  public conGoi(name:string){
    console.log("ai gọi cha đó")
    this.chaMessage='chào con ('+name+')';
  }
  public choTien(){
    this.beNairubi?.choTien(10);
    this.beHuyLee?.choTien(24)
  }
}
