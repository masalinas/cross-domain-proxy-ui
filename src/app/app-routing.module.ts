import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LauncherComponent } from './launcher/launcher.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Portal Main'
    }
  },
  {
    path: 'launcher',
    component: LauncherComponent,
    data: {
      title: 'Portal Launcher'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
