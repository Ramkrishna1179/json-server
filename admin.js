async function AddPost() {
  let id = document.getElementById("id").value;
  id = Number(id);
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  // let send_this_data ={
  //   name:name,
  //   email:email,
  //   number:number
  // }

  // If the name and value of the objerct id same then we also right like this.
  let send_this_data = {
    id,
    name,
    email,
  };

  let res = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(send_this_data),
    headers: { "Content-Type": "application/json" },
  });

  let data = await res.json();
  console.log(data);
}

async function Delete_post() {
  let id = document.getElementById("delete_post").value;

  let res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  let data = await res.json();
  console.log(data);
}


async function UpdatePost(){



}