import { Pipe, PipeTransform } from '@angular/core';
import { HomeComponent } from './home/home.component'

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

    transform(categories: Array<any>, selectedCat: string): Array<any> {
        return categories.filter(ad => ad.ad_cat === selectedCat);
    }
}