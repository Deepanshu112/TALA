// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


var fullcsr = document.querySelector("#full-scr-nav");
var menu = document.querySelector("#nav-prt2 i");

var flag = 0;
menu.addEventListener("click", function(){

    if(flag == 0){
        fullcsr.style.top = "0%";
        document.querySelector("#nav h2").style.color = "#222";
        document.querySelector("#nav i").style.color = "#222";
        document.querySelector("#nav h3").style.color = "#222";
        flag = 1;
    } else{
        fullcsr.style.top = "-100%";
        document.querySelector("#nav h2").style.color = "#dadada";
        document.querySelector("#nav i").style.color = "#dadada";
        document.querySelector("#nav h3").style.color = "#dadada";
        flag = 0;
    }


})

var t1 = gsap.timeline()
t1.from("#page1 h1", {
    y:60,
    duration:2,
    opacity:0
})
.from("#page1 h2",{
    y:60,
    duration:2,
    opacity:0,
    delay:-1.2
})

gsap.to("#page2 img",{
    scale:1,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end:"top 10%",
        scrub:6,
    }
})

gsap.to("#page2 h1",{
    y:10,
    x:-10,
    rotateX:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:"#h11",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})


var slideh1 = document.querySelectorAll("#page6 #silde1-of-h1 h1")
slideh1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    })
})


var slide2h1 = document.querySelectorAll("#page6 #silde2-of-h1 h1");
slide2h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(0%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    });
})


document.querySelector("#element1").addEventListener("mousemove", function(dets){
    document.querySelector("#element1 img").style.opacity = 1
    document.querySelector("#element1 img").style.left = `${dets.x}px`
})

document.querySelector("#element1").addEventListener("mouseleave", function(dets){
    document.querySelector("#element1 img").style.opacity = 0;
})
document.querySelector("#element2").addEventListener("mouseleave", function(dets){
    document.querySelector("#element2 img").style.opacity = 0;
})

document.querySelector("#element2").addEventListener("mousemove", function(dets){
    document.querySelector("#element2 img").style.opacity = 1
    document.querySelector("#element2 img").style.left = `${dets.x}px`
})