
// //1

// // let  user = {

// //     firstname:'giorgi',   
// //     lastname: 'smith',
// //     age: 25,
// //     studentstatus: 'active'
// // };

// // console.log(user.studentstatus);
// // console.log(user[`studentstatus`]);

// //2

// // let numbers = [ 500, 100, 22, 0, 234, 2, 5, 6, 10, 12, 18, 1 ];

// // // for (let i = 0; i < numbers.length; i++) {
// // //     console.log(numbers[i]);
// // // };
// // for(let x of numbers) {
// //     console.log(x)
// // }


// //3

// let numbers2 = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89]

// // for (let i = 0; i < numbers2.length; i++) {
// //     if(numbers2[i] > 5)
// //     console.log(numbers2[i]);
// // };
// // for( let x of numbers2){
// //     if (x > 5){
// //         console.log(x);
// //     }
// // }
// //4

// // let user = {
// // 	name: 'giorgi',
// // 	age:  20,
// // 	studentstatus: 'active'
// // };

// // if( user.age > 18 && user.studentstatus === 'active'){
// //     console.log('hello')
// // } else if(user.name === 'levani'){
// //     console.log('hello giorgi')
// // }else if(user.studentstatus === 'active' || user.age < 25){
// //     console.log('hello world');
// // }else {
// //     console.log('error');
// // }

// 5
// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

// for( let y = 0; y < array.length; y++ ){
//     if( typeof array[y] === 'string')
//     console.log(array[y])
// }
// for( let a of array ){
//     if(typeof a === 'string'){
//         console.log(a);
//     }
// }

// //6

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]


// for ( let i of array ) {
//     for ( let a of i ) {
//         if( a > 0 )
//         console.log(a);
//     }
// }

//7

// let array = [ 32, 10, 'hello', null,'hello2', 50 ]

// for (let x of array) {
//     if(typeof x == 'number' && x % 5 == 0){
//         console.log(x);
//     }
// }