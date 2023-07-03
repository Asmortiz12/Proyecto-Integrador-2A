import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { connectAuthEmulator } from 'firebase/auth';
import { connect } from 'rxjs';
import { connectFirestoreEmulator } from 'firebase/firestore';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthModule,
    PagesModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      const firestore = getFirestore();
      connectFirestoreEmulator(firestore, 'http://localhost',8080)
      return firestore; 
    }),
    provideAuth(() => {
    const auth = getAuth(); 
    connectAuthEmulator(auth, 'http://localhost9099',{ disableWarnings:true});
    return auth;
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
