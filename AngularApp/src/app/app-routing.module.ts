import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'view', component: ViewEmployeeComponent},
  {path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeComponent,ViewEmployeeComponent,LoginComponent,UpdateComponent]
