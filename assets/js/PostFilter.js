---
---
function filter(category) {
  let list = document.getElementById("postList");
  let posts = list.children;
  for(let i = 0; i < posts.length; ++i){
    if(category === "All" || posts[i].dataset.category === category){
      posts[i].style.display = "block";
    }
    else if(posts[i].dataset.category !== category){
      posts[i].style.display = "none";
    }
  }
};