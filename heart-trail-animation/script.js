const target = document.querySelector("body");

target.addEventListener("mousemove",(event)=>{
    const xpos = event.offsetX;
    const ypos = event.offsetY;

    const heart = document.createElement("span");
    heart.style.left = xpos +"px";
    heart.style.top = ypos +"px";

    const size = Math.random()*100;
    heart.style.height = size + 'px';
    heart.style.width = size + 'px';

    target.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },3000);
});

