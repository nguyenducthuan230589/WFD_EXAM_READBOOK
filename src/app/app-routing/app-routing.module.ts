import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from '../components/list/list.component';
import {ReadListComponent} from '../components/read-list/read-list.component';
import {HasReadListComponent} from '../components/has-read-list/has-read-list.component';
import {CreateComponent} from '../components/create/create.component';
import {DetailsComponent} from '../components/details/details.component';


const routes: Routes = [
  {path: 'books', component: ListComponent},
  {path: 'books/read', component: ReadListComponent},
  {path: 'books/hasread', component: HasReadListComponent},
  {path: 'books/create', component: CreateComponent},
  {path: 'books/:id', component: DetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
