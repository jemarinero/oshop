import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(categoryServies: CategoryService, private productService: ProductService) {
    this.categories$ = categoryServies.getCategories();
   }

   save(product){
     this.productService.create(product);
   }

  ngOnInit() {
  }

}
