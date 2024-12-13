const storeProducts = [
{

id: 1,
ImgPath:"../New folder/chair.png",
description:"loveseat sofa",
price:"$199.99"
},

{

    id: 2,
    ImgPath:"../New folder/Image Placeholder (2).png",
    description:"table lamp",
    price:"$24.99"
},
{

        id: 3,
        ImgPath:"",
        description:"beige table lamp",
        price:"$24.99"
},
{

            id:4,
            ImgPath:"",
            description:"bamboo basket",
            price:"$24.99"
},
        



]


let containerElem = document.getElementById("new");

//mapping through an array
storeProducts.map((products) => {
    containerElem.innerHTML += `
    <div class="">
                <img src=${products.imgPath} alt="" class="card-img">
                 <h4 class="card-description">${products-description}</h4>
                 <p class="card-price"> ${products.price}</p>


        </div>


            
    `
})










const Names = ["bob","billy","baldy","bayely","barbra",
    "andrew","ana","anita","angel","angelina",

]


const ulElem = document.getElementById("student-list");
Names.map((Name)=> {
    ulElem.innerHTML += `<li> ${Name} </li>`
}

)

Names.push(
    "great","buddy"
)


Names.pop()

Names.unshift()


Names.shift()




const football = [ "PSG","manchester city","manchester"]