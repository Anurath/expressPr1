let imgs=document.querySelectorAll("img");

let imgsArray=Array.from(imgs);
imgsArray.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        console.log("Image was clicked..");
    })
})