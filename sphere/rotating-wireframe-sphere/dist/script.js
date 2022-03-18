// `width` and `height` refer to window width and height.
var camera, scene, renderer, width, height;
var sphere;

function start(){
  var geometry = new THREE.SphereGeometry( 1, 10, 10 );
  var material = new THREE.MeshBasicMaterial( { color: "purple", wireframe: true } );
  sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );
  
  camera.position.z = 5;
  
  // Kick off update loop
  update();
}







// Everything below this point is self-contained!

function update(){
  //sphere.rotation.x += 0.02;
  sphere.rotation.y += 0.02;
  
  
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}

// THREEjs template
// Combines Unity-like function names with threejs functionality.
//
// HOW
//    OnEnable and Start are called to set up the scene, while Update runs every frame.

function onEnable() {

  width = window.innerWidth;
  height = window.innerHeight;

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("scene"),
    antialias: true,
    alpha: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
  camera.position.set(0, 0, 500);
  scene.add(camera);
    
  maxHeight = 500;
}

onEnable();
start();