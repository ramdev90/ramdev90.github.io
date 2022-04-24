import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.css']
})
export class SubListComponent {}
// export class SubListComponent implements OnInit {

//   data = [
//     {
//       'fname': 'Andrei ',
//       'lname': 'Masharin',
//       'type': 'Owner, Tenant',
//       'phone': '777-444-6556',
//       'unit': '432',
//       'community': 'Los Alisos',
//       'address': '2400 Harbor Boulevard ',
//       'city': 'Costa Mesa',
//       'state': 'CA',
//       'zip': '94454',
//     },
//     {
//       'fname': 'Anje',
//       'lname': 'Keizer',
//       'type': 'N/A',
//       'phone': '713-810-8418',
//       'unit': '343',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Arina',
//       'lname': 'Belomestnykh',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '454',
//       'community': 'Fort Kent',
//       'address': '1918  Crim Lane',
//       'city': 'New Madison',
//       'state': 'OH',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Darius',
//       'lname': 'Cummings',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '123',
//       'community': 'Dennehotso',
//       'address': '3848  Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Francisco',
//       'lname': 'Maia',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '565',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Chinelo',
//       'lname': 'Chyke',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '545',
//       'community': 'Dennehotso',
//       'address': '3848 Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     }, {
//       'fname': 'Andrei ',
//       'lname': 'Masharin',
//       'type': 'Owner, Tenant',
//       'phone': '777-444-6556',
//       'unit': '432',
//       'community': 'Los Alisos',
//       'address': '2400 Harbor Boulevard ',
//       'city': 'Costa Mesa',
//       'state': 'CA',
//       'zip': '94454',
//     },
//     {
//       'fname': 'Anje',
//       'lname': 'Keizer',
//       'type': 'N/A',
//       'phone': '713-810-8418',
//       'unit': '343',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Arina',
//       'lname': 'Belomestnykh',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '454',
//       'community': 'Fort Kent',
//       'address': '1918  Crim Lane',
//       'city': 'New Madison',
//       'state': 'OH',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Darius',
//       'lname': 'Cummings',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '123',
//       'community': 'Dennehotso',
//       'address': '3848  Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Francisco',
//       'lname': 'Maia',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '565',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Chinelo',
//       'lname': 'Chyke',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '545',
//       'community': 'Dennehotso',
//       'address': '3848 Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     }, {
//       'fname': 'Andrei ',
//       'lname': 'Masharin',
//       'type': 'Owner, Tenant',
//       'phone': '777-444-6556',
//       'unit': '432',
//       'community': 'Los Alisos',
//       'address': '2400 Harbor Boulevard ',
//       'city': 'Costa Mesa',
//       'state': 'CA',
//       'zip': '94454',
//     },
//     {
//       'fname': 'Anje',
//       'lname': 'Keizer',
//       'type': 'N/A',
//       'phone': '713-810-8418',
//       'unit': '343',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Arina',
//       'lname': 'Belomestnykh',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '454',
//       'community': 'Fort Kent',
//       'address': '1918  Crim Lane',
//       'city': 'New Madison',
//       'state': 'OH',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Darius',
//       'lname': 'Cummings',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '123',
//       'community': 'Dennehotso',
//       'address': '3848  Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Francisco',
//       'lname': 'Maia',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '565',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Chinelo',
//       'lname': 'Chyke',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '545',
//       'community': 'Dennehotso',
//       'address': '3848 Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     }, {
//       'fname': 'Andrei ',
//       'lname': 'Masharin',
//       'type': 'Owner, Tenant',
//       'phone': '777-444-6556',
//       'unit': '432',
//       'community': 'Los Alisos',
//       'address': '2400 Harbor Boulevard ',
//       'city': 'Costa Mesa',
//       'state': 'CA',
//       'zip': '94454',
//     },
//     {
//       'fname': 'Anje',
//       'lname': 'Keizer',
//       'type': 'N/A',
//       'phone': '713-810-8418',
//       'unit': '343',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Arina',
//       'lname': 'Belomestnykh',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '454',
//       'community': 'Fort Kent',
//       'address': '1918  Crim Lane',
//       'city': 'New Madison',
//       'state': 'OH',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Darius',
//       'lname': 'Cummings',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '123',
//       'community': 'Dennehotso',
//       'address': '3848  Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Francisco',
//       'lname': 'Maia',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '565',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Chinelo',
//       'lname': 'Chyke',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '545',
//       'community': 'Dennehotso',
//       'address': '3848 Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     }, {
//       'fname': 'Andrei ',
//       'lname': 'Masharin',
//       'type': 'Owner, Tenant',
//       'phone': '777-444-6556',
//       'unit': '432',
//       'community': 'Los Alisos',
//       'address': '2400 Harbor Boulevard ',
//       'city': 'Costa Mesa',
//       'state': 'CA',
//       'zip': '94454',
//     },
//     {
//       'fname': 'Anje',
//       'lname': 'Keizer',
//       'type': 'N/A',
//       'phone': '713-810-8418',
//       'unit': '343',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Arina',
//       'lname': 'Belomestnykh',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '454',
//       'community': 'Fort Kent',
//       'address': '1918  Crim Lane',
//       'city': 'New Madison',
//       'state': 'OH',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Darius',
//       'lname': 'Cummings',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '123',
//       'community': 'Dennehotso',
//       'address': '3848  Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Francisco',
//       'lname': 'Maia',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '565',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Chinelo',
//       'lname': 'Chyke',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '545',
//       'community': 'Dennehotso',
//       'address': '3848 Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     }, {
//       'fname': 'Andrei ',
//       'lname': 'Masharin',
//       'type': 'Owner, Tenant',
//       'phone': '777-444-6556',
//       'unit': '432',
//       'community': 'Los Alisos',
//       'address': '2400 Harbor Boulevard ',
//       'city': 'Costa Mesa',
//       'state': 'CA',
//       'zip': '94454',
//     },
//     {
//       'fname': 'Anje',
//       'lname': 'Keizer',
//       'type': 'N/A',
//       'phone': '713-810-8418',
//       'unit': '343',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Arina',
//       'lname': 'Belomestnykh',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '454',
//       'community': 'Fort Kent',
//       'address': '1918  Crim Lane',
//       'city': 'New Madison',
//       'state': 'OH',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Darius',
//       'lname': 'Cummings',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '123',
//       'community': 'Dennehotso',
//       'address': '3848  Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Francisco',
//       'lname': 'Maia',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '565',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Chinelo',
//       'lname': 'Chyke',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '545',
//       'community': 'Dennehotso',
//       'address': '3848 Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     }, {
//       'fname': 'Andrei ',
//       'lname': 'Masharin',
//       'type': 'Owner, Tenant',
//       'phone': '777-444-6556',
//       'unit': '432',
//       'community': 'Los Alisos',
//       'address': '2400 Harbor Boulevard ',
//       'city': 'Costa Mesa',
//       'state': 'CA',
//       'zip': '94454',
//     },
//     {
//       'fname': 'Anje',
//       'lname': 'Keizer',
//       'type': 'N/A',
//       'phone': '713-810-8418',
//       'unit': '343',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Arina',
//       'lname': 'Belomestnykh',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '454',
//       'community': 'Fort Kent',
//       'address': '1918  Crim Lane',
//       'city': 'New Madison',
//       'state': 'OH',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Darius',
//       'lname': 'Cummings',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '123',
//       'community': 'Dennehotso',
//       'address': '3848  Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     },
//     {
//       'fname': 'Francisco',
//       'lname': 'Maia',
//       'type': 'Owner, Tenant',
//       'phone': '937-755-9651',
//       'unit': '565',
//       'community': 'Cameron',
//       'address': '3848 Michael Street',
//       'city': 'Hendley',
//       'state': 'NE',
//       'zip': '45346',
//     },
//     {
//       'fname': 'Chinelo',
//       'lname': 'Chyke',
//       'type': 'N/A',
//       'phone': '937-755-9651',
//       'unit': '545',
//       'community': 'Dennehotso',
//       'address': '3848 Michael Street',
//       'city': 'Costa Mesa',
//       'state': 'NE',
//       'zip': '68946',
//     }
//   ]


//   todoList = [
//     {
//       item_name: "Apple",
//       price: "$5",
//       quantity: 1,
//       brand_details:
//         { name: "Golden Delicious", location: "San Francisco" },
//       isChecked: true
//     },

//     {
//       item_name: "Bannana",
//       price: "$3", quantity: 2,
//       brand_details:
//         { name: "Fuji", location: "San Diego" },
//       isChecked: false
//     },

//     {
//       item_name: "Pears",
//       price: "$7", quantity: 4,
//       brand_details:
//         { name: "Golden Delicious", location: "San Francisco" },
//       isChecked: true
//     },

//     {
//       item_name: "Milk",
//       price: "$4", quantity: 3,
//       brand_details:
//         { name: "Mother Dairy", location: "California" },
//       isChecked: false
//     },

//   ];


//   constructor() { }

//   ngOnInit() {
//     // this.onStringAdd();
//     // this.onArrayObjFromArrayUsingMap();
//     // this.onSingleItemArray();
//     this.addTotal();
//     this.onAddTotol()
//     // this.getKeyValPair();
//     // this.reformatObjects();
//     // this.deleteProp();
//   }

//   ischk: boolean = false;
//   newArray = [];
//   onChangeChk() { 
//     this.ischk = !this.ischk;
//     this.withTotalObj.map((item) => {
//       if(this.ischk === true) {
//         if(item.isChecked) {
//           this.newArray.push(item); 
//         }
//       }      
//       else {
//         this.newArray = this.withTotalObj;
//         this.newArray.push(item);
//       }
//     })
//     this.withTotalObj = this.newArray;
//     console.log(this.withTotalObj);
//   }

//   arr = [];
//   private onStringAdd() {
//     const euros = [29.76, 41.85, 46.5];

//     const average = euros.reduce((total, amount, index, array) => {
//       total += amount;
//       if (index === array.length - 1) {
//         return total / array.length;
//       } else {
//         return total;
//       }
//     });

//     // console.log(average) // 39.37

//     this.todoList.map(({ item_name, quantity, price }) => {
//       this.arr.push(`${item_name} with quantity ${quantity} with price ${price} `);
//     });
//   }

//   obj = [];
//   private onArrayObjFromArrayUsingMap() {
//     this.todoList.map(({ item_name, isChecked }) => {
//       this.obj.push({ item_name });
//     })
//   }

//   onSingleItemArrayProp = []
//   private onSingleItemArray() {
//     this.todoList.map(({ item_name }) => {
//       this.onSingleItemArrayProp.push(item_name);
//     })
//   }

//   withTotalObj = [];
//   private addTotal() {
//     this.todoList.map((item) => {
//       const price = Number(item.price.replace("$", ""))
//       this.withTotalObj.push({ ...item, total: `\$${price * item.quantity}` })
//     })
//   }

//   deleteProp() {
//     this.withTotalObj = this.withTotalObj.map(
//       (item) => {
//         delete item.price,
//           delete item.quantity, delete
//           item.isChecked
//         return item;
//       });
//     //console.log(this.todoList)
//   }

//   b = [];
//   private getKeyValPair() {
//     this.todoList
//       .map((item) => {
//         return Object.entries(item)
//           .map((todoList_entry) => {
//             if (todoList_entry[0] == "brand_details") {
//               return Object.entries(todoList_entry[1]).map(
//                 (brand_details_entry) => {
//                   this.b.push(brand_details_entry);
//                 }
//               )
//             }
//           })
//       })
//     console.log(this.b)
//   }


//   private reformatObjects() {

//     const inventory = [
//       { name: 'asparagus', type: 'vegetables', quantity: 5 },
//       { name: 'bananas', type: 'fruit', quantity: 0 },
//       { name: 'goat', type: 'meat', quantity: 23 },
//       { name: 'cherries', type: 'fruit', quantity: 5 },
//       { name: 'fish', type: 'meat', quantity: 22 }
//     ];

//     const kvArray = [{ key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }];

//     const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }))
//   };

//   onAddTotol() {
//     // this.withTotalObj =
//     let tot = this.withTotalObj.reduce((acc, item) => {
//       return acc + item.quantity
//     }, 0)
//     this.withTotalObj.push({
//       item_name: "Total",
//       price: "",
//       quantity: tot,
//       brand_details:
//         { name: "", location: "" },
//       isChecked: true,
//       isTotal: true
//     })

//   }

// }






















































// private test() {
//   description: "admin@gmail.com"
// imagePath: "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg"
// ingredients: []
// name: "admin@gmail.com"

//   const keys = Object.keys(this.recipeForm.value);
//   return keys.reduce((acc, key) => {
//     console.log(acc);
//     return acc
//   })
// }
