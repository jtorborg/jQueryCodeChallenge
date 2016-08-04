// window.onload = function() {
//      if (window.jQuery) {
//          "jQuery is loaded"
//         alert("Yahtzee!");
//         } else {
//           "jQuery is not loaded"
//           alert("No dice.");
//         }
//         }


//How: When the page loads, create a button on the DOM that says “Add Spy”. Upon clicking that button, add a new spy to the DOM.
//HINT: You'll need to append a new container onto the DOM.
$(document).ready(function() {
    var spy = [];


     $('#addspy').on("click", function(event){
        event.preventDefault();
        var values = {};
        var formData = $(this).serializeArray();
           formData.forEach(function(spy, index) {  //each thing in the form
             values[spy.name] = spy.value;
             console.log(spy.name);
             console.log(spy.value);
           });
           //console.log(formData);
           //console.log(values);

spy.push(values);
appendDom(values);
 });



function appendDom(spyInfo) {
    $("#spyContainer").append('<div class="spies"></div>');
    $el = $("#spyContainer").children().last();
    $el.append('<h2>' + spyForm.spyName + '</h2>');
    $el.append('<button class="changeSpy">Change</button>');
    $el.append('<button class="deleteSpy">Delete</button>');

    $el.data("id", spies.length - 1);
    $el.data("person", spyInfo);
  }

});
