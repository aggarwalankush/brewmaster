import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ChartDirective } from '../directives';
import { HttpService } from '../providers';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const config = {
  apiKey: 'AIzaSyAj7eQ33XshszvUweCGQZ8r4GNkEBn3S90',
  authDomain: 'brewfire-1ba0d.firebaseapp.com',
  databaseURL: 'https://brewfire-1ba0d.firebaseio.com',
  projectId: 'brewfire-1ba0d',
  storageBucket: 'brewfire-1ba0d.appspot.com',
  messagingSenderId: '300400788811'
};

@NgModule({
  declarations: [
    AppComponent,
    ChartDirective,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {
}
