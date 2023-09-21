// Fungsi untuk membuka tampilan gambar saat overlay di-klik
function openLightbox(overlay) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const imgSrc = overlay.querySelector(".overlay-content").getAttribute("data-src");

    lightboxImg.src = imgSrc;
    lightbox.style.display = "block";
}

// Fungsi untuk menutup tampilan gambar
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
// JavaScript
$(document).ready(function() {
    // Mendaftarkan fungsi untuk menangani klik pada tautan menu
    $("ul.nav a").click(function() {
      // Menutup menu navigasi (misalnya, jika di perangkat seluler)
      $(".navbar-collapse").collapse("hide");
  
      // Menyimpan referensi tautan yang diklik
      var target = $(this).attr("href");
  
      // Mengatur waktu tunda sebelum menggulir ke target
      setTimeout(function() {
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top - $(".nav-bg").height() + -8 // Menambahkan margin atas
          },
          500 // Durasi animasi (ms)
        );
      }, 100); // Waktu tunda sebelum animasi dimulai (ms)
  
      return false; // Mencegah tautan mengarahkan langsung ke target
    });
  });
  