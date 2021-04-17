function fullName(firstName, lastName){
    return firstName + " " + lastName;
  }
  
  var fullname = fullName("Luka", "Joshua");
  
  //I already did console log with the code above

  const firstname2 = (firstName, lastName) => `${firstName} ${lastName}`
  console.log(firstname2("Shania", "Joshua"));

 
setTimeout(() => alert('Time is up!'), 3000);

let askAreWeThereYet = ('Are we there yet?')
setInterval(() => alert(askAreWeThereYet), 3000);

function processSplicedValue(arr, index, callback) {
    callback(arr[index]);
    }
    
    var numbers = ['one', 'two', 'three']
    processSplicedValue(numbers, 0, console.log);
    
    processSplicedValue(numbers, 1, (value) => window.alert(value));
    
    function customFunction(value) {
    console.log('value: ' + value);
    window.alert('value: ' + value);
    }
    
    processSplicedValue(numbers, 2, customFunction);