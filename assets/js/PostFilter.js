---
---
function filter(category) {
  console.log("Called: " + category);
  let list = document.getElementById("postList");
  let posts = list.children;
  for(let i = 0; i < posts.length; ++i){
    console.log(posts[i]);
    if(category === "All" || posts[i].dataset.category === category){
      posts[i].style.display = "block";
    }
    else if(posts[i].dataset.category !== category){
      posts[i].style.display = "none";
    }
  }
};