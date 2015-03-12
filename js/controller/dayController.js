/**
 * Created by Jonathan, Mar. 6th
 */

var DayController = function (view, model, day) {


    this._view = view;
    this._model = model;

    var _this = this;
    var _startTime = model._start;


 view.dayActivities.on('dragstart', this, function(event) {
 console.log('dragstart: day activity');
        var target = event.target;
        while (!target.classList.contains('connectedSortableDay')) {
            target = target.parentNode;
        }

        target.parentNode.classList.add('dragOver');

        var selectedActivityIndex = -1;
        for (var i = 0; i < view.dayBox.children().length; i++) {
            if (view.dayBox.children()[i] == target) {
                selectedActivityIndex = i;
                break;
            }
        }
        if (selectedActivityIndex == -1) {
            console.log('Error: selected activity not found');
            return;
        }

        // determine the index of the day
        var dayIndex = -1;
        for (var i = 0; i < model.days.length; i++) {
            if (model.days[i] == day) {
                dayIndex = i;
            }
        }
        if (dayIndex == -1) {
            console.log('Error: Couldn\'t find the day');
        }

        event.originalEvent.dataTransfer.setData("SelectedActivity", selectedActivityIndex);
        event.originalEvent.dataTransfer.setData("From", dayIndex);

    });

    /**
     * onDragEnter: apply style properties to the activity on which the mouse is such that
     * above the activity is some space that indicates where the dragged activity will be
     * dropped.
     */
     view.dayActivities.on('dragenter', this, function(event) {
        var target = event.target;
        while (!target.classList.contains('connectedSortableDay')) {
            target = target.parentNode;
        }
        target.classList.add('dragOver');
    });

    /**
     * onDragLeave: revert the style properties applied above.
     */
     view.dayActivities.on('dragleave', this, function(event) {
        var target = event.target;
        if (!target.classList.contains('connectedSortableDay')) {
            return;
        }
        target.classList.remove('dragOver');
    });

    /**
     * onDragOver: we need to catch this event here and have to prevent the default event
     * handling in order to be able to drop an an dragged activity here.
     */
    view.dayActivities.on('dragover', this, function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    /**
     * onDrop: Determine which activity was dragged from which day (or from the parked
     * activities) and move the activity to the day where it was dropped. The new
     * position of the dropped activity is above the activity on which it was dropped.
     */
     view.dayActivities.on('drop', this, function(event) {

        event.preventDefault();
        event.stopPropagation();

        var selectedActivityIndex = event.originalEvent.dataTransfer.getData("SelectedActivity");
        var from = event.originalEvent.dataTransfer.getData("From");
        if (from == 'null') {
            from = null;
        }

        var target = event.target;
        while (!target.classList.contains('connectedSortableDay')) {
            target = target.parentNode;
        }

        target.classList.remove('dragOver');

        var droppedActivityIndex = -1;
        for (var i = 0; i < view.dayBox.children().length; i++) {
            if (view.dayBox.children()[i] == target) {
                droppedActivityIndex = i;
                break;
            }
        }
        if (droppedActivityIndex == -1) {
            console.log('Error: selected activity not found');
            return;
        }

        // determine the index of the day
        var dayIndex = -1;
        for (var i = 0; i < model.days.length; i++) {
            if (model.days[i] == day) {
                dayIndex = i;
            }
        }
        if (dayIndex == -1) {
            console.log('Error: Couldn\'t find the day');
        }


        model.moveActivity(from, selectedActivityIndex, dayIndex, droppedActivityIndex);

    });


    /**
     * onDragEnter: If an element is dragged over the parkedActivitiesContainer
     * highlight the container with a dashed red border so that it's clear that
     * the element can dropped here.
     */
   view.dayActivities.on('dragenter', this, function(event) {
        event.target.classList.add('dragOver');
    });

    /**
     * onDragLeave: If a dragged element leaves the parkedActivitiesContainer
     * un-highlight the container.
     */
     view.dayActivities.on('dragleave', this, function(event) {
        event.target.classList.remove('dragOver');
    });

    /**
     * onDragOver: We need to catch this event and stop the propagation
     * otherwise the 'drop' event won't be fired.
     */
     view.dayActivities.on('dragover', this, function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    /**
     * onDrop: Add the dragged activity at the end of the list of all
     * parked activities.
     */
     view.dayActivities.on('drop', this, function(event) {

        event.preventDefault();
        event.stopPropagation();

        // un-highlight the parkedActivitiesContainer
        event.target.classList.remove('dragOver');

        var selectedActivityIndex = event.originalEvent.dataTransfer.getData("SelectedActivity");
        var from = event.originalEvent.dataTransfer.getData("From");
        if (from == 'null') {
            from = null;
        }
         // determine the index of the day
        var dayIndex = -1;
        for (var i = 0; i < model.days.length; i++) {
            if (model.days[i] == day) {
                dayIndex = i;
            }
        }
        if (dayIndex == -1) {
            console.log('Error: Couldn\'t find the day');
        }

        // since the activity wasn't dropped on another activity, we add the dropped
        // activity at the end of the day
        model.moveActivity(from, selectedActivityIndex, dayIndex, null);

    });


};


   /**
    $('#dayView').keyup(function() {
        _startTime($("#startTime").val());
        console.log("input smth");
    });


    $('#dayView').on('change', function() {
        console.log(val('#startTime'));
        //_startTime($("#startTime").val());
        //console.log("input smth");
    });

    }*/