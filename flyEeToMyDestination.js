function minPlanesRequired(fuel) {
    const n = fuel.length;
    let planes = 0;
    let currentFuel = fuel[0];
    let farthestAirport = fuel[0];

    for (let i = 1; i < n - 1; i++) {
        if (i <= farthestAirport) {
            farthestAirport = Math.max(farthestAirport, i + fuel[i]);
        } else {
            if (currentFuel === 0) {
                return -1;
            }
            planes++;
            currentFuel = farthestAirport - i;
            farthestAirport = Math.max(farthestAirport, i + fuel[i]);
        }
        currentFuel--;
    }
    return planes; 
}

// Example usage:
const fuel1 = [2, 1, 2, 3, 1];
console.log(minPlanesRequired(fuel1)); // Output: 2

const fuel2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minPlanesRequired(fuel2)); // Output: 3