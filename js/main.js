document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const search = document.getElementById("searchInput").value.trim();
    const date = document.getElementById("dateFilter").value;
    const category = document.getElementById("categoryFilter").value;

    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (date) params.append("date", date);
    if (category) params.append("category", category);

    window.location.href = `events.html?${params.toString()}`;
  });
});
