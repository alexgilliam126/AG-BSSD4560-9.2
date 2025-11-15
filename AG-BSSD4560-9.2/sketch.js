
let cp;

function setup() {
  createCanvas(600, 400);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);

  cp = new ColorPalette();

  cp.findAnalogues();
  let analogues = [cp.col1, cp.col2];

  cp.findComplement();
  let complement = cp.col1;

  cp.findMonochromes();
  let monochromes = [cp.col1, cp.col2];

  drawPaletteLayout(cp.baseColor, analogues, complement, monochromes);
}

function drawPaletteLayout(baseColor, analogues, complement, monochromes) {
  background(0);

  fill(baseColor);
  rect(0, 0, width, height / 3);

  fill(analogues[0]);
  rect(0, height * (2 / 3), width / 4, height / 3);

  fill(analogues[1]);
  rect(width / 4, height * (2 / 3), width / 4, height / 3);

  fill(complement);
  rect(width / 4, height / 3, width / 2, height * (2 / 3));

  fill(monochromes[0]);
  rect(width * (3 / 4), height * (2 / 3), width / 4, height / 3);

  fill(monochromes[1]);
  rect(width * (3 / 4), height / 3 * 2.33, width / 4, height / 3); 
}
