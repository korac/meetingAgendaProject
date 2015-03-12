var ParkedActivityController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;
//edit activity
/*
  view.doubleClick.on('dblclick', this, function(event) {

        var target = event.target;
      

        // determine the index of the activity
        var selectedActivityIndex = -1;
        for (var i = 0; i < view.doubleClick.children().length; i++) {
            if (view.doubleClick.children()[i] == target) {
                selectedActivityIndex = i;
                break;
            }
        }
        if (selectedActivityIndex == -1) {
            console.log('Error: selected activity not found');
            return;
        }
        var selectedActivity = model.parkedActivities[selectedActivityIndex];
        if (view.currentActivity != null)
            {
                view.currentActivity.setName($('#inputName').val());
                view.currentActivity.setLength(parseFloat($('#inputLenght').val()));
                view.currentActivity.setTypeId($('option:selected',$('#inputType')).index());
                view.currentActivity.setDescription($("#inputDescription").val());
            }
      //  var addActivityView = new addActivityView($('#addActivityView'), model, selectedActivity);
      //  var addActivityController = new addActivityController(addActivityView, model, selectedActivity);
      //  $('#addActivityView').modal('show');
$(".page").hide();
	$("#addActivityView").show();
    });
*/

 view.listbody.on('dragstart', this, function(event) {

        console.log('dragstart: parkedActivityView');

        var target = event.target;
        while (!target.classList.contains('parkedActivity')) {
            target = target.parentNode;
        }

        target.parentNode.classList.add('dragOver');

        var selectedActivityIndex = -1;
        for (var i = 0; i < view.connectedSortable.children().length; i++) {
        	 
            if (view.connectedSortable.children()[i] == target) {
            	
                selectedActivityIndex = i;
                break;
            }
        }
        if (selectedActivityIndex == -1) {
            console.log('Error: selected activity not found');
            return;
        }

        event.originalEvent.dataTransfer.setData("SelectedActivity", selectedActivityIndex);
        event.originalEvent.dataTransfer.setData("From", null);

    });
view.listbody.on('dragenter', this, function(event) {
        var target = event.target;
        while (!target.classList.contains('parkedActivity')) {
            target = target.parentNode;
        }
        target.classList.add('dragOver');
    });

view.listbody.on('dragleave', this, function(event) {
     
        var target = event.target;
        if (!target.classList.contains('parkedActivity')) {
            return;
        }
        target.classList.remove('dragOver');
    });

    /**
     * onDragOver:
     */
view.listbody.on('dragover', this, function(event) {
      
        event.preventDefault();
        event.stopPropagation();
    });

    /**
     * onDrop:
     */
 view.listbody.on('drop', this, function(event) {

        console.log('drop: wrapper');

        event.preventDefault();
        event.stopPropagation();

        var selectedActivityIndex = event.originalEvent.dataTransfer.getData("SelectedActivity");
        var from = event.originalEvent.dataTransfer.getData("From");
        if (from == 'null') {
            from = null;
        }

        var target = event.target;
        while (!target.classList.contains('parkedActivity')) {
            target = target.parentNode;
        }

        target.classList.remove('dragOver');

        var droppedActivityIndex = -1;
        for (var i = 0; i < view.connectedSortable.children().length; i++) {
            if (view.connectedSortable.children()[i] == target) {
                droppedActivityIndex = i;
                break;
            }
        }
        if (droppedActivityIndex == -1) {
            console.log('Error: selected activity not found');
            return;
        }

        model.moveActivity(from, selectedActivityIndex, null, droppedActivityIndex);

    });


    

    /**
     * onDrop: Add the dragged activity at the end of the list of all
     * parked activities.
     */
   view.listbody.on('drop', this, function(event) {

        console.log('---------------------------------------------------------------');
        console.log('Drop on parkedActivitiesContainer');

        event.preventDefault();
        event.stopPropagation();

        // un-highlight the parkedActivitiesContainer
        event.target.classList.remove('dragOver');

        var selectedActivityIndex = event.originalEvent.dataTransfer.getData("SelectedActivity");
        var from = event.originalEvent.dataTransfer.getData("From");
        if (from == 'null') {
            from = null;
        }

        console.log('from = ' + from);
        console.log('activityIndex = ' + selectedActivityIndex);
        console.log('---------------------------------------------------------------');

        // since the activity was dropped on another activity, we add the dropped
        // activity at the end
        model.moveActivity(from, selectedActivityIndex, null, null);

    });
   /**
     * onDragEnter: If an element is dragged over the parkedActivitiesContainer
     * highlight the container with a dashed red border so that it's clear that
     * the element can dropped here.
     */
    view.listbody.on('dragenter', this, function(event) {
        event.target.classList.add('dragOver');
    });

    /**
     * onDragLeave: If a dragged element leaves the parkedActivitiesContainer
     * un-highlight the container.
     */
    view.listbody.on('dragleave', this, function(event) {
        event.target.classList.remove('dragOver');
    });

 view.listbody.on('dragover', this, function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    //this._view.dragTarget.attr( "ondrop", "drop(event)");
    //this._view.dragTarget.attr("ondragover","return false");
    //
    //this.drag = function (ev) {
    //    ev.dataTransfer.setData("text", ev.target.id);
    //};
    //
    //this.drop = function(ev) {
    //    ev.preventDefault();
    //    var data = ev.dataTransfer.getData("text");
    //    ev.target.appendChild(document.getElementById(data));
    //
    //    console.log(data);
    //};
    //
    //this.handleDragStart = function(e){
    //    this.style.opacity  = '0.4';
    //};
    //
    //this._view.draggedAct.addEventListener('dragstart',this.handleDragStart, false);
   

}