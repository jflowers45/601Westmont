({
    doInit: function(component,event,helper) {
        helper.callServer(
            component,
            "c.getCertifications",
            function(response) {  
                for (var i=0; i< response.length; i++) {
                    response[i].className = response[i].Name;
                }
                component.set('v.classes', response);
            }, {
            }
        );
    },
    
    onRadioClick:function(component,event,helper) {
        var btnId = event.currentTarget.getAttribute('value');
        var status = event.currentTarget.getAttribute('data-status');
        btnId = btnId.replace("group","");
        var idArray = btnId.split("-");
        var accordionIndex = idArray[0];
        var classes = component.get('v.classes');
        classes[accordionIndex].Name = classes[accordionIndex].className + " (" + status + ")";
        component.set('v.classes', classes);
    }
})
