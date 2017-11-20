import {EventEmitter, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ProductService {
    private comments: Comment[] = [
        new Comment(1, 1, '2018-9-15 9:9:9', 'lmh', 3, 'good'),
        new Comment(2, 1, '2018-9-16 9:9:9', 'zf', 3, 'very good'),
        new Comment(3, 1, '2018-9-17 9:9:9', 'lcy', 3, 'lcy'),
        new Comment(4, 2, '2018-9-18 9:9:9', 'gsm', 3, 'bad'),
    ];

    searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();
  constructor(private http: Http) { }

  getAllCategories(): string[] {
    return ['lmh', 'zf', 'gsm'];
  }

  getProducts(): Observable<Product[]> {
      return this.http.get('api/products').map(res => res.json());
  }

  getProduct(id:number): Observable<Product> {
      return this.http.get('api/products/'+id).map(res => res.json());
      // return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
      // return this.http.get('api/product'+id+'/comments').map(res => res.json());
      return this.comments.filter((comment: Comment) =>comment.productId == id )
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get('/api/products', {search: this.encodeParams(params)}).map(res => res.json());
  }

  private encodeParams(params: ProductSearchParams) {
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum:URLSearchParams, key:string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
  }

}

export class Product {
    constructor (
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
        ) {}
}

export class Comment {
    constructor (
        public id: number,
        public productId: number,
        public timestamp: string,
        public user: string,
        public rating: number,
        public content: string
    ) {}
}

export class ProductSearchParams {
  constructor (
    public title: string,
    public price: number,
    public category: string
  ){}
}
