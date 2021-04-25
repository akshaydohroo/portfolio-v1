const userName = "akshaydohroo";
const url = "https://api.github.com/users/" + userName;
(async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
})().then((data) => {
  console.log(data);
  let avatar_img = document.querySelector(".avatar_image");
  let image = document.createElement("img");
  image.setAttribute("src", data.avatar_url);
  image.setAttribute("alt", "Profile Image on Github");
  avatar_img.appendChild(image);
  console.log();
});
(async () => {
  let response = await fetch(url + "/repos");
  let data = await response.json();
  return data;
})().then((data) => {
  console.log(data);
  let repos = document.querySelector(".repos");
  data.forEach((element, idx) => {
    let repo = document.createElement("a");
    repo.classList.add('card');
    repo.setAttribute("href",element.html_url);
    let heading = document.createElement("h1");
    heading.textContent = element.name;
    repo.appendChild(heading);
    let security = document.createElement("h5");
    security.textContent = element.private?"private":"public";
    repo.appendChild(security);
    if(element.description){
      let desc = document.createElement("h4");
      desc.textContent = (element.description).substring(0,Math.min(90,element.description.length));
      if(desc.textContent/length==50) desc.textContent = desc.textContent+".....";
      desc.style.marginTop = "auto";
      desc.style.marginBottom = "auto";
      repo.appendChild(desc);
    }
    if(element.forks){
      let forks = document.createElement("h5");
      forks.textContent = "forks" + element.forks;
      repo.appendChild(forks);
    }

    repos.appendChild(repo);
  });
});
