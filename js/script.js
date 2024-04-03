// Convert stones and pounds to kilograms for the original inputs
function convertToKilograms() {
  var stones = parseFloat(document.getElementById('stones').value) || 0;
  var pounds = parseFloat(document.getElementById('pounds').value) || 0;
  var totalPounds = stones * 14 + pounds;
  var kilograms = totalPounds / 2.20462;
  document.getElementById('kilograms').value = kilograms.toFixed(2);
}

// Convert kilograms to stones and pounds for the original inputs
function convertToStonesAndPounds() {
  var kilograms = parseFloat(document.getElementById('kilograms').value) || 0;
  var totalPounds = kilograms * 2.20462;
  var stones = Math.floor(totalPounds / 14);
  var pounds = totalPounds % 14;

  document.getElementById('stones').value = stones;
  document.getElementById('pounds').value = pounds.toFixed(2);
}

// Apply the percentage change to kilograms and convert the result to stones and pounds for the result inputs
function applyPercentageAndConvert() {
  var originalKilograms = parseFloat(document.getElementById('kilograms').value) || 0;
  var percentage = (100 - parseFloat(document.getElementById('percentage').value)) / 100 || 1; // Default to no change if no input
  var adjustedKilograms = originalKilograms * percentage;

  // Update the kilograms-result field with the adjusted kilograms
  document.getElementById('kilograms-result').value = Math.abs(adjustedKilograms.toFixed(2));

  // Convert adjusted kilograms back to stones and pounds
  var totalPounds = adjustedKilograms * 2.20462;
  var stones = Math.floor(totalPounds / 14);
  var pounds = totalPounds % 14;

  document.getElementById('stones-result').value = Math.abs(stones);
  document.getElementById('pounds-result').value = Math.abs(pounds.toFixed(2));
}

// Attach event listeners to input fields for real-time conversion and updates
function attachEventListeners() {
  document.getElementById('stones').addEventListener('input', function() {
    convertToKilograms();
    applyPercentageAndConvert(); // Apply percentage and convert when the user types in stones
  });
  document.getElementById('pounds').addEventListener('input', function() {
    convertToKilograms();
    applyPercentageAndConvert(); // Apply percentage and convert when the user types in pounds
  });
  document.getElementById('kilograms').addEventListener('input', function() {
    convertToStonesAndPounds(); // Convert to stones and pounds when the user types in kilograms
    applyPercentageAndConvert(); // Then apply percentage and convert
  });
  document.getElementById('percentage').addEventListener('input', applyPercentageAndConvert); // Apply percentage and convert when the user types in percentage
}

// Initialize the application
function initializeApp() {
  attachEventListeners();
  // Initial conversion to populate fields if they have default values or are pre-filled
  convertToKilograms();
  applyPercentageAndConvert();
}

// Call initializeApp to set up the application
initializeApp();
