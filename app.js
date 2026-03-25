var editCard = null;

function post() {
  var title = document.getElementById("title");
  var desc = document.getElementById("description");
  var posts = document.getElementById("posts");

  if (title.value.trim() != "" && desc.value.trim() != "") {

    // EDIT MODE
    if (editCard) {
      editCard.children[1].children[0].innerText = title.value;
      editCard.children[1].children[1].innerText = desc.value;
      editCard = null;
    } else {

      var div = document.createElement("div");
      div.className = "card bord";

      div.innerHTML = `
        <div class="card-header one">~Post</div>

        <div class="card-body">
          <p>${title.value}</p>
          <small>${desc.value}</small>
        </div>

        <div class="post-actions bordt">
          <button onclick="editPost(this)" class="btn btn-pink btn-sm">Edit</button>
          <button onclick="deletePost(this)" class="btn btn-pink btn-sm">Delete</button>
        </div>
      `;

      posts.appendChild(div);
    }

    title.value = "";
    desc.value = "";
  } else {
    alert("Fill all fields!");
  }
}

function deletePost(btn) {
  var card = btn.parentNode.parentNode;
  card.remove();
}

function editPost(btn) {
  var card = btn.parentNode.parentNode;

  var titleText = card.children[1].children[0].innerText;
  var descText = card.children[1].children[1].innerText;

  document.getElementById("title").value = titleText;
  document.getElementById("description").value = descText;

  editCard = card;
}
