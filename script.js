$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $('#configForm').on('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};

    for (const [key, value] of formData) {
      data[key] = value;
    }

    const yamlData = jsyaml.safeDump(data);

    const yamlBlob = new Blob([yamlData], { type: 'text/yaml' });
    const url = URL.createObjectURL(yamlBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.yaml';
    a.click();
  });
});

function nextSlider(currentSliderId, nextSliderId) {
  const currentSlider = document.getElementById(currentSliderId);
  const nextSlider = document.getElementById(nextSliderId);
  
  currentSlider.style.display = "none";
  nextSlider.style.display = "block";
}

function previousSlider(currentSliderId, previousSliderId) {
  const currentSlider = document.getElementById(currentSliderId);
  const previousSlider = document.getElementById(previousSliderId);
  
  currentSlider.style.display = "none";
  previousSlider.style.display = "block";
}

function saveConfig() {
  const collectorFrequency = document.getElementById('collectorFrequency').value;
  const collectorFrequencyUnit = document.getElementById('collectorFrequencyUnit').value;
  const collectorRetries = document.getElementById('collectorRetries').value;
  const collectorSchema = document.getElementById('collectorSchema').value;
  const collectorTableName = document.getElementById('collectorTableName').value;

  if (!collectorFrequency || !collectorRetries || !collectorSchema || !collectorTableName) {
    alert('Please fill in all required fields in the Collector section.');
    return;
  }

  // Retrieve and process the form data here
  // Store the configuration as a YAML file or perform any other necessary actions
  alert('Configuration saved!');
}
