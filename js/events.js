function getSearchParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get('search')?.toLowerCase() || '',
    date: params.get('date') || '',
    category: params.get('category')?.toLowerCase() || ''
  };
}

const sampleEvents = [
  {
    id: "1",
    title: "Kigali Music Festival",
    date: "2025-07-20",
    location: "Kigali Convention Centre",
    category: "music",
    description: "An exciting music festival featuring top local and international artists."
  },
  {
    id: "2",
    title: "Tech Expo Rwanda",
    date: "2025-08-05",
    location: "Kigali Arena",
    category: "tech",
    description: "Explore the latest innovations in technology and meet industry experts."
  },
  {
    id: "3",
    title: "Sports Weekend",
    date: "2025-07-28",
    location: "Amahoro Stadium",
    category: "sports",
    description: "A full weekend of exciting sports competitions and entertainment."
  },
  {
    id: "4",
    title: "Green Future Conference",
    date: "2025-07-20",
    location: "Kigali Conference Hall",
    category: "tech",
    description: "A sustainable development and green tech conference."
  }
];

function filterEvents(events, filters) {
  return events.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(filters.search) ||
      event.location.toLowerCase().includes(filters.search);
    const matchesDate = !filters.date || event.date === filters.date;
    const matchesCategory = !filters.category || event.category === filters.category;
    return matchesSearch && matchesDate && matchesCategory;
  });
}

function renderEventCards(events) {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = '';

  if (events.length === 0) {
    container.innerHTML = '<p class="text-danger">No events found matching your criteria.</p>';
    return;
  }

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${event.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${event.date} | ${event.location}</h6>
          <p class="card-text flex-grow-1">${event.description}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-primary mt-auto">View Details</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const filters = getSearchParams();
  const filteredEvents = filterEvents(sampleEvents, filters);
  renderEventCards(filteredEvents);
});
