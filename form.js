class Form{
    constructor(){

    }

    display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(460, 100);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(490, 250);
    button.position(520, 290);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(520, 290)
    });

  }

    }
