class Box {
    constructor(x, y, width, height) {
     
      this.body = Bodies.rectangle(x, y, width, height );
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
          console.log(this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          rect(350,650, this.width, this.height);
          
      
       
        } 
    }

   