window.onload = function() {
      console.log("Bakery website loaded 🍰");
    };
   const toggleBtn = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarCollapse');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

  // Toggle navbar on button click
  toggleBtn.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });

  // Close navbar when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarCollapse.classList.remove('show');
    });
  });

  // Close navbar when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInside = navbarCollapse.contains(e.target) || toggleBtn.contains(e.target);
    if (!isClickInside) {
      navbarCollapse.classList.remove('show');
    }
  });

    const exploreBtn = document.getElementById("exploreBtn");
  const gallerySection = document.getElementById("gallery");

  exploreBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (gallerySection.classList.contains("d-none")) {
      // Show gallery
      gallerySection.classList.remove("d-none");
      gallerySection.classList.add("fade-in");
      exploreBtn.textContent = "Show less";

      // Smooth scroll to gallery
      gallerySection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Hide gallery
      gallerySection.classList.add("fade-out");

      // Wait for animation to finish, then hide
      setTimeout(() => {
        gallerySection.classList.add("d-none");
        gallerySection.classList.remove("fade-in", "fade-out");
      }, 400);

      exploreBtn.textContent = "Explore more posts";

      // Smooth scroll back up to button
      exploreBtn.scrollIntoView({ behavior: "smooth" });
    }
  });

 document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    const modalImg = document.getElementById("modalImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function showImage(index) {
      const image = galleryImages[index];
      modalImg.src = image.src;
      currentIndex = index;
    }

    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        showImage(index);
        modal.show();
      });
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
    });
  });
  // ---------- FORM SUBMIT ----------
  document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      quantity: document.getElementById("quantity").value.trim(),
      address: document.getElementById("address").value.trim(),
      description: document.getElementById("description").value.trim(),
      status: 'Placed',
      orderedDate: new Date(),
      updatedDate: new Date(),
    };
    console.log(formData);
    message = `Hi, I am ${formData.name}, want ${formData.quantity} cake with following description: \n ${formData.description}.
    Email: ${formData.email},\n Mob: ${formData.phone},\n Address: ${formData.address}`
    const phoneno = "+918975343910"; // your number here
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${phoneno}?text=${encoded}`;

  window.open(url, '_blank');

    // const scriptURL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL"; // Replace this

    // try {
    //   await fetch(scriptURL, {
    //     method: "POST",
    //     mode: "no-cors",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData)
    //   });

    //   alert("✅ Order submitted successfully!");
    //   this.reset();
    // } catch (error) {
    //   alert("❌ Failed to submit order. Please try again.");
    //   console.error(error);
    // }
  });

