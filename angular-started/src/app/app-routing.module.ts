import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaEnderecoComponent } from './components/busca-endereco/busca-endereco.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailComponent},
    {path: 'endereco', component:BuscaEnderecoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

