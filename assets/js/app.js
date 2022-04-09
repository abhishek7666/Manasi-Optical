let cl = console.log;

let goggal = document.getElementById("lence");
let search = document.getElementById("search");


let lenceArry = [

    {
        img : "./assets/images/round-gogga (1).jpg",
        name : "round-goggal",
        prize : "400$",
        glass : "polycarbon"
    },
    {
        img : "./assets/images/round-gogga (2).jpg",
        name : "round-goggal",
        prize : "250$",
        glass : "polycarbon"
    },
    {
        img : "./assets/images/round-gogga (3).jpg",
        name : "round-goggal",
        prize : "100$",
        glass : "polycarbon"
    },
    {
        img : "./assets/images/round-gogga (4).jpg",
        name : "round-goggal",
        prize : "450$",
        glass : "polycarbon"
    },
    {
        img : "./assets/images/round-gogga (5).jpg",
        name : "round-goggal",
        prize : "300$",
        glass : "polycarbon"
    },
    {
        img : "./assets/images/round-gogga (6).jpg",
        name : "round",
        prize : "150$",
        glass : "polycarbon"
    },
    {
        img : "./assets/images/round-gogga (7).jpg",
        name : "round-goggal",
        prize : "170$",
        glass : "polycarbon"
    },
    {
        img : "./assets/images/stylish.jpg",
        name : "red lence",
        prize : "500$",
        glass : "sunglass"
    },
    {
        img : "./assets/images/retro-sun-glass (1).jpg",
        name : "Gucci Sunglasscs",
        prize : "1000$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (2).jpg",
        name : "Gucci Sunglasscs",
        prize : "1000$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (3).jpg",
        name : "Gucci Sunglasscs",
        prize : "900$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (4).jpg",
        name : "Gucci Sunglasscs",
        prize : "1900$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (5).jpg",
        name : "Gucci Sunglasscs",
        prize : "15000$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (6).jpg",
        name : "Gucci Sunglasscs",
        prize : "2000$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (7).jpg",
        name : "Gucci Sunglasscs",
        prize : "10000$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (8).jpg",
        name : "Gucci Sunglasscs",
        prize : "45000$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (9).jpg",
        name : "Gucci Sunglasscs",
        prize : "7800$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (10).jpg",
        name : "Gucci Sunglasscs",
        prize : "3000$",
        glass : ""
    },
    {
        img : "./assets/images/retro-sun-glass (11).jpg",
        name : "Gucci Sunglasscs",
        prize : "28000$",
        glass : ""
    }
   
   
];

function printlences(arr){
    arr.forEach(ele =>{
        lence.innerHTML += `
        <div class="col-md-3 mb-10">
            <div class="lence-info">
                <img src="${ele.img}">
                <h4>${ele.name}</h4>
                <h2>${ele.prize}</h2>
                
                <button class="btn1">Add to Cart</button>
                <button class="btn2">Buy Now</button>
            </div>    
        </div>`;
    })
}

printlences(lenceArry);


search.addEventListener('keyup', forgoggals);

function forgoggals(ele){
    
        goggal.innerHTML = "";
        ele.target.value.toLowerCase(); //red lence
        let newGoggal = lenceArry.filter(e =>{
            // let a = ele.target.value;
            return e.name.toLowerCase().includes(ele.target.value);
        })
        printlences(newGoggal);
    
}







