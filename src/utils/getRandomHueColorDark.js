import { getRandomInt } from 'utils';
export const getRandomHueColorDark = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(getRandomInt(20, 100)) + '%';
  const lightness = Math.floor(getRandomInt(40, 50)) + '%';
  return 'hsl(' + hue + ', ' + saturation + ', ' + lightness + ')';
};
