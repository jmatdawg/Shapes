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


document.addEventListener("DOMContentLoaded", function(event) {

    let randomInRange = (min = 0, max = 600) =>{
    return(Math.floor((Math.random() * (max - min) + 1) + min))
};
{
class Shape{
    constructor(name){
         this.name = name;
     }
    render() {
    }
 }

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
        cirlceDiv.style.left = `${randomInRange}px`;
        circleDiv.style.top = `${randomInRange}px`;
        container.appendChild(circleDiv);
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
        cirlceDiv.style.left = `${randomInRange}px`;
        circleDiv.style.top = `${randomInRange}px`;
        container.appendChild(triangleDiv);  
    }
 }
 triangleButton.addEventListener('click', function() {
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
        cirlceDiv.style.left = `${randomInRange}px`;
        circleDiv.style.top = `${randomInRange}px`;
        container.appendChild(squareDiv);  
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
        cirlceDiv.style.left = `${randomInRange}px`;
        circleDiv.style.top = `${randomInRange}px`;
        container.appendChild(rectangleDiv);
    }
 }
rectangleButton.addEventListener('click', function() {
    let newRectangle = new rectangleShape(rectangleInputl.value, rectangleInputw.value);
    newRectangle.createRectangle();
})
});


