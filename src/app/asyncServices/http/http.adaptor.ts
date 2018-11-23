import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
const dmz = Object.create(null);
export class HttpAdapter {
  static baseAdapter(
    res: HttpResponse<any> | HttpErrorResponse,
    adapterFn?: Function
  ): any {
    if (res instanceof HttpResponse) {
      if (res.status === 200) {
        try {
          return adapterFn ? adapterFn.call(dmz, res) : res;
        } catch (e) {
          return res;
        }
      }
    }
  }
}
