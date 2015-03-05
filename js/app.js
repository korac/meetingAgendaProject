/**
 * Created by Kristijan on 3.3.2015..
 */
$(function(){

    // this is the instance of our main model
    // this is what you should use in your application
    var model = new Model();
    var act = new Activity(model);

    var addActivityView = new AddActivityView($("addActivityView"), model, act);

    var addActivityController = new AddActivityController(addActivityView, model, act);

    var mainView = new MainView($("MainView"), model, act);

    var mainViewController = new MainViewController(mainView, model, act);

    var addMainController = new MainController;

  //  var actDisplayView = new ActDisplayView($("actDisplayView"), model, act);

  //  var actDisplayController = new ActDisplayController(actDisplayView, model, act);

});