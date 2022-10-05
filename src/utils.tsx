export function handleProductAvailabilityDisplay(count: number) {
    if (count === 0) {
        return "SOLD OUT"
    }
    if (count === 1) {
        return "ONLY ONE LEFT"
    }
    else {
        return null
    }
}

export var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });