import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as AdminActions from '../store/admin.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  id: number;
  editMode = false;
  adminForm: FormGroup;
  private storeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    //   this.editMode = params['id'] != null;
    //   this.initAdminForm();
    // });
  }
  openAdminModal(user){
    this.modalService.open("editAdminModal", {
      centered: true,
      backdrop: 'static'
     });
     this.initAdminForm();
  }
  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(
        new AdminActions.UpdateAdmin({
          index: this.id,
          newAdmin: this.adminForm.value
        })
      );
    } else {
      this.store.dispatch(new AdminActions.AddAdmin(this.adminForm.value));
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  private initAdminForm() {
    let adminName = '';
    let adminPassword = '';
    if (this.editMode) {
      this.storeSub = this.store
        .select('admins')
        .pipe(
          map(adminState => {
            return adminState.admins.find((recipe, index) => {
              return index === this.id;
            });
          })
        )
        .subscribe(admin => {
          adminName = admin.name;
          adminPassword = admin.password;
        });
    }
    this.adminForm = new FormGroup({
      name: new FormControl(adminName, Validators.required),
      password: new FormControl(adminPassword, Validators.required)
    });
  }
}
