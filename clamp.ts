// f(x) = mx + b
// y - mx = b

type Point = [number, number];

function clamp(
  [screenMin, fontSizeMin]: Point,
  [screenMax, fontSizeMax]: Point,
  unit: string
) {
  const dFontSize = Math.abs(fontSizeMax - fontSizeMin);
  const dScreenSize = Math.abs(screenMax - screenMin);
  const slope = dFontSize / dScreenSize;

  // Slope intercept equation is y = mx + b, where:
  // x ~> screen size
  // y ~> font size
  // m ~> slope
  // b ~> y intercept
  // We know everything except b, so we'll plug one of our known
  // points into the equation and solve for b
  const yIntercept = fontSizeMin - slope * screenMin;

  let resSlope = slope * 100;
  resSlope = Math.round(resSlope * 10000) / 10000;
  let resIntercept = Math.round(yIntercept * 10000) / 10000;

  return `${resSlope}vw + ${resIntercept}${unit}`;
}

const min: Point = [400, 0];
const max: Point = [960, -1];

console.log(`clamp(${min[1]}px, ${clamp(min, max, "px")}, ${max[1]}px)`);
