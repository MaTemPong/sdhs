// const data: number[] = [1, 2, 3, 4, 5];
// const mixData: (number | string)[] = [1, 2, 3, 4, "5"];
// const mapData = data.map((v) => {
//   return v;
// });

// //1번째 type과 interface 차이
// //1
// type Color = string;
// type MyType = {color:Color};

// interface MyInterface {
//   color: string;
// }
// const MyData2: MyInterface = {color: 'red'}

//2번째 type과 interface 차이
type OpacityData = { opacity: number };
type MyType = { color: string };
// | > or
// & > and
type MyMixtype = MyType & OpacityData;
//MyType 또는 OpacityData
const data: MyMixtype = { color: "red", opacity: 1 };

interface Human {
  name: string;
  old: number;
}

interface HJ extends Human {
  job: string;
}

const hj: HJ = { name: "hj", old: 23, job: "developer" };

// const mixMapData = data.map((v) => {
//   const temp = v;
//   const toStringData = String(temp);
//   return toStringData.length;
// });
