var slides = document.getElementsByClassName("carousel-item");
// console.log(slides);  // HTML Collaction
var dots = document.querySelector(".dot");
// console.log(dots); // NodeList

var currslide = 1;


// prev btn
document.getElementById("prev").addEventListener("click", function(){
        carousel(currslide -= 1);
})

// next btn
document.getElementById("next").addEventListener("click", function(){
        carousel(currslide += 1);
})

for(var q = 0; q < dots.length; q++){
        // console.log(q);

        dots[q].addEventListener("click",function(){
                // console.log(this.getAttribute("data-bs-slide-to"));

                // carousel(this.getAttr("data-bs-slide-to"));
                currslide = this.getAttribute("data-bs-slide-to");
                carousel(currslide);

        })
}

carousel(currslide);


function carousel(slidenum){
        // console.log(slidenum);
        var x,y;
        // hide all slides
        for(x = 0; x < slides.length; x++){
                slides[x].style.display = "none";
        }

        for(y = 0; y < dots.length; y++) {
                // dots[y].classList.remove("active");
                // dots[y].className = "dot";
                dots[y].className = dots[y].className.replace("active","") // same = dots[y].className = "dot ";
        }

        // res for currslide 1 to 3 & 3 to 1 ( 4 to 1) (0 to 4)
        if(slidenum > slides.length){
                currslide = 1;
        }else if(slidenum < 1){
                currslide = slides.length;  // last number
        }
        // console.log(currslide);

        slides[currslide -1].style.display = "block";

        // dots[currslide -1].className = "dot active";   // error here.
        // dots[currslide-1].className += " active";  // append
        dots[currslide -1].classList.add("active");

}





// slide       0      1         2
// currslide 1-1 = 0   2-1 = 1    3-1 = 2