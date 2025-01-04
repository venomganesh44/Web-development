var navig = document.getElementById("nav");
var mainbody = document.getElementsByClassName("main");
var btn = document.getElementById("btnclick");
var mainid = document.getElementById("main");
var isDrawerOpen = true;
var cbox=document.getElementById("checkbox_nav");
btn.addEventListener("click", () => {
    // if (navig.style.width == "10%") {
    //     //document.body.style.background="yellow";
         navig.style.color="red";
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
    console.log(isDrawerOpen)
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
    
});

// cbox.addEventListener("click",()=>
// {
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
})
