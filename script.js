$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $('#configForm').on('submit', function (event) {
    event.preventDefault();

    const collectorFrequency = document.getElementById('collectorFrequency').value;
    const collectorFrequencyUnit = document.getElementById('collectorFrequencyUnit').value;
    const collectorRetries = document.getElementById('collectorRetries').value;
    const collectorSchema = document.getElementById('collectorSchema').value;
    const collectorTableName = document.getElementById('collectorTableName').value;

    if (!collectorFrequency || !collectorRetries || !collectorSchema || !collectorTableName) {
      alert('Please fill in all required fields in the Collector section.');
      return;
    }

    const data = {
      'Collector': {
        'Frequency': collectorFrequency + ' ' + collectorFrequencyUnit,
        'Number of retries': collectorRetries,
        'Destination': {
          'Schema': collectorSchema,
          'Table Name': collectorTableName
        }
      }
      // Add Transformer and Analytics sections if needed
    };

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

  currentSlider.style.display = 'none';
  nextSlider.style.display = 'block';
}

function previousSlider(currentSliderId, previousSliderId) {
  const currentSlider = document.getElementById(currentSliderId);
  const previousSlider = document.getElementById(previousSliderId);

  currentSlider.style.display = 'none';
  previousSlider.style.display = 'block';
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

  const data = {
    'Collector': {
      'Frequency': collectorFrequency + ' ' + collectorFrequencyUnit,
      'Number of retries': collectorRetries,
      'Destination': {
        'Schema': collectorSchema,
        'Table Name': collectorTableName
      }
    }
    // Add Transformer and Analytics sections if needed
  };

  const yamlData = jsyaml.safeDump(data);

  const yamlBlob = new Blob([yamlData], { type: 'text/yaml' });
  const url = URL.createObjectURL(yamlBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'config.yaml';
  a.click();
}
