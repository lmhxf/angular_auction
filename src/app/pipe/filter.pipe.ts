/**
 * Created by zhoufei on 2017/11/20.
 */
import { Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  //第一个参数list，传入需要过滤的数据列表
  //第二个参数: 传入过滤字段，根据哪个值去过滤
  transform(list: any[], filterField:string, keyword: string): any {
    if(!filterField || !keyword) {
      return list;
    }
    return list.filter(item => {
      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
  }
}
