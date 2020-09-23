
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Injectable({
    providedIn: 'root'
})


export class UtilityService {
    constructor(private snackBar: MatSnackBar) {

    }

    openSnackbar(message: string, action: string) {

        this.snackBar.open(message, 'Close', {

            duration: 5000, // in ms
            panelClass: [action],
            horizontalPosition: 'end',
            verticalPosition: 'top',

        });
    }
}
