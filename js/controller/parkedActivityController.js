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

	
	$(document).find('.connectedSortable1').on('dblclick', this, function(event) {

		var target = event.target;
		while (!target.classList.contains('activityBox')) {
            target = target.parentNode;
        }

	    var selectedActivityIndex = -1;
        for (var i = 0; i < model.parkedActivities.length; i++) {
            if (model.parkedActivities[i] == target) {
                selectedActivityIndex = i;
                break;
            }
        }
        console.log(target);
        //alert("clicked");
        /*if (selectedActivityIndex == -1) {
            console.log("Error: did not found selected activity ");
            return;	
        }*/
        alert("clicked");
        var selectedActivity = model.parkedActivities[selectedActivityIndex];
        var activityEditView = new ActivityEditView($('#ActivityEditView'), model, selectedActivity);
        var activityEditController = new ActivityEditController(activityEditView, model, selectedActivity);
		console.log("change to editview");
		$(".page").hide();       
        $("#ActivityEditView").show();
    });

}