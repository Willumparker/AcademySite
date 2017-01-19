$( document ).ready(function() {

	// move the box left/right when you click on it
	$("#redbox").click(function(){
		var classname = $(this).attr('class');
		//alert(classname);
		if(classname=="right"){
			$("#redbox").attr("class", "left");
			$("#redbox").animate({left:'0px'});
		};
		if(classname=="left"){
			$("#redbox").animate({left:'450px'});
			$("#redbox").attr("class", "right");
		};
	});

	// show description of logo when hovering over red box
	$("#redbox").mouseover(function () 
	{
		if($("button").attr('id') == 'clicked')
		{
			$("#description").html("This is the Ten10 logo");
		}
	});

	// hide description of logo when mouse goes off red box
	$("#redbox").mouseout(function () 
		{ $("#description").html("");
	});

	// show tpp logo when button is clicked
	$("#button").click(function(){
		$(".ttp-logo").fadeIn("slow");
		$("#button").attr('id', 'clicked')
	});

	// show the description when you click on the list item
	$(".thing").click(function(){
		var name = this.id + "description";
		$("#" + name).show();
		$("li").filter(".thingdescription").not("#"+ name).hide();
	});

	/***********************************************************************************
	ANIMATIONS, TRANSFORMS, AUDIO AND VIDEO
	***********************************************************************************/

	// When click the button to view one item, hide the others
	$("#CSS3AnimationControl").click(function(){
		$(".CSS3Box").toggleClass("displayInline");
		$(".CSS3TransformBox, #video, .audio").removeClass("displayInline");
	});

	$("#CSS3TransformControl").click(function(){
		$(".CSS3TransformBox").toggleClass("displayInline");
		$(".CSS3Box, #video, .audio").removeClass("displayInline");
	});

	$("#VideoControl").click(function(){
		$("#video").toggleClass("displayInline");
		$(".CSS3Box, .CSS3TransformBox, .audio").removeClass("displayInline");
	});

	$("#AudioControl").click(function(){
		$(".audio").toggleClass("displayInline");
		$(".CSS3Box, .CSS3TransformBox, #video").removeClass("displayInline");
	});

	// Add the animation to the clicked on Div
	$(".CSS3Box").click(function(){
		$(this).css("animation-name", "CSS3Animation");
	});

	//Remove the animation from the Div which is double clicked
	$(".CSS3Box").dblclick(function(){
		$(this).css("animation-name", "");
	});

});
