import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  public paramKeys: any;
  public params: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap
      .subscribe((p:any) => {
        this.params = p['params'];
        this.paramKeys = p.keys;
      }
    );
  }

}
