var ParkedActivityController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;

   // $('.parkedActivity').mouseover(function() {
   //console.log('id');
   //});
	view.connectedSortable1.sortable({
		appendTo: document.body,
		helper: "clone",
		items: ".activityBox:not(.placeholder)",
		connectWith: "div",
		start: function(){
			console.log("I am inside ParkedActivityController");
		},
		update:function(event,ui){
			if (this === ui.item.parent()[0]) {
				if(ui.item.attr('day')== null){
					model.moveActivity(null,parseFloat(ui.item.attr('position')),null,ui.item.index());
					//console.log("ekane to move sto activity list");
				}
				else{
					model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),null,ui.item.index());
					//console.log("ekane to move apo to activity sto day");
				}
				
			}
		},
	}).disableSelection();

}