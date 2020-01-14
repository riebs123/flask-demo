console.log("Loaded main.js");

d3.json("/dictionary").then(function (data) {
    console.log(data); 
});