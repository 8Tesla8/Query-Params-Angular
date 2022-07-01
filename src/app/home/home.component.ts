import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public paramName:string;
  public paramValue:string;

  public page:string;

  public queryParamObj:any = new Object();


  constructor(public router:Router) {}

  addParam():void{
    this.queryParamObj[this.paramName] = this.paramValue;
  }


  // type QueryParamsHandling = 'merge' | 'preserve' | '';
  navigateReplace():void{
    this.router.navigate([`/${this.page}`], { queryParams: this.queryParamObj });

    // the same
    // this.router.navigate([`/${this.page}`], { queryParams: this.queryParamObj, queryParamsHandling: '' });

    this.queryParamObj = new Object();
  }
  

  navigateMerge(){
    // "merge" : Merge new parameters with current parameters.
    this.router.navigate([`/${this.page}`], { queryParams: this.queryParamObj, queryParamsHandling: 'merge' });

    this.queryParamObj = new Object();
  }

  navigatePreserve(){
    // "preserve" : Preserve current parameters.
    this.router.navigate([`/${this.page}`], { queryParams: this.queryParamObj, queryParamsHandling: 'preserve' });

    this.queryParamObj = new Object();
  }

}
