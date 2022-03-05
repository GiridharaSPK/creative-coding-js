const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';

    const x = width*0.5;
    const y = height*0.5;
    const w = width*0.3;
    const h = height*0.3;

    // context.save();

    context.translate(x,y)
    context.rotate(degToRad(45))

    context.beginPath();
    
    // context.rect(x,y,w,h);
    context.rect(-w/2,-h/2,w,h);
    context.fill();
    // context.restore();

    context.translate(100, 300);


    context.beginPath();
    context.arc(0,0,50,0,Math.PI*2);
    context.fill();

  };
};

const degToRad = (degrees) => {
  return degrees * Math.PI /180
}


canvasSketch(sketch, settings);
