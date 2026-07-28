import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Admin } from '../../admin.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {
  @Input() admin: Admin;
  @Input() index: number;
  @Output() emittUserForEdit = new EventEmitter<Admin>();
  ngOnInit() {
  }
  openAdminModal(user: Admin){
    this.emittUserForEdit.emit(user);
  }
}
