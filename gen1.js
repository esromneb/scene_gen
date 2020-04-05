const Prando = require('prando');
const deepcopy = require('deepcopy');


const seed = 1432444;

const rng = new Prando(seed);


// for(let i = 0; i < 10; i++) {
//   let num = rng.nextInt(0,2);
//   console.log(num);
// }
// return;



const others = JSON.parse('{   "camera": {     "loc": [5, 0, 4],     "dir": [-1, 0, -0.4],     "rot": [0, 0, 1],     "depth": 6   },   "global": {     "ambient_color": [1.53, 1.53, 1.53],     "c": 1   },   "lights": [{     "dir": [-0.4, 0, -1],     "color": [7.91, 7.91, 7.91]   } ] } ');

const ps = JSON.parse('{"rad": 0.8,"loc": [-19, 0, 0],"ambient": 0.1,"specular": 1.5,"reflected": 1,"transmitted": 0.0,"diffuse": [0.0, 0.0, 0.0],"n": 40}');

const scene = deepcopy(others);
scene.spheres = [];

let z = 0;



for(let x = -40; x < 0; x+=3) {

  let yStart = -7;

  if( x < -10 ) {
    yStart = -12;
  } else if( x > -5 ) {
    yStart = -7 + 3;
  }

  for(let y = yStart; y < -yStart; y+=3) {
    const s = deepcopy(ps);

    let ym = (((x+1000) / 2.5) % 0.9) + y;

    s.loc = [x,ym,z];
    if( true ) {
      s.diffuse = [rng.next(),rng.next(),rng.next()];
    }
    if( false ) {
      let colors=[[1,0,0],[0,1,0],[0,0,1]];
      s.diffuse = colors[rng.nextInt(0,2)];
    }



    scene.spheres.push(s);



  }
}



// const p1 = deepcopy(ps);

// console.log(p1);
// console.log(others);
// console.log(scene);


console.log(JSON.stringify(scene, null, 1));
// console.log('Have ' + scene.spheres.length + ' spheres');
