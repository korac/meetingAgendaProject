var ParkedActivityController = function (view, model) {

    this._view = view;

    this._model = model;

    var _this = this;
    var parkedActivities = model.parkedActivities;

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
                    //Day Controller moving activity inside parked activities
					model.moveActivity(null,parseFloat(ui.item.attr('position')),null,ui.item.index());
					console.log("Day Controller moving activity inside parked activities");
				}
				else{
                    //Day Controller moving activity from day to parked activities
					model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),null,ui.item.index());
					console.log("Day Controller moving activity from day to parked activities");
				}
				
			}
		},
	}).disableSelection();

    //Delete a parkedActivity
	 $(document).find('.connectedSortable1').on('click', '.deleteThis',function(event) {
    console.log("arxidia");
        var target = event.target;
        while (!target.classList.contains('activityBox')) {
            target = target.parentNode;
        }

        // determine the index of the activity
        var selectedActivityIndex = -1;
        for (var i = 0; i < view.connectedSortable1.children().length; i++) {
            if (view.connectedSortable1.children()[i] == target) {
                selectedActivityIndex = i;
                break;
            }
        }
        if (selectedActivityIndex == -1) {
            console.log('Error: selected activity not found');
            return;
        }

        model.removeParkedActivity(selectedActivityIndex);

    });
// edit a ParkedActivity
	$(document).find('.connectedSortable1').on('dblclick', '.activityBox', function(event) {

		var target = event.target;
		while (!target.classList.contains('activityBox')) {
            target = target.parentNode;
        }
 // determine the index of the activity
	    var selectedActivityIndex = -1;
        for (var i = 0; i < view.connectedSortable1.children().length; i++) {
            if (view.connectedSortable1.children()[i] == target) {
                selectedActivityIndex = i;
                console.log(selectedActivityIndex);
                break;
            }
        }
     
        if (selectedActivityIndex == -1) {
            console.log("Error: did not found selected activity ");
            return;	
        }
      
        var selectedActivity = parkedActivities[selectedActivityIndex];
        console.log(selectedActivity.getName());
        var activityEditView = new ActivityEditView($('#ActivityEditView'), model, selectedActivity);
        var activityEditController = new ActivityEditController(activityEditView, model, selectedActivity);
		$(".page").hide();       
        $("#ActivityEditView").show();

    });


}