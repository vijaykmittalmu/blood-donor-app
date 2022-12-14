export const setBorder = function (
  borderWidth = 1,
  borderStyle = "solid",
  borderColor = "#ccc"
) {
  return `${borderWidth}px ${borderStyle} ${borderColor}`;
};
