({
	doInit : function(component, event, helper) {
		var classes = [];
        classes.push({
            className:"Dev601",
            deliveryDate: "2018-08-16",
            instructor: "Joe"
        });
        
        classes.push({
            className:"Dev601",
            deliveryDate: "2018-01-05",
            instructor: "Steve"
        });
        
         classes.push({
            className:"Dev450",
            deliveryDate: "2018-01-12",
            instructor: "Steve"
        });
        component.set("v.classes",classes);
	},
    dateChange:function(component,event,helper) {
        console.log("a date changed");
        var classes = component.get("v.classes");
        	classes.sort(function(a,b) {
              return a.deliveryDate > b.deliveryDate ? 1 : a.deliveryDate < b.deliveryDate ? -1 : 0;
            });
        component.set("v.classes",classes);
    }
})
