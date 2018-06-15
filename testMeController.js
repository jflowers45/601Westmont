({
    doInit: function(component,event,helper) {
        helper.callServer(
            component,
            "c.getCertifications",
            function(response) {  
                component.set('v.classes', response);
            }, {
            }
        );
    },
    onClick:function(component,event,helper) {
        var btnId = event.getSource().get("v.value");
        var classes = component.get('v.classes');
        classes[btnId].Name = classes[btnId].Name + " Changed";
        component.set('v.classes', classes);
    }
})