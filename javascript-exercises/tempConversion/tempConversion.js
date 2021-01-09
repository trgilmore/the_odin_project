const ftoc = function(far) {
  let tcels = (far - 32)*(5/9);
  let cels = Math.round(tcels * 10) / 10;
  return cels;
}

const ctof = function(cels) {
  let tfar = (cels *(9/5) + 32);
  let far = Math.round(tfar * 10) / 10;
  return far;

}

module.exports = {
  ftoc,
  ctof
}
