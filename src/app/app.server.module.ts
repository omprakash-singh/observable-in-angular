import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MatrialModule } from './matrial/matrial.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatrialModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
