<?php
$host = "localhost";
$user = "root"; // Sesuaikan jika berbeda
$pass = ""; // Jika ada password, isi di sini
$db   = "minecraft"; // Nama database

// Koneksi ke database
$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Query untuk mengambil data komentar
$sql = "SELECT nama, comment FROM minecraft_1";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Profile Minecraft</title>
    <link href="https://fonts.cdnfonts.com/css/minecraft-4" rel="stylesheet" />
    <link rel="stylesheet" href="gallery.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        function toggleKomentar() {
            var komentarBox = document.getElementById("komentarBox");
            var btn = document.getElementById("toggleKomentarBtn");
            
            if (komentarBox.style.display === "none") {
                komentarBox.style.display = "block";
                btn.innerText = "Hide Komentar";
            } else {
                komentarBox.style.display = "none";
                btn.innerText = "View Komentar";
            }
        }
    </script>
</head>

<body>
    <nav class="navbar">
        <div class="img">
            <a href="img/logo.png" target="_blank"><img src="img/logo.png" alt="Logo"/></a>
            <h1 class="text-3xl font-bold">
                MY <span style="font-family: 'Minecraft', sans-serif; color: #505050">MINECRAFT</span> PAGE
            </h1>
        </div>

        <button class="menu-btn" onclick="toggleMenu()">☰</button>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="#" class="active">Gallery</a>
        </div>
    </nav>

    <header>
        <center>
            <span style="font-family: 'Minecraft', sans-serif; color: black; font-size: 40px;">
                GALLERY
            </span>
        </center>
    </header>

    <div class="gallery" data-id="1">
        <div class="gallery-item">
            <img src="img/Screenshot (27).png" alt="Image 1" />
            <h3>"I found a beautiful place. and beautiful girl"</h3>
            <p>
                Hai... ini adalah pertama kalinya aku menemukan tempat yang sesuai menurutku dan aku berencana untuk membangun rumah di sekitar sini.
                Aku menemukan tempat ini bersama seseorang yang sebelumnya aku tidak kenal, dia bernama Clara Atsya.
            </p>

            <!-- Tombol View Komentar -->
            <button id="toggleKomentarBtn" onclick="toggleKomentar()" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600">
                View Komentar
            </button>

            <!-- Bagian Komentar (Default: Tersembunyi) -->
            <div id="komentarBox" class="komentar-section bg-gray-100 p-4 rounded-lg shadow-md mt-4" style="display: none;">
                <h3 class="text-xl font-semibold mb-3">Komentar:</h3>
                <div class="komentar-box max-h-60 overflow-auto p-2 bg-white rounded-lg shadow-inner">
                    <?php
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<div class='border-b border-gray-300 pb-2 mb-2'>";
                            echo "<p class='font-bold text-blue-600'>" . htmlspecialchars($row["nama"]) . "</p>";
                            echo "<p class='text-gray-700'>" . htmlspecialchars($row["comment"]) . "</p>";
                            echo "</div>";
                        }
                    } else {
                        echo "<p class='text-gray-500'>Belum ada komentar.</p>";
                    }
                    ?>
                </div>
            </div>

            <!-- Form Komentar -->
            <form action="proses.php" method="post" class="mt-4 bg-gray-200 p-4 rounded-lg shadow-md">
                <label class="block text-gray-700 font-semibold">Nama:</label>
                <input type="text" name="nama" required class="w-full p-2 border border-gray-300 rounded-lg mb-2">

                <label class="block text-gray-700 font-semibold">Komentar:</label>
                <input type="text" name="comment" required class="w-full p-2 border border-gray-300 rounded-lg mb-2">

                <input type="submit" value="Simpan" class="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
            </form>

        </div>
    </div>

    <script src="gallery.js"></script>
</body>
</html>
