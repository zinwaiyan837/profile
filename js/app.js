

    $(document).ready(function(){

    
    let currentHeight=$(window).height();
    // console.log(currentHeight);

    $(window).scroll(function(){
      
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition>=currentHeight-120){
            $(".site-nav").addClass("site-nav-scroll");
           

        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
           
        
       }
    })

    // change button icon
    $(".navbar-toggler").click(function(){
      let result= $(".navbar-collapse").hasClass("show");
    //console.log(result);
      if(result){
        $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
      }else{
        $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
      }
    
    });
    
// set navbar active class
     function setActive(current){
      $(".nav-link").removeClass("current-nav");
        $(`.nav-link[href="#${current}"]`).addClass("current-nav");

     }

     function navScroll(){
       let currentSection = $("section[id]");

      currentSection.waypoint(function(direction) {
          if(direction == "down"){
            let currentSectionId = $(this.element).attr("id");
       //  console.log(currentSectionId);
            setActive(currentSectionId);
          }
          
       },{
         offset:'150px'
       });
       currentSection.waypoint(function(direction) {
        if(direction == "up"){
          let currentSectionId = $(this.element).attr("id");
//     console.log(currentSectionId);
          setActive(currentSectionId);
        }
        
     },{
      // offset:'150px'
    });
     
       
     
    }
    navScroll();







})




new WOW().init();

$('.pricing-slide').slick({
dots: true,
infinite: true,
arrows:false,
slidesToShow: 3,
slidesToScroll: 3,

responsive: [
{
breakpoint: 1400,
settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  dots: true
}
},
{
breakpoint: 800,
settings: {
  slidesToShow: 2,
  slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});

$(window).on("load",function(){
  $(".loader-container").fadeOut(500,function(){
    $(this).remove();
  });
});
