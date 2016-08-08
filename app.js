// window.onload = function() {
//      if (window.jQuery) {
//          "jQuery is loaded"
//         alert("Yahtzee!");
//         } else {
//           "jQuery is not loaded"
//           alert("No dice.");
//         }
//         }


//How: When the page loads, create a button on the DOM that says Add Spy. Upon clicking that button, add a new spy to the DOM.
//HINT: You'll need to append a new container onto the DOM.
$(document).ready(function() {
	
	var spy = [];									//array the holds user input   ////this variable holds the contents of the name inputted

    var spyCounter = 1;

     $('#spyForm').on("submit", function(event){	//
        event.preventDefault();
        var values = {};							//
        var formData = $(this).serializeArray();
        console.log('form data:', formData);        //formData contains and Object with the name "spyName" and the value property inputted by user
           formData.forEach(function(spy) {  		//each thing in the form
             values[spy.name] = spy.value;
             
             $("#spyForm").find("input[type = text], input[type = number]").val(''); //clears out Name: field after "New Spy" button is clicked  "this" property doesn't work here.
            console.log(spy.name);					//spyName
            console.log(spy.value);					//User input. Will always be a string.
           });
          	console.log(formData);					//Object spyName is string of user input. value property no longer exists. (See line 26: values[spy.name] = spy.value;)
           console.log(values);						//Object {spyName: "user input"}

        spy.push(values);							//Pushes the input into the spy array.
        console.log(spy);							//Array of objects with spyName property. (line 35: spy.push(values))
        console.log(values);						//Most recent object inputted (with spyName property).
        appendDom(values);							//passes most recent object inputted into appendDom function
    });

    $("#spyContainer").on("click", ".changeSpy", function() {
  	  console.log(this);											//<button class="changeSpy">Change</button>  Note: does not appear in index.html
      $(this).parent().toggleClass('red');
    });
    $("#spyContainer").on("click", ".deleteSpy", function() {		//removes the 
      console.log(this);											//<button class="deleteSpy">Delete</button>  Note: does not appear in index.html
      $(this).parent().remove();									//???What is the parent of the button???//
      
    });





function appendDom(spyInfo) {
	
    $("#spyContainer").append('<div class="spies"></div>');
    $el = $("#spyContainer").children().last();
    $el.append('<p class = "yellow">'+ spyCounter + ".  " + spyInfo.spyName + '<button class="changeSpy">Change</button>' + '<button class="deleteSpy">Delete</button>' + '     </p>');
    spyCounter++;
	


  }

});
