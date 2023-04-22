import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';
  public searchedFoodList:any=[];
  public detailsFood:any=[];
  public foodList=[
    {'food_id':1001,'food':'chicken Biriyani','price':100,'images':'chicken.jpg'},
    {'food_id':1002,'food':'Mutton Biriyani','price':200,'images':'chicken.jpg'},
    {'food_id':1003,'food':'Alu Biriyani','price':60,'images':'chicken.jpg'},
    {'food_id':1004,'food':'Chicken Lollypop','price':90,'images':'chicken.jpg'},
    {'food_id':1005,'food':'Fried Rice','price':90,'images':'chicken.jpg'},
    {'food_id':1006,'food':'Egg Roll','price':35,'images':'chicken.jpg'},
    {'food_id':1007,'food':'Chicken Egg Roll','price':50,'images':'chicken.jpg'},
  ];
  search(s:any){
  // console.log(s.value);
  if(s.value.length>=3){
    console.log(s.value);
    let data=s.value;
    let searchFood=this.foodList.filter((item:any)=>{
      return item.food.toLowerCase().includes(data.toLowerCase());
    });
    console.log(searchFood);
    this.searchedFoodList=searchFood;
  }
 }
 select(f:any){
  console.log(f);
  let detailsItem=f;
  this.detailsFood=detailsItem;
 }
  }

