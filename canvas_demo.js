var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight
console.log(canvas);

var magic_paintbrush = canvas.getContext('2d')

magic_paintbrush.fillStyle = "black";
magic_paintbrush.fillRect(100, 100, 100, 100);
magic_paintbrush.fillStyle = "grey";
magic_paintbrush.fillRect(150, 150, 100, 100);
magic_paintbrush.fillStyle = "darkgrey";
magic_paintbrush.fillRect(200, 200, 100, 100);
magic_paintbrush.fillStyle = "lightgrey";
magic_paintbrush.fillRect(250, 250, 100, 100);

// end of first video

/*
  Summary: Created a canvas as big as the
  entire screen, and created multiple
  objects within that canvas space.
*/

magic_paintbrush.beginPath();
magic_paintbrush.moveTo(20,20);
magic_paintbrush.lineTo(450,450);
magic_paintbrush.lineTo(600,300);
magic_paintbrush.strokeStyle = "lightpink";
magic_paintbrush.stroke();


/*13:00 video 2, why didn't my Math.random()
work to change the positions of x and y?*/

for (var i = 0; i < 3; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
magic_paintbrush.beginPath();
magic_paintbrush.arc(450, 350, 40 , 0,
  Math.PI * 2, false);
// magic_paintbrush.strokeStyle = "orange";
magic_paintbrush.stroke();
}
