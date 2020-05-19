function setup() {
    let canvas = createCanvas(900, 500);
    canvas.parent('container')

    strokeWeight(5)
    noFill()
    randomize()
    canvas.mouseClicked(randomize)
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomize(){
  let hue = randomIntFromInterval(0,360)

    colorMode(HSL)

    background(hue,40,90);
    stroke(hue,40,50)


    let sizes = [8,12,16,20,24]

    let divide = sizes[Math.floor(Math.random() * sizes.length)]

    strokeWeight(map(divide,8,24,10,5))

    let xlength = max(width,height)/divide
    let ylength = max(width,height)/divide

    for (let x = 0; x < divide; x++) {
      for (let y = 0; y < divide; y++) {
        let x1 = xlength*x
        let y1 = ylength*y
        let x2 = x1+xlength
        let y2 = y1+ylength
        if(Math.random() > 0.5){
          arc(x1,y1,xlength,ylength,0,PI/2)
          arc(x2,y2,xlength,ylength,PI,PI+PI/2)
        } else {
          arc(x1,y2,xlength,ylength,PI+PI/2,TAU)
          arc(x2,y1,xlength,ylength,PI/2,PI)
        }
      }
    }
}