import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';

const routes: Routes = [
  {path: "employee",component:EmployeeComponent},
  {path: "rooms",component:RoomsComponent},
  {path: "container",component:ContainerComponent},
  {path: "notfound",component:NotfoundComponent},
  {path: "rooms/:roomid",component:RoomsBookingComponent},
  {path: "",redirectTo:"/rooms",pathMatch:"full"},
  {path: '""', redirectTo:'/rooms'},
  {path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  {path: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 