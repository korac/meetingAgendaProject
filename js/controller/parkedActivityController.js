var ParkedActivityController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;

//$('document').ready(function(){
//	$("#'drag").tooltip();
//alert(ParkedActivityView.getAttribute(id));
//});

//$('#activityList').on("mouseenter", function(event){
//	var _hoverid = $(event.target).closest("li").attr('id');
//	console.log("_hoverid");

//});
$('#drag0').hover(function() {
	console.log("Is it working ?");
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);


}