import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

     transform(value: any, [catg]): any {
        return value.filter((item) => item.ad_cat === catg);
    }
}




