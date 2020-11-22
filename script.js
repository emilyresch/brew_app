var submitBtn = document.getElementById("btn");
var radioBtn = document.getElementsByClassName("form-check-input");
var beers = [{
    beerName: "",
    date: "",
    beerDesc: "",
    steps: [],
}];



submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    // console.log("hello world") 
    var name = document.getElementById("beerName").value;
    console.log(name);

    var desc = document.getElementById("beerDesc").value;
    console.log(desc);

    var date = document.getElementById("date").value;
    console.log(date);

    var step = document.getElementsByName("step");

    var stepList = []

    for (i = 0; i < step.length; i++) {
        
        if(step[i].checked) {
            var addStep = step[i].value;
            // console.log(addStep);
            // beers.steps = addStep;
            stepList.push(addStep);
        }
    }

    //make the steps section another array of objects: properties are "stepname" and "date to do this step";

    beers.beerName = name;
    beers.date = date;
    beers.beerDesc = desc;
    beers.steps = stepList;
    

    console.log(beers);
})

