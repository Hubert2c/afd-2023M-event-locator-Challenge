function getEventIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const sampleEvents = [
  {
    id: "1",
    title: "Kigali Music Festival",
    date: "2025-07-20",
    location: "Kigali Convention Centre",
    description: "An exciting music festival featuring top local and international artists."
  },
  {
    id: "2",
    title: "Tech Expo Rwanda",
    date: "2025-08-05",
    location: "Kigali Arena",
    description: "Explore the latest innovations in technology and meet industry experts."
  },
  {
    id: "3",
    title: "Sports Weekend",
    date: "2025-07-28",
    location: "Amahoro Stadium",
    description: "A full weekend of exciting sports competitions and entertainment."
  }
];

function displayEventDetails(event) {
  document.getElementById("eventTitle").textContent = event.title;
  document.getElementById("eventDateLocation").textContent = `${event.date} | ${event.location}`;
  document.getElementById("eventDescription").textContent = event.description;
}

document.addEventListener("DOMContentLoaded", () => {
  const eventId = getEventIdFromUrl();

  if (!eventId) {
    document.getElementById("eventDetails").innerHTML = "<p class='text-danger'>Event not found.</p>";
    return;
  }

  const event = sampleEvents.find(e => e.id === eventId);

  if (event) {
    displayEventDetails(event);
  } else {
    document.getElementById("eventDetails").innerHTML = "<p class='text-danger'>Event not found.</p>";
  }
});
