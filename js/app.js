/**
 * Created by Kristijan on 3.3.2015..
 */
$(function(){

    // this is the instance of our main model
    // this is what you should use in your application
    var model = new Model();
    //var act = new Activity(model); //  <---- This is in questionable (check comments in "actDisplayView.js")


    // Views
    var addActivityView = new AddActivityView($("#addActivityView"), model);
    var parkedActivityView = new ParkedActivityView($("#parkedActivityView"), model);
    var mainView = new MainView($("#mainView"), model);
    var dayView = new DayView($("#dayView"), model);

    // Controllers
    var addActivityController = new AddActivityController(addActivityView, model);
    var parkedActivityController = new ParkedActivityController(parkedActivityView, model);
    var mainViewController = new MainViewController(mainView, model);
    var dayController = new DayController(dayView, model);

    var mainController = new MainController(mainView, model);



});