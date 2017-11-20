import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product, Comment, ProductService} from '../shared/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    comments: Comment[];

    //默认评价星级
    newRating: number = 5;
    //默认评价内容
    newComment: string = '';

    isCommentHidden:boolean = true;

  constructor(
      private routeInfo: ActivatedRoute,
      private productService: ProductService
      ) { }

  ngOnInit() {
      let productId: number = this.routeInfo.snapshot.params['id'];
      this.productService.getProduct(productId)
        .subscribe(
          product => this.product = product
        );
      this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    // reduce(匿名回调函数，初始值)
    //comment为需要循环的数据，sum初始值为函数的第二值即初始值
    //结果:求和
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
