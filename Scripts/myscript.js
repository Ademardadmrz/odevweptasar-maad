// Form gönderildiğinde bilgileri localStorage'a kaydet
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = form.name.value;
            const phone = form.phone.value;
            const date = form.date.value;
            const package = form.package.value;

            const reservation = { name, phone, date, package };
            let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
            reservations.push(reservation);
            localStorage.setItem("reservations", JSON.stringify(reservations));

            alert("Rezervasyon kaydedildi!");
            form.reset();
        });
    }

    const table = document.getElementById("reservationTable");
    if (table) {
        const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        reservations.forEach(res => {
            const row = table.insertRow();
            row.innerHTML = `<td>${res.name}</td><td>${res.phone}</td><td>${res.date}</td><td>${res.package}</td>`;
        });
    }
});
// Slider için
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // 3 saniyede bir geçiş
}
showSlides();
// Sayaç için
function startCounter() {
    const counter = document.getElementById("weddingCounter");
    let count = 0;
    const target = 256; // örnek veri
    const interval = setInterval(() => {
      count++;
      counter.textContent = count;
      if (count >= target) clearInterval(interval);
    }, 10);
  }
  window.addEventListener("load", startCounter);
  function filterGallery(category) {
    const items = document.querySelectorAll('.gal-item');
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'inline-block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  // Akordeon (SSS)
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".acc-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const panel = btn.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      });
    });
  });

  // Form gönderimini engelle ve verileri sakla
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("iletisimForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const ad = form.adsoyad.value;
        const tel = form.telefon.value;
        const email = form.email.value;
        const mesaj = form.mesaj.value;
  
        // LocalStorage'a verileri kaydet
        const veri = { ad, tel, email, mesaj };
        localStorage.setItem("formVerisi", JSON.stringify(veri));
  
        // Sonuç sayfasına yönlendir
        window.location.href = "form-sonuc.html";
      });
    }
  
    // Eğer form-sonuc.html sayfasındaysak, veriyi tabloya yaz
    const veriTablosu = document.getElementById("veriTablosu");
    if (veriTablosu) {
      const kayit = JSON.parse(localStorage.getItem("formVerisi"));
      if (kayit) {
        const satir = veriTablosu.insertRow();
        satir.insertCell().textContent = kayit.ad;
        satir.insertCell().textContent = kayit.tel;
        satir.insertCell().textContent = kayit.email;
        satir.insertCell().textContent = kayit.mesaj;
      }
    }
  });
  const aylar = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
  
  function showYear(yil) {
    const container = document.getElementById("takvim-container");
    container.innerHTML = "";
  
    aylar.forEach((ay, index) => {
      const gunSayisi = new Date(yil, index + 1, 0).getDate();
  
      const ayDiv = document.createElement("div");
      ayDiv.classList.add("ay-tablosu");
  
      const baslik = document.createElement("h2");
      baslik.textContent = `${ay} ${yil}`;
      ayDiv.appendChild(baslik);
  
      const tablo = document.createElement("table");
      const thead = document.createElement("thead");
      thead.innerHTML = `<tr><th>Gün</th><th>Öğlen</th><th>Akşam</th></tr>`;
      tablo.appendChild(thead);
  
      const tbody = document.createElement("tbody");
  
      for (let gun = 1; gun <= gunSayisi; gun++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${gun}</td>
          <td class="bos">Boş</td>
          <td class="bos">Boş</td>
        `;
        tbody.appendChild(tr);
      }
  
      tablo.appendChild(tbody);
      ayDiv.appendChild(tablo);
      container.appendChild(ayDiv);
    });
  }
  
  showYear("2025");
  
  // Hücreleri etkileşimli hale getir
function aktiflestirHucreler() {
    const hucreler = document.querySelectorAll("td.bos, td.dolu");
  
    hucreler.forEach(hucre => {
      hucre.addEventListener("click", () => {
        if (hucre.classList.contains("bos")) {
          hucre.classList.remove("bos");
          hucre.classList.add("dolu");
          hucre.textContent = "Dolu";
        } else {
          hucre.classList.remove("dolu");
          hucre.classList.add("bos");
          hucre.textContent = "Boş";
        }
      });
    });
  }
  
  // showYear fonksiyonunun sonuna bu satırı ekle:
  showYear("2025");
  aktiflestirHucreler(); // ilk yüklemede
  
  // showYear fonksiyonunu güncelle: her çağrıldığında yeniden etkinleştirme
  function showYear(yil) {
    const container = document.getElementById("takvim-container");
    container.innerHTML = "";
  
    aylar.forEach((ay, index) => {
      const gunSayisi = new Date(yil, index + 1, 0).getDate();
  
      const ayDiv = document.createElement("div");
      ayDiv.classList.add("ay-tablosu");
  
      const baslik = document.createElement("h2");
      baslik.textContent = `${ay} ${yil}`;
      ayDiv.appendChild(baslik);
  
      const tablo = document.createElement("table");
      const thead = document.createElement("thead");
      thead.innerHTML = `<tr><th>Gün</th><th>Öğlen</th><th>Akşam</th></tr>`;
      tablo.appendChild(thead);
  
      const tbody = document.createElement("tbody");
  
      for (let gun = 1; gun <= gunSayisi; gun++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${gun}</td>
          <td class="bos">Boş</td>
          <td class="bos">Boş</td>
        `;
        tbody.appendChild(tr);
      }
  
      tablo.appendChild(tbody);
      ayDiv.appendChild(tablo);
      container.appendChild(ayDiv);
    });
  
    aktiflestirHucreler(); // her tablo yüklendiğinde yeniden bağla
  }
  // myscript.js içinde olabilir
let navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;

  // 20px'ten fazla kaydırıldıysa navbar'ı göster
  if (currentScroll > 500) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }

  lastScroll = currentScroll;
});
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".sss-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });
});
const takvimler = document.getElementById("takvimler");

const aylar= [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const gunSayilari = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function olusturTakvim(yil) {
  const container = document.createElement("div");
  container.className = "ay-container";
  container.id = `yil-${yil}`;

  aylar.forEach((ay, index) => {
    const gunSayisi = gunSayilari[index];
    const monthDiv = document.createElement("div");
    monthDiv.classList.add("month-table");

    const h2 = document.createElement("h2");
    h2.textContent = `${ay} ${yil}`;
    monthDiv.appendChild(h2);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = `<tr><th>Gün</th><th>Gündüz</th><th>Akşam</th></tr>`;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (let gun = 1; gun <= gunSayisi; gun++) {
      const tr = document.createElement("tr");

      const tdGun = document.createElement("td");
      tdGun.textContent = `${gun} ${ay}`;

      const tdGunduz = document.createElement("td");
      tdGunduz.textContent = Math.random() < 0.5 ? "Boş" : "Dolu";
      tdGunduz.className = tdGunduz.textContent.toLowerCase();

      const tdAksam = document.createElement("td");
      tdAksam.textContent = Math.random() < 0.5 ? "Boş" : "Dolu";
      tdAksam.className = tdAksam.textContent.toLowerCase();

      tr.appendChild(tdGun);
      tr.appendChild(tdGunduz);
      tr.appendChild(tdAksam);

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    monthDiv.appendChild(table);
    container.appendChild(monthDiv);
  });

  takvimler.appendChild(container);
}

function showYear(yil) {
  document.querySelectorAll(".ay-container").forEach(div => {
    div.classList.remove("active");
  });
  document.getElementById(`yil-${yil}`).classList.add("active");
}

// Sayfa yüklenince her yılın verisini oluştur:
[2025, 2026].forEach(olusturTakvim);
showYear(2025);



  
