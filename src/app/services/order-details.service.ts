import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //fooddetails
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwitch",
      foodDetails:"Pan-fried masala paneer",
      foodPrice:200,
      foodImg:"https://i.postimg.cc/Fz94LP0n/paneer-sandwich.jpg"
    },
    {
      id:2,
      foodName:"Viggie Supreme",
      foodDetails:"Onion, Capsicum, Mushroom, Red Paprika, Black Olives, Sweet Corn Crust",
      foodPrice:369,
      foodImg:"https://i.postimg.cc/K8q8qXXS/Viggie-Supreme.jpg"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"paneer, onion, corn, walnuts, cabbage, red peppers",
      foodPrice:160,
      foodImg:"https://i.postimg.cc/vHJwW93w/Paneer-Burger.jpgn"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"made with whole wheat flour and mixed veggies",
      foodPrice:149,
      foodImg:"https://i.postimg.cc/7ZDKyfgD/Veg-Masala-Roll-In-Naan.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"mouth-watering chocolate and walnut brownies ",
      foodPrice:105,
      foodImg:"https://i.postimg.cc/pXT3cV9V/Indulgence-Brownie.webp"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"oreo,Ice cream",
      foodPrice:200,
      foodImg:"https://i.postimg.cc/Hx0jN4hM/Oreo-Cheesecake-Ice-Cream.jpg"
    }

  ]
}
