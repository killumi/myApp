import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import {FormsModule, MinLengthValidator} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        RegistrationComponent,
        SearchComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        FormsModule,
        MinLengthValidator,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}
