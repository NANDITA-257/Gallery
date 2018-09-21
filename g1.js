$(".card-title").on("mouseover",function(){
	$(this).css("color","grey");
});

 $(".card-title").on("mouseout",function(){
	$(this).css("color","black");
});
  
  
  $(".card-img-top img-thumbnail").on("mouseover",function(){
	  $(this).fadeOut();
  });
  
   $(".card-img-top img-thumbnail").on("mouseout",function(){
	  $(this).fadeIn();
  });