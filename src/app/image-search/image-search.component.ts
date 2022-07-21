import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ImageurlService } from '../imageurl.service';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  constructor(
    private _http: HttpClient, private _imageservice: ImageurlService ) { }

  imageListArray :any
  imageListArrayData = new Array()
  textValue1: string = '';
  textValue = ''
  userImageURL: any

  @HostListener("window:scroll", ["$event"])
  SearchSomethin() {

    var tempVal = $("#textValue1").val( )
    console.log(tempVal, "e");
    
    this._imageservice.GetImageListByname(tempVal,``).subscribe((resp: any) => {
      // this.imageListArray = resp.hits
      this.imageListArray = resp
      console.log(this.imageListArray, "imageListArrayData");

    } ),(err: any) => console.log('HTTP Error', err)

    // console.log(tempVal,"tempVal?.valueOf.length");
   if(tempVal == null   ) {

    this.imageListArray =  "jh"
    // console.log(tempVal,"tempVal?.valueOf.length");
    
   }
  }

  isLoading = false;
  pageNumber = 1;
  scrollHandler(pageno:any){
    // console.log(window,"window");
    if (window.scrollY) {
          console.log("bottom of the page");
          this.pageNumber += 1;
          this.isLoading = true;
          console.log(this.pageNumber,"bottom of the page");
    }
    // console.log(pageno,"eee");
    // var tempVal = $("#textValue1").val( )
    // this._imageservice.GetImageListByname(tempVal,pageno).subscribe((resp: any) => {
    //   // this.imageListArray = resp.hits
    //   this.imageListArray = resp.hits
    //   console.log(this.imageListArray, "imageListArrayData");
    // })
  }

  ngOnInit(): void {
    this._imageservice.GetImageList().subscribe((resp: any) => {
      this.imageListArray = resp
      console.log(this.imageListArray, "imageListArray");

    } ),(err: any) => console.log('HTTP Error', err)

  }

}
