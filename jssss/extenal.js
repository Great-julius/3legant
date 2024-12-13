// let box = 100;
// let firstname = "great";

// const year = 2024;
// let lastname = "julius";

// lastname = "egejuru"

// let fullname = "firstname" + "lastname"

// console.log(fullname)

// let x = "16" + "volvo"

// console.log(x)

// typeof (x)
// console.log(typeof (x))


// let y = ("benz" + 50 + 100)

// alert(y)


// //strings

// let message = 'he said,"jesus wept"'

// let fullName1 = `${firstname} ${lastname}`

// console.log(fullName1)

// let myname = "great chukwuebuka"
// let corse = "webdev"
// let facility = "ict confrence"




// let studies = `${myname} studies ${corse} at ${facility}`

// console.log(studies)

// // const myuser={ myname:"great",
// //     eye:"blue",
// //     yearofbirth:2007, 
// //     corseofstudy:"web dev",
// //     facility: "ict confrence",
// //  }
// // let age = 2024 -"yearofbirth"

// // console.log (age)




// let state = "imo state"

// console.log(state)


// console.log()

// const person = {
//     firstname: "great",
//     lastname: "julius",
//     id: 5566,
//     fullname: function () {
//         return this.firstname + " " + this.lastname
//     }
// };




// console.log(person.fullname())

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const names = ["great", "julius", "williams", "chukwuebuka", "falz"]




// const storeProducts = [
//     {
    
//     id: 1,
//     ImgPath:"../New folder/chair.png",
//     description:"loveseat sofa",
//     price:"$199.99"
//     },
    
//     {
    
//         id: 2,
//         ImgPath:"../New folder/Image Placeholder (2).png",
//         description:"table lamp",
//         price:"$24.99"
//     },
//     {
    
//             id: 3,
//             ImgPath:"",
//             description:"beige table lamp",
//             price:"$24.99"
//     },
//     {
    
//                 id:4,
//                 ImgPath:"",
//                 description:"bamboo basket",
//                 price:"$24.99"
//     },
            
    
    
    
//     ]
    
    
//     let containerElem = document.getElementById("new");
    
//     //mapping through an array
//     storeProducts.map((products) => {
//         containerElem.innerHTML += `
//         <div class="">
//                     <img src=${products.imgPath} alt="" class="card-img">
//                      <h4 class="card-description">${products-description}</h4>
//                      <p class="card-price"> ${products.price}</p>
    
    
//             </div>
    
    
                
//         `
//     })
    
    
    
    
    
    
    
    
    
    
//     const Names = ["bob","billy","baldy","bayely","barbra",
//         "andrew","ana","anita","angel","angelina",
    
//     ]
    
    
//     const ulElem = document.getElementById("student-list");
//     Names.map((Name)=> {
//         ulElem.innerHTML += `<li> ${Name} </li>`
//     }
    
//     )
    
    
    
    
    const sliderElem = document.querySelector(".slider");
    
   const cardWidth = 310;

    let currentPosition = 0;
     function sliderLeft() {         currentPosition += cardWidth; if(currentPosition > 0 ) {     currentPosition = 0; }
updateSliderPosition()
console.log("left");     }

 function sliderRight() {
     const maxPosition = sliderElem.scrollWidth - sliderElem.clientWidth;
     currentPosition -= cardWidth;
     if(currentPosition < -maxPosition) {
         currentPosition = -maxPosition;
     }
     updateSliderPosition()
     console.log("right");
 }

function  updateSliderPosition() {
       sliderElem.style.transform = `translate(${currentPosition}px)`;    };




   const CountDownBox = document.querySelector("countdown");
   const CountDownDays = document.getElementById("days");
   const CountDownHours = document.getElementById("hours");
   const CountDownMinutes = document.getElementById("minutes");
   const CountDownSeconds = document.getElementById("seconds");

   const endDate = new Date("2025-01-31T00:00:00Z").getTime();


   function updateCountdown (){
const now = new Date().getTime();
const timeLeft = endDate - now;



const days = Math.floor(timeLeft / (1000 * 60 * 60 *24 ));


const hours = Math.floor(timeLeft % (1000 * 60 * 60 *24 ) / (1000 * 60 * 60));


const minutes = Math.floor(timeLeft % (1000 * 60 * 60 ) / (1000 * 60));
console.log(minutes)

const seconds = Math.floor(timeLeft % (1000 * 60 ) / (1000));

CountDownDays.innerHTML = `${days}`;
CountDownHours.innerHTML = `${hours.toString().padStart(2, "0")}` ;
CountDownMinutes.innerHTML = `${minutes.toString().padStart(2, "0")}`;
CountDownSeconds.innerHTML = `${seconds.toString().padStart(2, "0")}`;

if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    CountDownBox.innerHTML = "countdown has ended!";
}


   };

   const countdownInterval = setInterval(updateCountdown, 1000);

   updateCountdown();





let reviewContainer = document.getElementById("review-container")

   const reviews = [
    {
        id:1,
        reviewHead:"victur smith",
        likes:4,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },
    {
        id:2,
        reviewHead:"victur smith",
        likes:2,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },
    {
        id:3,
        reviewHead:"victur smith",
        likes:9,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },
    {
        id:4,
        reviewHead:"victur smith",
        likes:3,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },
    {
        id:5,
        reviewHead:"victur smith",
        likes:5,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },
    {
        id:6,
        reviewHead:"victur smith",
        likes:8,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },
    
    {
        id:7,
        reviewHead:"victur smith",
        likes:3,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },
    
    {
        id:8,
        reviewHead:"victur smith",
        likes:6,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v155333",
        text:"bicycles rightstumeric",
    },

]



function displayLikes(noOfLikes) {
    let stars ='';
    for (let n = 0; n < noOfLikes; n++) {
        stars += '&#9733;';
    }
    return stars; 
}


reviews.map((item) => {
    const stars = displayLikes(item.likes);

reviewContainer.innerHTML += `
<div class="review">
        <div>
            <img src="${item.img}}" alt="">

        </div>
        <div>
            <h5 class"review-head">${item.reviewHead}}</h5>
            <p class"review-text">${item.text}}</p>
            <span class="text-2x1 font-bold">${stars}}</span>

        </div>
        <div class="likes-reply-container">
            <span>likes</span>
            <span>reply</span>
        </div>
    </div>
</div>
`
})