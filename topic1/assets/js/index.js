function request(url, config) {
    return new Promise(function(resolve, reject){
        fetch(url, config)
            .then(function(response)  {
                return response.json(); 
            })
            .then(function(response) {
                resolve(response);
            })
            .catch(function(error){
                reject(error);
            });
    })    
}

function append(string) {
    $('.js-joke-container')
        .empty()
        .append(string);
}

$(document).ready(function(){
    $("#not-visible").hide();
    $("#not-visible").fadeIn(500);
    $("#not-visible").fadeOut(500);

    $('#joke').on('click', function(e) {
        request('http://api.icndb.com/jokes/random')
            .then(function(response){
                console.log(response)
                append(response.value.joke);
            })
            .catch(function(error){
                document.body.style.backgroundColor = "red";
                console.log(error);
            });
    });
});