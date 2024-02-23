// const data = {
//   id: 1043,
//   login: "user1234",
//   pass: "1qazxsw2",
//   role: "Admin",
//   //   go() {
//   //     console.log("go");
//   //   },
// };

// const jsonData = JSON.stringify(data);
// console.log(jsonData);
///////////////////////////////////////////

// const roleField = "roleName";
// const data = {
//   id: 1043,
//   login: "user1234",
//   pass: "1qazxsw2",
//   [roleField]: "Admin",
//   go() {
//     console.log("go");
//   },
//   test1: {
//     test2: 123,
//   },
// };

// // const jsonData = JSON.stringify(data, (key, value) => {
// //   console.log(key, value);
// //   return value;
// // });
// // console.log(jsonData);

// const jsonData = JSON.stringify(
//   data,
//   (key, value) => {
//     if (key === roleField) {
//       return null;
//     }
//     if (typeof value === "string") {
//       return value.toUpperCase();
//     }
//     if (typeof value === "number") {
//       return value * 10;
//     }
//     return value;
//   },
//   1
// );
// console.log(jsonData);
///////////////////////////////////////////

// const roleField = "roleName";
// const data = {
//   id: 1043,
//   login: "user1234",
//   pass: "1qazxsw2",
//   [roleField]: "Admin",
//   go() {
//     console.log("go");
//   },
//   test1: {
//     test2: 123,
//   },
// };

// // // const jsonData = JSON.stringify(data, (key, value) => {
// // //   console.log(key, value);
// // //   return value;
// // // });
// // // console.log(jsonData);

// const jsonData = JSON.stringify(
//   data,
//   (key, value) => {
//     if (key === roleField) {
//       return "Admin";
//     }
//     if (typeof value === "string") {
//       return value.toUpperCase();
//     }
//     if (typeof value === "number") {
//       return value * 10;
//     }
//     return value;
//   },
//   1
// );
// console.log(jsonData);

// const parseData = JSON.parse(jsonData, (key, value) => {
//   if (key === roleField) {
//     return "Admin";
//   }
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }
//   if (typeof value === "number") {
//     return value / 10;
//   }
//   return value;
// });
// console.log(parseData);
///////////////////////////////////////////

// const url = new URL("/path", "https://www.example.com/");

// console.log(url);

// const url = new URL("https://www.example.com/path");

// const url = new URL("mailto:user@gmail.com");

// console.log(url.href);
// console.log(url.protocol);
// console.log(url);

// mailto: user@gmail.com;

// const url = new URL(
//   "https://www.example.com/catalog/category-1/product-name/info"
// );
// console.log(url.pathname);

// const url = new URL(
//   "https://www.example.com/catalog/category-1/product-name/info"
// ).origin;
// console.log(url);
// console.log(url.origin);

// const url = new URL(
//   "https://www.example.com:4000/catalog/category-1/product-name/info"
// ).hostname;
// console.log(url);

// const url = new URL(
//   "https://www.example.com:4000/catalog/category-1/product-name/info#how-to-do"
// ).hash;
// console.log(url.slice(1));

// const url = new URL(
//   "https://admin:1234-5678@www.example.com:4000/catalog/category-1/product-name/info#how-to-do"
// ).password;
// console.log(url);

// const url = new URL(
//   "https://admin:1234-5678@www.example.com:4000/catalog/category-1/product-name/info#how-to-do"
// ).port;
// console.log(url);

// const url = new URL(
//   "https://admin:1234-5678@www.example.com:4000/catalog/category-1/product-name/info#how-to-do"
// ).username;
// console.log(url);

// const url = new URL(
//   "https://www.google.com/search?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyDQgDEC4YrwEYxwEYgAQyBwgEEC4YgAQyBwgFEAAYgAQyBwgGEC4YgAQyBwgHEC4YgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQgxODU1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
// ).search;
// console.log(url);

// const url = new URL(
//   "https://www.google.com/search?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyDQgDEC4YrwEYxwEYgAQyBwgEEC4YgAQyBwgFEAAYgAQyBwgGEC4YgAQyBwgHEC4YgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQgxODU1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
// ).searchParams;
// console.log(url);

// const mainUrl = new URL(
//   "https://www.google.com/search?q=hello&hello&oq&hello&gs_lcrp=helloWorldEgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyDQgDEC4YrwEYxwEYgAQyBwgEEC4YgAQyBwgFEAAYgAQyBwgGEC4YgAQyBwgHEC4YgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQgxODU1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
// );

// const url = mainUrl.searchParams;

// console.log(url.has("q"));
// console.log(url.append("name", "google"));

// console.log(url);

// // console.log(url.get("name"));
// console.log(url.getAll("q"));

// url.sort();

// console.log(url);

// console.log(mainUrl);

const url = new URL("https://www.google.com/search");

url.searchParams.append("q", "cat photo");
console.log(url.href);

decodeURI;
