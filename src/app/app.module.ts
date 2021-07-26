import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormularioClienteComponent } from './cliente/dialogos/formulariocliente.components';
import { FormsModule } from '@angular/forms';
import { DialogDelteComponent } from './common/delete/dialogdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClienteComponent,
    FormularioClienteComponent,
    DialogDelteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
