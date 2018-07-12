const app = "I don't do much.";

const token = '406c9f707b5ad108d492e15b4cab0b8bdb7b70ff '
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
