$(document).ready(function() {
  $("form#food").submit(function(event) {
    const age = parseInt($("input#age").val());
      event.preventDefault();
    if (age < 30) value = 2, {

    }
    else if (age > 31) value =3, {

      }
    const flavor = parseInt($("select#flavor").val());
    const food = parseInt($("select#food").val());
    
    if (1) {
      let quote = (flavor + food + age);
      if (quote === 6) {
        show(message2);
      }
    else if (quote < 6) {
      show(message1);
    }
    else {
      show(message3);
    }
  
  }

  });
    

});