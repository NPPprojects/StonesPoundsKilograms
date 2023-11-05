// Convert stones and pounds to kilograms
function convertToKilograms() {
    var stones = parseFloat(document.getElementById('stones').value) || 0;
    var pounds = parseFloat(document.getElementById('pounds').value) || 0;
    var totalPounds = stones * 14 + pounds;
    var kilograms = totalPounds / 2.20462;
    document.getElementById('kilograms').value = kilograms.toFixed(1);
  }
  
  // Convert kilograms to stones and pounds
  function convertToStonesAndPounds() {
    var kilograms = parseFloat(document.getElementById('kilograms').value) || 0;
    var totalPounds = kilograms * 2.20462;
    var stones = Math.floor(totalPounds / 14);
    var pounds = totalPounds % 14;
    
    document.getElementById('stones').value = stones;
    document.getElementById('pounds').value = pounds.toFixed(1);
  }
  
  // Attach conversion functions to input events
  document.getElementById('stones').addEventListener('input', convertToKilograms);
  document.getElementById('pounds').addEventListener('input', convertToKilograms);
  document.getElementById('kilograms').addEventListener('input', convertToStonesAndPounds);
  
  // Initialize the fields if they have default values
  convertToKilograms();
  