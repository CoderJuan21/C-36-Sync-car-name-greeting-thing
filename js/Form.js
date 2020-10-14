class Form{
    constructor(){

    }

    display(){
        var title = createElement('h1');
        title.html("Multiplayer Car Racing Game");
        title.position(130,10);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("Play");
        button.position(250,200);

        var greeting = createElement("h3")
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hell0" + name);
            greeting.position(130,160);
        })

        
       
    }
}