const api_url = "https://randomuser.me/api";
// let users = [];
let dataArray = [];
getapi(api_url);
async function getapi(url) {
  for (i = 0; i < 10; i++) {
    const response = await fetch(url); //store
    var data = await response.json();
    const { results } = data;

    // users = results;
    // await users.map((item, index) => {
    // console.log(item);

    dataArray.push(
      results[0].name.title +
        " " +
        results[0].name.first +
        " " +
        results[0].name.last
    );
  }
  // console.log(results);
  // if (response)
  hideloader();

  //  show(data);
}
//  {
//   getapi(api_url);
//   dataArray.push();
// }

// console.log(dataArray);s
async function hideloader() {
  for (let i = 0; i < dataArray.length; i++) {
    const li = document.createElement("li");
    const text = document.createTextNode("");
    li.innerHTML = dataArray[i];
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
  }
}
