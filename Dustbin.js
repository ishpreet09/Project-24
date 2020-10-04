class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=100;
		this.thickness=20;
		this.angle=0;	
		
		this.bottom=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true})
		this.left=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true})
		Matter.Body.setAngle(this.left, this.angle);
		

		this.right=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true})
		Matter.Body.setAngle(this.right, -1*this.angle);
		World.add(world, this.bottom)
		World.add(world, this.left)
		World.add(world, this.right);

	}
	display()
	{
			var posBottom=this.bottom.position;
			var posLeft=this.left.position;
			var posRight=this.right.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			stroke(255)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			stroke(255)
			fill(255)
			rect(0,0,this.width, this.thickness);
			pop()
			
	}

}