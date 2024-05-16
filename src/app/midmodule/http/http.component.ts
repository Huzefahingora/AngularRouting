import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription, map } from 'rxjs';
import { Product } from '../../shared/model/products';
import { ProductService } from '../../shared/Services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  allProduct : Product[] = [];
  isFatching : boolean = false;
  reactiveForm: FormGroup;
  valid:boolean = true;
  editMode : boolean;
  currentId ;
  errorMessage : string = null;
  errorSub ;
  constructor(private http : HttpClient, private productService : ProductService) { }

  ngOnInit(): void {
    this.fatchProduct()
  this.errorSub = this.productService.error.subscribe((err) =>{
    console.log(err);

  })
    this.reactiveForm = new FormGroup({
      pname: new FormControl(null, Validators.required),
      pdesc: new FormControl(null, Validators.required),
      pprice: new FormControl(null,Validators.required)
    });

  }

  onFatchProduct(){
    this.fatchProduct();
  }

  onProductCreate(products : {pname : string,pdesc : string, pprice : string}){
    console.log(this.valid);
    if(!this.editMode){
    if(this.reactiveForm.valid){
      this.valid = true;
   this.productService.onCreateProduct(products);
   this.reactiveForm.reset()}
      else{
        this.valid = false;
      }}
      else {
        this.productService.onProductUpdate(this.currentId ,products);
        this.reactiveForm.reset();
      }
      console.log(this.valid);


  }

 private fatchProduct(){

  this.isFatching = true;
  this.productService.onFatchProduct()
    .subscribe((products) => {
      // console.log(products);
      this.allProduct = products;
      // console.log(products);
    },
    (err) =>{
      this.errorMessage = err.message;
      console.log(this.errorMessage);

    })
    setTimeout(()=>{
      this.isFatching = false;
    },1000)

  }

  onDeleteProduct(prodId: string): void {
    this.productService.onDeleteProduct(prodId);
    this.allProduct = this.allProduct.filter(product => product.id !== prodId);
  }

  deleteAll()
  {
    this.productService.onDeleteAllProduct();
  }

  onEditProduct(prodId: any): void {
    this.currentId = prodId;
    console.log(this.currentId);

    // Find the product by its id
    const currentProduct = this.allProduct.find(p => p.id === prodId);

    // Check if the product is found
    if (currentProduct) {
      // Set the form values using patchValue
      this.reactiveForm.patchValue({
        pname: currentProduct.pname,
        pdesc: currentProduct.pdesc,
        pprice: currentProduct.pprice
      });
    } else {
      console.error(`Product with ID ${prodId} not found.`);
    }
    this.editMode = true;

  }

    ngOnDestroy(): void {

      this.errorSub.unsubscribe()

    }



}
