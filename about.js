const api_url = "https://randomuser.me/api";
let users = [];
let dataArray = [];

async function getapi(url) {
  const response = await fetch(url); //store
  var data = await response.json();
  const { results } = data;

  users = results;

  console.log("danish", data);
  await users.map((item, index) => {
    console.log(item);

    dataArray.push(
      item.name.title + " " + item.name.first + " " + item.name.last
    );
  });
  console.log(results);
  if (response) {
    hideloader();
  }

  show(data);
}
for (i = 0; i < 10; i++) {
  getapi(api_url);
  dataArray.push();
}

console.log(dataArray);s
async function hideloader() {
  for (let i = 0; i < dataArray.length; i++) {
    const li = document.createElement("li");
    const text = document.createTextNode("");
    li.innerHTML = dataArray[i];
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
  }
}
 