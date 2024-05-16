import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../model/products";
import { Subject, catchError, map, throwError } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ProductService {
  error = new Subject<any>();
  constructor(private http: HttpClient) { }
  allProduct: Product[] = [];
  apiUrl = 'https://angularlearning-b4a18-default-rtdb.firebaseio.com/products.json'

  onCreateProduct(products: { pname: string, pdesc: string, pprice: string }) {
    console.log(products);
    const headers = new HttpHeaders({ 'myHeader': 'Huzefa' });
    this.http.post(this.apiUrl, products, { headers: headers }).subscribe(
      (res) => {
        console.log(res);

      },
      (err) =>{
        this.error.next(err.message)
      }
    )
  }

  onFatchProduct() {
 const prams = new HttpParams().set('print','pretty'); 
   return this.http.get<{ [key: string]: Product }>(this.apiUrl)
      .pipe(map((res) => {
        const products = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            products.push({ ...res[key], id: key })
          }
        }
        return products;
      }),catchError((err) => {
        return throwError(err)
      }))


  }


  onDeleteProduct(prodId: any) {
    this.http.delete('https://angularlearning-b4a18-default-rtdb.firebaseio.com/products/' + prodId + '.json').subscribe();
  }

  onDeleteAllProduct() {
    this.http.delete('https://angularlearning-b4a18-default-rtdb.firebaseio.com/products.json').subscribe()
  }


  onProductUpdate(prodId : any,value : Product) {
    console.log(prodId);
    
    this.http.put('https://angularlearning-b4a18-default-rtdb.firebaseio.com/products/' + prodId + '.json', value).subscribe((res) => {
      console.log(res);

    })
  }
}