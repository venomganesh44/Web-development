var navig = document.getElementById("nav");
var mainbody = document.getElementsByClassName("main");
var btn = document.getElementById("btnclick");
var mainid = document.getElementById("main");
var isDrawerOpen = true;
var cbox = document.getElementById("checkbox_nav");
//btn.addEventListener("click", () => {
// if (navig.style.width == "10%") {
//     //document.body.style.background="yellow";
//navig.style.color="red";
//     mainid.style.width = "70%";
//     navig.style.width = "30%";
//     //console.log("js file running");
// }
// else if (navig.style.width = "30%") {
//     mainid.style.width = "90%";
//     navig.style.width = "10%";
// }
// else {
//     console.log("nothing changed");
// }
//console.log(isDrawerOpen)
// var width = ""
//  if (isDrawerOpen)
//    {
//    width = "20%";
// } else {
//   width = "0%";
// }
// navig.style.width = width;
// // mainid.style.width = ;
// isDrawerOpen = !isDrawerOpen;

//});

cbox.addEventListener("click",()=>
{
//   var width1=""
//     if(isDrawerOpen)
//     {
//       width1="20%";
//     }
//     else
//     {
//       width1="0%";
//     }
//   navig.style.width=width1;
//   isDrawerOpen = !isDrawerOpen;
var applywidth_checkbox=navig.style.width=="0%" ? "50%" : "0%";
    navig.style.width=applywidth_checkbox;
    console.log(applywidth_checkbox);
});

// var fn3 = (function() {
//     var first = true;
//     return function() 
//     {
//       //first ? fn1() : fn2();
//       if(first)
//       {
//         console.log("true");
//         fn1();
//       }
//       else
//       {
//         console.log("false");
//         fn2();
//       }
//       first = !first;
//     }
//   })();

//   function fn1() {
//     console.log(1);
//   };
//   function fn2() {
//     console.log(2);
//   };

btn.addEventListener("click", () => {
    // function c1()
    // {
    //     navig.style.color="red";
    // }
    // function c2()
    // {
    //     navig.style.color="green";
    // }
    var color = navig.style.color == "green" ? "red" : "green"; //ternary operator
    navig.style.color = color;
    var applywidth=navig.style.width=="0%" ? "50%" : "0%";
    navig.style.width=applywidth;
    // if(navig.style.color=="green")
    // {
    //     navig.style.color= "blue";
    // }
    // else
    // {
    //     navig.style.color="green"
    // }
    
    // var a=10;
    // var b=10;
    // console.log(a+b);
    // var c=function sum(a,b)
    // {
    //     return (a*b);
        
    // };
    // console.log(sum(10,10));
    
});
const emp_details = [{ "name": "delhi", "height": "160cm" },
{ "name": "kovsi", "height": "50cm" },
    null
];
// for (i = 0; i<emp_details.length ; i++)
//     {
//     console.log(emp_details ? emp_details[i].name : "no data");
// }
console.log(emp_details[1].name,emp_details[1].height);