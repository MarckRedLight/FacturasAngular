import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { insercioncliente } from 'src/app/Models/insercioncliente';
@Component({ templateUrl: 'formulariocliente.component.html'})
export class FormularioClienteComponent{
    public nit: number = 0;
    public nombre: string = "";
    public apellido: string = "";



    constructor(
        public dialogRef: MatDialogRef<FormularioClienteComponent>,
        public apiCliente: ApiclienteService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public cliente: insercioncliente
    ){
        if (this.cliente !== null){
            this.nit = cliente.nit;
            this.nombre = cliente.nombre;
            this.apellido = cliente.apellido;
        }
    }

    close(){ this.dialogRef.close();}

    addCliente(){
        const cliente: insercioncliente = {nit: this.nit, nombre: this.nombre, apellido: this.apellido};
        this.apiCliente.add(cliente).subscribe(response => { 
            if (response.exito == 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente Insertado con Exito', '',{ duration: 2000});
            }
        });
    }

    editCliente(){
        const cliente: insercioncliente = {nit: this.nit, nombre: this.nombre, apellido: this.apellido};
        this.apiCliente.edit(cliente).subscribe(response => { 
            if (response.exito == 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente Editado con Exito', '',{ duration: 2000});
            }
        });
    }
}