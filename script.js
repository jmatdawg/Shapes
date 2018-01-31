let container = document.getElementById('container');
let circleButton = document.getElementById('circleButton');
let circleInput = document.getElementById('circleInput');
let triangleButton = document.getElementById('triangleButton');
let triangleInput = document.getElementById('triangleInput')
let squareButton = document.getElementById('squareButton');
let squareInput = document.getElementById('squareInput');
let rectangleButton = document.getElementById('rectangleButton');
let rectangleInputl = document.getElementById('rectangleInputl');
let rectangleInputw = document.getElementById('rectangleInputw');
let width = document.getElementById('width');
let height = document.getElementById('height');
let radius = document.getElementById('radius');
let area = document.getElementById('area');
let perimeter = document.getElementById('perimeter');
let shapeName = document.getElementById('shapeName');

// put these above in dom content loaded,  because the DOM doesn't always load fast enough. Still "let =container" to access those variables outside the DOM, but grab it by id in the DOM without let.
let targetShape;
let targetWidth;
let targetHeight;
let targetRadius;
let targetArea;
let targetPerimeter;

document.addEventListener("DOMContentLoaded", function(event) {
    let randomInRange = (min = 0, max = 500) =>{
    return(Math.floor((Math.random() * (max - min) + 1) + min))
};

{
class Shape{
    constructor(name){
         this.name = name;
     }
    describe() {
        shapeName.innerText = `Shape Name: ${targetShape}`;
        width.innerText = `Width: ${targetWidth}`;
        height.innerText = `Height: ${targetHeight}`;
        radius.innerText = `Radius: ${targetRadius}`;
        area.innerText = `Area: ${targetArea}`;
        perimeter.innerText = `Perimeter: ${targetPerimeter}`;
    }
}
//  } needs a render function and the last line is appendChild. createElement, className= what we passed in constructor so this.name, this.shape=createElement, etc
// create onclick in html and create the function in js
//cal; this.render to call function in big shape once all. 
//create a random method for pos and add that to render
//call render in each child class
//when each child class function is called, thats when you do the input
//create get area function in parent class
    // get area() {
    //     swith (this.type) {
    //         case: 'triangle' :
                    // return this.height**2 /2
    //         case: 'rectangle' :
                    //return this.height * this.width etc
            // default:
            //        return     
    //     }
    // } do one for perimeter, radius, etc.

    inside describe: set .innerText to this.

 class circleShape extends Shape {
    constructor(radius){
        super('circle');
        this.radius = radius;
    }
    createCircle() {
        let circleDiv = document.createElement('div');
        circleDiv.className = "circle";
        circleDiv.style.height = `${this.radius * 2}px`
        circleDiv.style.width  = `${this.radius * 2}px`
        circleDiv.style.left = `${randomInRange()}px`;
        circleDiv.style.top = `${randomInRange()}px`;
        container.appendChild(circleDiv);
        circleDiv.addEventListener('click', () => {
            this.getCircleStats();
            this.describe();
        }) 
        circleDiv.addEventListener('dblclick', () => {
            circleDiv.remove();
            })
    }
     getCircleStats() {
        targetShape = this.name;
        targetWidth = this.radius * 2;
        targetHeight = this.radius * 2;
        targetRadius = this.radius;
        targetArea = Math.PI * this.radius**2;
        targetPerimeter = 2 * Math.PI * this.radius;
    }
 }
    circleButton.addEventListener('click', function() {
    let newCircle = new circleShape(circleInput.value);
    newCircle.createCircle();
})

 class triangleShape extends Shape {
    constructor(height){
        super('triangle');
        this.height = height;  
    }
    createTriangle() {
        let triangleDiv = document.createElement('div');
        triangleDiv.className = "triangle";
        triangleDiv.style.borderBottom = `${this.height}px solid transparent`;
        triangleDiv.style.borderRight = `${this.height}px solid yellow`;
        triangleDiv.style.left = `${randomInRange()}px`;
        triangleDiv.style.top = `${randomInRange()}px`;
        container.appendChild(triangleDiv);
        triangleDiv.addEventListener('click', () => {
            this.getTriangleStats();
            this.describe();
        }) 
        triangleDiv.addEventListener('dblclick', () => {
            triangleDiv.remove();
            })
    }
     getTriangleStats() {
        targetShape = this.name;
        targetWidth = this.height;
        targetHeight = this.height;
        targetRadius = 0.5 * (2-Math.sqrt(2)) * this.height;
        targetArea = 0.5 * this.height * this.height;
        targetPerimeter = 2 * this.height * Math.sqrt(2 * this.height * this.height);
    }
 }
    triangleButton.addEventListener('click', () => {
    let newTriangle = new triangleShape(triangleInput.value);
    newTriangle.createTriangle();
 })

 class squareShape extends Shape {
    constructor(sideLength){
        super('square');
        this.sideLength = sideLength;  
    }
    createSquare() {
        let squareDiv = document.createElement('div');
        squareDiv.className = "square";
        squareDiv.style.height = `${this.sideLength}px`
        squareDiv.style.width  = `${this.sideLength}px`
        squareDiv.style.left = `${randomInRange()}px`;
        squareDiv.style.top = `${randomInRange()}px`;
        container.appendChild(squareDiv);
        squareDiv.addEventListener('click', () => {
            this.getSquareStats();
            this.describe();
        }) 
        squareDiv.addEventListener('dblclick', () => {
            squareDiv.remove();
            })
    }
    getSquareStats() {
        targetShape = this.name;
        targetWidth = this.sideLength;
        targetHeight = this.sideLength;
        targetRadius = 0.5 * this.sideLength;
        targetArea = this.sideLength**(2);
        targetPerimeter = 4 * this.sideLength;
    }
 }
    squareButton.addEventListener('click', function() {
    let newSquare = new squareShape(squareInput.value);
    newSquare.createSquare();
 }) 
 
class rectangleShape extends Shape {
    constructor(length, width){
        super('rectangle');
        this.length = length;
        this.width = width;
    }
    createRectangle() {
        let rectangleDiv = document.createElement('div');
        rectangleDiv.className = "rectangle";
        rectangleDiv.style.height = `${this.length}px`;
        rectangleDiv.style.width  = `${this.width}px`;
        rectangleDiv.style.left = `${randomInRange()}px`;
        rectangleDiv.style.top = `${randomInRange()}px`;
        container.appendChild(rectangleDiv);
        rectangleDiv.addEventListener('click', () => {
            this.getRectangleStats();
            this.describe();
        }) 
        rectangleDiv.addEventListener('dblclick', () => {
            rectangleDiv.remove();
            })
    }
    getRectangleStats() {
        targetShape = this.name;
        targetWidth = this.width;
        targetHeight = this.length;
        targetRadius = Math.sqrt((this.width * this.width) + (this.length * this.length)) / 2;
        targetArea = this.width * this.length;
        targetPerimeter = (2 * this.length) + (2 * this.width);
    }
 }
rectangleButton.addEventListener('click', function() {
    let newRectangle = new rectangleShape(rectangleInputl.value, rectangleInputw.value);
    newRectangle.createRectangle();
})
}});


