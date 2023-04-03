import { ErrorHandler } from "@angular/core";


export class GlobalErroHandler implements ErrorHandler{
    handleError(error: any): void {
       console.log(error);
    }


}