import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class LoadingDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

    openDialog(component:any){
      this.dialog.open(component,{
        width: '100vw',
        height: '100%',
        panelClass: 'custom-modal'
      })
    }

    closeDialog(){
      this.dialog.closeAll()
    }
}
