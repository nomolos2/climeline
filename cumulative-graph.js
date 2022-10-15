
var c = new CanvasJS.Chart("first",
{
zoomEnabled: true,
title:{
text: "Co2 Emissions by year"
},
theme:"dark1",
axisX:{     
         labelFormatter: function(e){
				return  e.value;
			}
        },
axisY:{     
         labelFormatter: function(e){
				return (e.value) +"MMMt";
			}
 },
data: [
{
type: "line",
color:"lightblue",
xValueFormatString: "####",

dataPoints: dps
}
]
});

var tempOptions= new CanvasJS.Chart("second",
{
zoomEnabled: true,
title:{
text: "Total Co2 Emissions after 2010"
},
theme:"dark1",
axisX:{     
         labelFormatter: function(e){
				return  e.value;
			}
        },
axisY:{     
         labelFormatter: function(e){
				return (e.value) +"MMMt";
			}
 },
data: [
{
type: "line",
color:"red",
xValueFormatString: "####",

dataPoints: dps
}
]
});

var cumulative = function() {
 
 for(let i=1; i<dps.length; i++){
    dps[i].y=dps[i].y+dps[i-1].y;
 };
};
//remember to run the function on the chart 
//I spent way to long trying to figure out the temp chart(I don't think I can do it)
