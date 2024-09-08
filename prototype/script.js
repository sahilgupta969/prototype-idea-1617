document.addEventListener('DOMContentLoaded', () => {
    const routeSelect = document.getElementById('route');
    const busStopsDiv = document.getElementById('bus-stops');

    // Example data - replace with real data from your source
    const data = {
        "Route 101": ["Stop A", "Stop B", "Stop C"],
        "Route 102": ["Stop D", "Stop E", "Stop F"],
        "Route 103": ["Stop G", "Stop H", "Stop I"]
    };

    // Populate the route dropdown
    for (const route in data) {
        const option = document.createElement('option');
        option.value = route;
        option.textContent = route;
        routeSelect.appendChild(option);
    }

    // Handle route selection
    routeSelect.addEventListener('change', (event) => {
        const selectedRoute = event.target.value;
        const stops = data[selectedRoute] || [];

        // Clear previous stops
        busStopsDiv.innerHTML = '';

        // Display new stops
        stops.forEach(stop => {
            const div = document.createElement('div');
            div.className = 'stop';
            div.textContent = stop;
            busStopsDiv.appendChild(div);
        });
    });

    // Trigger change event to display stops for the default selected route
    if (routeSelect.value) {
        routeSelect.dispatchEvent(new Event('change'));
    }
});