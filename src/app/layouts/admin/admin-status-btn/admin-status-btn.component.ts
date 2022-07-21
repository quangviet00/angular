import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-status-btn',
  templateUrl: './admin-status-btn.component.html',
  styleUrls: ['./admin-status-btn.component.css']
})
export class AdminStatusBtnComponent implements OnInit {
  @Input() status: number;
  @Output() changeStatus: EventEmitter<number>;
  constructor() {
    this.status = 0;
    this.changeStatus = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onChangeStatus(status: number) {
    this.changeStatus.emit(status);
  }
}
