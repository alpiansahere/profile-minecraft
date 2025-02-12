document.addEventListener("DOMContentLoaded", function () {
  loadComments();
});

function addComment(button) {
  let container = button.closest(".gallery-item");
  let input = container.querySelector(".comment-input");
  let commentSection = container.querySelector(".comments");
  let imageId = container.getAttribute("data-id");

  if (input.value.trim() !== "") {
    let commentText = input.value;
    input.value = ""; // Kosongkan input setelah dikirim

    // Simpan komentar ke database menggunakan AJAX
    fetch("save_comment.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `image_id=${imageId}&comment=${encodeURIComponent(commentText)}`,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Response:", data);
        loadComments(); // Reload komentar setelah menambah
      })
      .catch((error) => console.error("Error:", error));
  }
}

function loadComments() {
  document.querySelectorAll(".gallery-item").forEach((container) => {
    let imageId = container.getAttribute("data-id");
    let commentSection = container.querySelector(".comments");

    fetch(`get_comments.php?image_id=${imageId}`)
      .then((response) => response.json())
      .then((comments) => {
        commentSection.innerHTML = "";
        comments.forEach((comment) => {
          let newComment = document.createElement("p");
          newComment.textContent = comment.comment;
          commentSection.appendChild(newComment);
        });
      })
      .catch((error) => console.error("Error fetching comments:", error));
  });
}

function toggleComments(button) {
  let container = button.closest(".gallery-item");
  let commentSection = container.querySelector(".comments");

  if (commentSection.style.display === "none") {
    commentSection.style.display = "block";
    button.textContent = "Hide Comment";
  } else {
    commentSection.style.display = "none";
    button.textContent = "View Comment";
  }
}
