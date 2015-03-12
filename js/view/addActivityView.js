/**
 * Created by Kristijan on 3.3.2015..
 */
var AddActivityView = function (container, model, activity, day) {

    model.addObserver(this);

    this._container = container;
    this._model = model;


    this.inputName = this._container.find("#inputName");
    this.inputLength = this._container.find("#inputLength");
    this.inputType = this._container.find("#inputType");
    this.inputDescription = this._container.find("#inputDescription");
    this.saveButton = this._container.find("#saveButton");
    
    this.update = function () {

        this.inputName.val('');
        this.inputLength.val('');
        this.inputType.val('');
        this.inputDescription.val('');
    }
   
this.update();


  /* function updateFields(act)
    {
        if(act != null)
        {
            this.currentActivity = act;
           
            $(inputName).val(act.getName());
            $(inputLength).val(act.getLength());
           
            $(inputDescription).val(act.getDescription());
        }
        else
        {
            this.currentActivity = null;
            
            $(inputName).val("");
            $(inputLength).val("");
          
            $(inputDescription).val("");
        }
        
    }
this.updateFields = updateFields;
*/
}