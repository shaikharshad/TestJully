import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageurlService {

  constructor( private http :HttpClient   ) { 
  
}

GetImageList() {
    const url = `${environment.url}`;
    return this.http.get(url);
  }
  GetImageListByname(tempVal:any,pageno:any) {
    const url = `${environment.getUrl + environment.key  + tempVal + environment.imagtype + environment.Page + pageno   }` ;
    return this.http.get(url);
  }
}
