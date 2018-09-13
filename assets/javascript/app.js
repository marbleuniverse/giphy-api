$(document).ready(function(){
    var characters = ["Darth Vader", "Luke Skywalker", "Princess Leia", "Han Solo", "Stormtrooper"];
    console.log(characters)
    function displayCharacter() {
        var character = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=c1gcRNrJcc9jUuU8SK7wo2xJNXZwlRji";
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            $("starwarsview").empty();
            
            var results = response.data;

            for(var i = 0; i < results.length; i++){

            var characterDiv = $("<div>");

            var rating = results[i].rating;
            var p = $("<h2>").text("Rating: " + rating);

            characterDiv.addClass("characterpicture");

            characterDiv.prepend(characterpicture);
            $("starwarsview").prepend(characterDiv);
            characterDiv.prepend(p);
            }
        });
    }

    function renderButtons(){
        $("#starwarsbuttons").empty();
        for(var i = 0; i <characters.length; i++) {
            var characterAdd = $("<button>");
            characterAdd.addClass("character");
            characterAdd.attr("name", characters[i]);
            characterAdd.text(characters[i]);
            $("#starwarsbutton").append(characterAdd);
        }
    }
    $("#add-starwars").on("click", function(event){
        event.preventDefault();
        var character = $("#starwars-input").val().trim();
        characters.push(character);
        renderButtons();
    })

    $(document).on("click", ".character", displayCharacter);
    renderButtons();

});

