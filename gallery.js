function addComment(button) {
  let container = button.closest(".gallery-item");
  let input = container.querySelector(".comment-input");
  let commentSection = container.querySelector(".comments");
  let imageId = container.getAttribute("data-id");

  if (input.value.trim() !== "") {
    let newComment = document.createElement("p");
    newComment.textContent = input.value;
    commentSection.appendChild(newComment);

    saveComment(imageId, input.value);
    input.value = "";
  }
}

// Simpan komentar ke localStorage
function saveComment(imageId, comment) {
  let comments = JSON.parse(localStorage.getItem("comments_" + imageId)) || [];
  comments.push(comment);
  localStorage.setItem("comments_" + imageId, JSON.stringify(comments));
}

// Ambil komentar dari localStorage saat halaman dimuat
function loadComments() {
  document.querySelectorAll(".gallery-item").forEach((container) => {
    let imageId = container.getAttribute("data-id");
    let commentSection = container.querySelector(".comments");
    let comments =
      JSON.parse(localStorage.getItem("comments_" + imageId)) || [];

    comments.forEach((comment) => {
      let newComment = document.createElement("p");
      newComment.textContent = comment;
      commentSection.appendChild(newComment);
    });
  });
}

// Fungsi untuk menampilkan atau menyembunyikan komentar
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

// Panggil loadComments() saat halaman dimuat
window.onload = loadComments;

function likeImage(button) {
  let likeCountElement = button.querySelector(".like-count");
  let currentLikes = parseInt(likeCountElement.innerText);

  // Tambah jumlah like
  likeCountElement.innerText = currentLikes + 1;

  // Opsional: Ubah warna tombol saat di-like
  button.style.color = "red";
  button.style.fontWeight = "bold";
  button.disabled = true; // Jika ingin hanya bisa like sekali
}

function addComment(button) {
  let commentBox = button.previousElementSibling; // Ambil input komentar
  let commentText = commentBox.value.trim(); // Ambil teks komentar

  if (commentText === "") return; // Jangan lanjut jika kosong

  let commentsContainer = button
    .closest(".gallery-item")
    .querySelector(".comments");

  // Buat elemen komentar
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  commentDiv.innerHTML = `
        <span>${commentText}</span> 
        <button class="delete-btn" onclick="deleteComment(this)">🗑 Hapus</button>
    `;

  commentsContainer.appendChild(commentDiv);
  commentsContainer.style.display = "block"; // Tampilkan komentar

  commentBox.value = ""; // Kosongkan input setelah dikirim
}
