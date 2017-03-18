import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class CategoriesPipe implements PipeTransform {


     transform(alladds: any, term?: any): any {

   

   if(term=== undefined) return alladds;
   return alladds.filter(function(adv){
       return adv.ad_cat.toLowerCase().includes(term.toLowerCase());
   })
 }

}






