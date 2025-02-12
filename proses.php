<?php
$host = "localhost";
$user = "root"; // Sesuaikan jika berbeda
$pass = ""; // Jika ada password MySQL, isi di sini
$db   = "minecraft"; // Nama database

// Koneksi ke database
$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
$nama    = isset($_POST['nama']) ? trim($_POST['nama']) : '';
$comment = isset($_POST['comment']) ? trim($_POST['comment']) : '';

// Cegah SQL Injection
$nama    = $conn->real_escape_string($nama);
$comment = $conn->real_escape_string($comment);

// Periksa apakah data tidak kosong
if (!empty($nama) && !empty($comment)) {
    // Query untuk menyimpan ke database
    $sql = "INSERT INTO minecraft_1 (nama, comment) VALUES ('$nama', '$comment')";
    
    if ($conn->query($sql) === TRUE) {
        // Jika sukses, arahkan kembali ke halaman gallery.php
        header("Location: gallery.php?success=1");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    // Jika ada yang kosong, redirect dengan pesan error
    header("Location: gallery.php?error=1");
    exit();
}

$conn->close();
?>
