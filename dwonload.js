//filters
let saturate=document.getElementById('saturate');
let contrast=document.getElementById('contrast');
let brightness=document.getElementById('brightness');
let sepia=document.getElementById('sepia');
let grayscale=document.getElementById('grayscale');
let blur=document.getElementById('blur');
let huerotate=document.getElementById('huerotate');
// buttons
download=document.getElementById("download");
reset=document.getElementById('reset');
upload=document.getElementById('upload');
//img
img=document.getElementById("img");
imgBox=document.getElementById("imgbox");
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");


//coding area
function reseto(){
    img.style.filter='none';
    saturate.value="100";
    contrast.value="100";
    brightness.value="100";
    sepia.value="0";
    grayscale.value="0";
    blur.value="0";
    huerotate.value="0";
}
reset.onclick=function(){
    reseto()
    }
window.onload=function(){
   reseto()   
    imgBox.style.display='none';
    reset.style.display='none';
    download.style.display="none";

}
upload.onchange=function(){
    reseto()
    imgBox.style.display='block';
    reset.style.display='block ';
    download.style.display="block";
    let file=new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload=function(){
        img.src=file.result;
    }
    img.onload=function(){
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,600,400);
        img.style.display='none'
    }

}

    saturate.value="100";
    contrast.value="100";
    brightness.value="100";
    sepia.value="0";
    grayscale.value="0";
    blur.value="0";
    huerotate.value="0";


let filters=document.querySelectorAll( "ul li input")
filters.forEach(filter => {addEventListener("input",function(){
     ctx.filter=`
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${huerotate.value}deg)
    `;
    ctx.drawImage(img,0,0,600,400);
})
    
});
download.onclick=function(){
    download.href=canvas.toDataURL()
}