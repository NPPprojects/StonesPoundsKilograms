// Convert stones and pounds to kilograms
function convertToKilograms() {
    var stones = parseFloat(document.getElementById('stones').value) || 0;
    var pounds = parseFloat(document.getElementById('pounds').value) || 0;
    var totalPounds = stones * 14 + pounds;
    var kilograms = totalPounds / 2.20462;
    document.getElementById('kilograms').value = kilograms.toFixed(2);
  }
  
  // Convert kilograms to stones and pounds
  function convertToStonesAndPounds() {
    var kilograms = parseFloat(document.getElementById('kilograms').value) || 0;
    var totalPounds = kilograms * 2.20462;
    var stones = Math.floor(totalPounds / 14);
    var pounds = totalPounds % 14;
    
    document.getElementById('stones').value = stones;
    document.getElementById('pounds').value = pounds.toFixed(2);
  }
  
  // Attach conversion functions to input events
  document.getElementById('stones').addEventListener('input', convertToKilograms);
  document.getElementById('pounds').addEventListener('input', convertToKilograms);
  document.getElementById('kilograms').addEventListener('input', convertToStonesAndPounds);
  
// Function to apply the percentage change
function applyPercentageChange() {
  var percentage = parseFloat(document.getElementById('percentage').value) / 100 + 1 *-1 || -1; // Default to no change if no input
  
  // Apply percentage change to the original values
  var stones = parseFloat(document.getElementById('stones').value) || 0;
  var pounds = parseFloat(document.getElementById('pounds').value) || 0;
  var kilograms = parseFloat(document.getElementById('kilograms').value) || 0;

  document.getElementById('stones-result').value = Math.abs((stones * percentage)).toFixed(2);
  document.getElementById('pounds-result').value = Math.abs((pounds * percentage)).toFixed(2);
  document.getElementById('kilograms-result').value = Math.abs((kilograms * percentage)).toFixed(2);
}

// Attach event listeners to original inputs and the new percentage input
document.getElementById('stones').addEventListener('input', function() {
  convertToKilograms();
  applyPercentageChange();
});
document.getElementById('pounds').addEventListener('input', function() {
  convertToKilograms();
  applyPercentageChange();
});
document.getElementById('kilograms').addEventListener('input', function() {
  convertToStonesAndPounds();
  applyPercentageChange();
});
document.getElementById('percentage').addEventListener('input', applyPercentageChange);

// Initialize the fields if they have default values
convertToKilograms();
applyPercentageChange();

  