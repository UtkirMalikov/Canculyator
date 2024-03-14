// console.log(true + true + true == 1);


// let arr = [ 1, 1 , 2 , 3, 2 , 7, 4 , 5 , 6, 3 , 7]

// let arr1 = Array.from( new Set(arr))
// let a = arr.filter(a , b)
// console.log(arr1);


// const arr = [ 1, 2, 3, 4, ]

// const result = arr.reduce( r => {
//     return r
// })

// console.log(result);

//     const arr = [ 1, 2, 3, 4, ]
// const user = {age: 22 , name: "O'tkirbek" , surname: "SJ"}

// const value = Array.apply(arr)
// console.log(value);
// const user = [1, 2, 3, 4, 5, ];
// const value = Object.apply(user)
// console.log(value);


let header = document.querySelector('.header');
let button = document.querySelectorAll('button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {

        if (this.innerHTML == " = " ) {
            header.innerHTML = eval(header.innerHTML)
        }
        else if(this.innerHTML == " clear ") {
            header.innerHTML = ""
        }
        else {
            header.innerHTML += this.innerHTML
        }
    })
}