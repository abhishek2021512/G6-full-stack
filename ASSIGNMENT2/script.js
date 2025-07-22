
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}
function searchBlogs() {
  const term = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".blog-card");

  cards.forEach(card => {
    const content = card.textContent.toLowerCase();
    card.style.display = content.includes(term) ? "block" : "none";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const container = document.getElementById("dynamicBlogs");

  blogs.forEach(blog => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <h3>${blog.title}</h3>
      <p class="desc">${blog.desc}</p>
      <p><strong>Author:</strong> ${blog.author}</p>
      <p><strong>Published By:</strong> ${blog.publisher}</p>
      <p><strong>Category:</strong> ${blog.category}</p>
      <p><strong>Date:</strong> ${blog.date}</p>
    `;
    container.appendChild(card);
  });
});


document.getElementById("searchInput")?.addEventListener("input", debounce(searchBlogs, 300));
