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

function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById("clock").innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000); // Perbarui setiap 1 detik
updateClock(); // Panggil langsung saat halaman dimuat

 function updateCounts() {
            let likeCount = document.querySelector(".like-count");
            let viewCount = document.querySelector(".view-count");
            
            let currentLikes = parseInt(likeCount.textContent);
            let currentViews = parseInt(viewCount.textContent.replace('.', ''));
            
            // Tambahkan angka acak ke like dan view
            likeCount.textContent = currentLikes + Math.floor(Math.random() * 3); 
            viewCount.textContent = (currentViews + Math.floor(Math.random() * 10)).toLocaleString('id-ID');
        }
        
        setInterval(updateCounts, 2000); // Perbarui setiap 2 detik
