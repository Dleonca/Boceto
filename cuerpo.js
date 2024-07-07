function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    roundedRect(ctx, 12, 12, 250, 565, 15);
    // Definir las coordenadas y las dimensiones del óvalo
    var centerX = 104; // Coordenada X del centro del óvalo
    var centerY = 63; // Coordenada Y del centro del óvalo
    var radiusX = 30; // Radio horizontal del óvalo
    var radiusY = 23; // Radio vertical del óvalo
    var rotation = 11; // Rotación del óvalo en radianes
    var startAngle = 0; // Ángulo de inicio en radianes
    var endAngle = 2 * Math.PI; // Ángulo final en radianes (un círculo completo)

    // Dibujar el óvalo cabeza
    ctx.beginPath();
    ctx.ellipse(
      centerX,
      centerY,
      radiusX,
      radiusY,
      rotation,
      startAngle,
      endAngle
    );
    // Definir el color de relleno
    //ctx.fillStyle = "#4F3125";
    // Rellenar la elipse
    //ctx.fill();
    ctx.strokeStyle = "#4F3125"; 
    // Dibujar el contorno de la elipse
    ctx.stroke();
    //----------------------------------------------------
    //Primero
    bezierCurveDraw(ctx, 84, 100, 155, 96, 150, 95, 110, 160, "#4F3125","#4F3125");
    //segundo
    bezierCurveDraw(ctx, 110, 160, 105, 162, 128, 202, 135, 200, "#4F3125","#4F3125");
    //Tercero
    bezierCurveDraw(ctx, 90, 230, 95, 210, 110, 200, 135, 200, "#4F3125","#4F3125");
    //Cuarto
    bezierCurveDraw(ctx, 70, 180, 60, 200, 60, 210, 90, 230, "#4F3125","#4F3125");
    //quinto
    bezierCurveDraw(ctx, 70, 180, 72, 180, 80, 150, 78, 150, "#4F3125","#4F3125");
    //sexto
    bezierCurveDraw(ctx, 78, 150, 75, 120, 72, 130, 85, 115, "#4F3125","#4F3125");
    //septimo
    bezierCurveDraw(ctx, 80, 120, 79, 105, 79, 110, 84, 100, "#4F3125","#4F3125");
    //octavo   ---piernas
    bezierCurveDraw(ctx, 80, 295, 62, 240, 60, 230, 64, 200, "#4F3125","#4F3125");
    //noveno
    bezierCurveDraw(ctx, 85, 345, 75, 300, 78, 250, 90, 230, "#4F3125","#4F3125");
    //decimo
    bezierCurveDraw(ctx, 120, 300, 135, 280, 150, 230, 134, 200, "#4F3125","#4F3125");
    //undecimo
    bezierCurveDraw(ctx, 86, 346, 110, 340, 110, 320, 120, 300, "#4F3125","#4F3125");
    //12
    bezierCurveDraw(ctx, 65, 490, 68, 480, 82, 340, 82, 330, "#4F3125","#4F3125");
    //13
    bezierCurveDraw(ctx, 75, 490, 120, 390, 90, 360, 108, 330, "#4F3125","#4F3125");
    //14
    bezierCurveDraw(ctx, 122, 475, 120, 430, 115, 400, 100, 370, "#4F3125","#4F3125");
    //15
    bezierCurveDraw(ctx, 135, 475, 132, 410, 140, 360, 120, 330, "#4F3125","#4F3125");
    //16
    bezierCurveDraw(ctx, 102, 350, 120, 340, 135, 290, 135, 270, "#4F3125","#4F3125");
    //17  --brazo
    bezierCurveDraw(ctx, 140, 110, 133, 110, 190, 260, 192, 260, "#4F3125","#4F3125");
    //18
    bezierCurveDraw(ctx, 144, 175, 145, 210, 175, 220, 180, 260, "#4F3125","#4F3125");
    //19
    bezierCurveDraw(ctx, 126, 133, 120, 135, 142, 175, 144, 175, "#4F3125","#4F3125");
    //20
    bezierCurveDraw(ctx, 126, 100, 120, 110, 120, 120, 124, 134, "#4F3125","#4F3125");
    //21 cuello
    bezierCurveDraw(ctx, 115, 88, 118, 90, 110, 93, 120, 100, "#4F3125","#4F3125");   
    //22 cuello
    bezierCurveDraw(ctx, 90, 88, 92, 88, 98, 90, 100, 100, "#4F3125","#4F3125"); 
  
    //------ Opcional: Dibujar los puntos de control para visualización------------------------

    /*  ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(126, 100, 2, 0, 2 * Math.PI); // Punto de inicio
    ctx.fill();
    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.arc(120, 110, 2, 0, 2 * Math.PI); // Primer punto de control
    ctx.fill();
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(120, 120, 2, 0, 2 * Math.PI); // Segundo punto de control
    ctx.fill();
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(176, 130, 2, 0, 2 * Math.PI); // punto final
    ctx.fill();*/
  }
}

// Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

// Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.

function bezierCurveDraw(ctx, IpX, IpY, fpX, fpY, spX,spY, epX, epY, colorS,colorF) {
  ctx.beginPath();
  ctx.moveTo(IpX, IpY);
  ctx.bezierCurveTo(fpX, fpY, spX,spY, epX, epY);
  ctx.strokeStyle = colorS; //contorno
  ctx.stroke();
 /* ctx.fillStyle = colorF ;//"#4F3125" - relleno
  ctx.fill();*/
}
