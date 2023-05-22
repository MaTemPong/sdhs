const data: number[] = [1, 2, 3, 4, 5];
const mixData: (number | string)[] = [1, 2, 3, 4, "5"];
const mapData = data.map((v) => {
  return v;
});

const mixMapData = data.map((v) => {
  const temp = v;
  const toStringData = String(temp);
  return toStringData.length;
});
