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

async function Read_Data() {
  let res = await fetch(`http://localhost:3000/posts/`);
  let data = await res.json();
  let tbdy = document.getElementById("tbdy");
  data.map((data1) => {
    let tr = document.createElement("tr");
    let id_td = document.createElement("td");
    id_td.innerHTML = data1.id;

    let id_name = document.createElement("td");
    id_name.innerHTML = data1.name;

    let id_email = document.createElement("td");
    id_email.innerHTML = data1.email;

    let id_update = document.createElement("td");
    id_update.innerHTML = "Update";
    id_update.setAttribute("type","Button")
    id_update.addEventListener("click", UpdatePost);
    id_update.setAttribute("data-bs-toggle", "modal");
    id_update.setAttribute("data-bs-target", "#staticBackdrop");

    tr.append(id_td, id_name, id_email, id_update);
    tbdy.append(tr);
  });
}

async function UpdatePost(event) {
  let TargetedID =
    event.target.previousElementSibling.previousElementSibling
      .previousElementSibling.innerHTML;
  TargetedID = Number(TargetedID);
  let res = await fetch(`http://localhost:3000/posts/${TargetedID}`);
  let data = await res.json();
  let id1 = document.getElementById("id1");
  id1.value = data.id;

  let name1 = document.getElementById("name1");
  name1.value = data.name;

  let email1 = document.getElementById("email1");
  email1.value = data.email;
  console.log(data);

  //  let updateOnServer =5
}

async function PostUpdatetdData() {
  let id = document.getElementById("id1").value;
  let name = document.getElementById("name1").value;
  let email = document.getElementById("email1").value;

  let updatedData = {
    id,
    name,
    email,
  };

  let postUpdatedData = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedData),
    headers: { "Content-Type": "application/json" },
  });

  let res = await postUpdatedData.json();
  console.log(res);

  if (postUpdatedData.ok) {
    alert("Data updated successfully!");
  } else {
    alert("Failed to update data");
  }
}
