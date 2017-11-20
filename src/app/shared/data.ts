import { InMemoryDbService} from 'angular-in-memory-web-api';

export class ProductsData {
  createDb() {
  const products = [
      new Product(1,'第一个商品', 1.99, 3.5, '这是第一个商品', ['lmh', 'zf', 'gsm']),
      new Product(2,'第二个商品', 2.99, 2.5, '这是第二个商品', ['lmh', 'zf', 'gsm']),
      new Product(3,'第三个商品', 3.99, 4.5, '这是第三个商品', ['lmh', 'zf', 'gsm']),
      new Product(4,'第四个商品', 4.99, 1.5, '这是第四个商品', ['lmh', 'zf', 'gsm']),
      new Product(5,'第五个商品', 5.99, 3.5, '这是第五个商品', ['lmh', 'zf', 'gsm']),
      new Product(6,'第六个商品', 6.99, 2.5, '这是第六个商品', ['lmh', 'zf', 'gsm'])
    ];
    return {products};
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
