document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;
    let explanation;

    if (isNaN(temperature)) {
        result = "Masukkan nilai yang valid.";
        explanation = "";
    } else {
        if (unit === "Celsius") {
            result = (temperature * 9/5) + 32;
            explanation = `${temperature}°C sama dengan ${result.toFixed(2)}°F. Rumus: (°C × 9/5) + 32 = °F`;
        } else if (unit === "Fahrenheit") {
            result = (temperature - 32) * 5/9;
            explanation = `${temperature}°F sama dengan ${result.toFixed(2)}°C. Rumus: (°F - 32) × 5/9 = °C`;
        }
    }

    document.getElementById('result').innerText = `Hasil Konversi: ${result.toFixed(2)}`;
    document.getElementById('explanation').innerText = explanation;
});
