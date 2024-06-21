// buttons call
upload=document.getElementById("upload");
download=document.getElementById("download");
reset=document.getElementById("reset");
// filters call
saturate=document.getElementById("saturate");
contrast=document.getElementById("contrast");
brightness=document.getElementById("brightness");
sepia=document.getElementById("sepia");
grayscale=document.getElementById("grayscale");
blur=document.getElementById("blur");
huerotate=document.getElementById("huerotate");

//img call
imgBox=document.getElementById("imgbox");
img=document.getElementById("img");
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext('2d');
//coding

function resetValue(){
    img.style.filter='none';
    saturate.value='100';
    contrast='100';
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    huerotate.value='0';
}
reset.onclick=function(){
    resetValue()
}


window.onload=function(){
    imgBox.style.display='none';
    download.style.display="none";
    reset.style.display="none";

    }
//upload image
upload.onchange=function(){
    

     
    imgBox.style.display="block";
    download.style.display="block";
    reset.style.display="block";
    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
        file.onload=function(){
            img.src=file.result;
            
        }

        img.onload=function(){
        canvas.width=img.width;
        canvas.height=img.height;

        ctx.drawImage(img,0,0,600,400);

            img.style.display="none";
        }
    
}



let filters=document.querySelectorAll("ul li input")

filters.forEach(filter=>{
    filter.addEventListener('input',function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-Rotate(${huerotate.value}deg)`
        ctx.drawImage(img,0,0,600,400);// critical
    })
})



 
download.onclick=function(){
    download.href=canvas.toDataURL();
}
