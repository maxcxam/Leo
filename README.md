"# task" 
Рішення завданнь є в архівах під паролем<br />
Також обов"язково підготуватись до роботи з ajax request<br />
<a href="http://api.jquery.com/jquery.ajax/">AJAX API REFERENCE</a>


рішення першої задачі
<div class="owl-carousel owl-theme" id='carousel1' data-loop='1' data-nav='1' data-dots='0'>
як відомо 1 та 0 конвертуютья в булев тип як тру та фалс
$('document').ready(function(){
	var owl = $('.owl-carousel');
	for(var i=0; i<owl.length; i++){
		owl[i].classList.add('carousel'+i);
		$('.carousel'+i).owlCarousel({
			loop:parseInt(owl[i].dataset.loop),
		    nav:parseInt(owl[i].dataset.nav),
		    dots:parseInt(owl[i].dataset.dots)
		});
	}
})
                             
 рішення другої задачи було частково реалізовано під коментарями
 
 
$('document').ready(function(){
	$('#form').on('submit', function(e){
		e.preventDefault();
		var a = $(this).serialize();
		var b = a.split('&');
		$.each(b, (i,e)=>{
			e=e.split('=');
			if(e[1]==''){
				$('#'+e[0]).addClass('warning');
			} else {
				$('#'+e[0]).removeClass('warning');
			}
			$('#'+e[0]).html(e[1]);
		});

	});
		
})
