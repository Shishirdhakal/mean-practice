import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr'

@Injectable()

export class MsgService {
    constructor(public toastr: ToastrService) {

    }
    showSuccess(msg: string) {
        this.toastr.success(msg);
    }

    showInfo(msg: string) {
        this.toastr.info(msg);
    }

    showWarning(msg: string) {
        this.toastr.warning(msg);
    }

    showError(err: any) {
        debugger;
        if(err.error.message){
            this.toastr.error(err.error.message);
        }else{
            this.toastr.error(err);
        }
        /* Using this block as error handler
        pass every possible error from application here
        parse the error data and show appropriate error message */
    }
}