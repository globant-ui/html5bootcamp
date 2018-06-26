$(document).ready(function(){
    $("#not-visible").hide();
    $("#not-visible").fadeIn(500);
    $("#not-visible").fadeOut(500);

    $('#joke').on('click', function(e) {
        fetch('http://api.icndb.com/jokes/random')

            .then(function(response)  {
                return response.json(); 
            })
            .then(function(joke) {
                $('.js-joke-container')
                    .empty()
                    .append(joke.value.joke);
            })
            .catch(error => console.log(error));
    })
});


    
