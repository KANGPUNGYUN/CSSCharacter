
var c = document.getElementById("upperlip");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "rgb(255, 209, 188)";
ctx.lineWidth = 10;
ctx.arc(150, 150, 150, (Math.PI/180)*100, (Math.PI/180)*409, true);
ctx.fill();
ctx.stroke();

// ctx.strokeStyle 테두리 스타일
// ctx.fillStyle 배경 테두리
// ctx.lineWidth 테두리 두께
// ctx.arc(x, y, 반지름, 시작, 마무리, [true: 안쪽, false:바깥쪽]);
// ctx.fill() 위에서 설정한 배경 실행
// ctx.stroke() 위에서 설정한 테두리 실행
