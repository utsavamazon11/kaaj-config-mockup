$(document).ready(function () {
  $('#configForm').on('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};

    for (const [key, value] of formData) {
      data[key] = {
        name: key,
        value: value
      };
    }

    const yamlData = jsyaml.safeDump(data);

    // Create a Blob object with the YAML data
    const yamlBlob = new Blob([yamlData], { type: 'text/yaml' });

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = URL.createObjectURL(yamlBlob);
    a.download = 'config.yaml';

    // Programmatically trigger the download event
    a.click();

    // Clean up the URL object
    URL.revokeObjectURL(a.href);
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
  const collectorApiKey = document.getElementById('collectorApiKey').value;
  const collectorFrequency = document.getElementById('collectorFrequency').value;
  const collectorFrequencyUnit = document.getElementById('collectorFrequencyUnit').value;
  const collectorRetries = document.getElementById('collectorRetries').value;
  const collectorSchema = document.getElementById('collectorSchema').value;
  const collectorTableName = document.getElementById('collectorTableName').value;

  if (!collectorApiKey || !collectorFrequency || !collectorRetries || !collectorSchema || !collectorTableName) {
    alert('Please fill in all required fields in the Collector section.');
    return;
  }

  const data = {
    collectorApiKey: {
      name: 'collectorApiKey',
      value: collectorApiKey
    },
    collectorFrequency: {
      name: 'collectorFrequency',
      value: collectorFrequency
    },
    collectorFrequencyUnit: {
      name: 'collectorFrequencyUnit',
      value: collectorFrequencyUnit
    },
    collectorRetries: {
      name: 'collectorRetries',
      value: collectorRetries
    },
    collectorSchema: {
      name: 'collectorSchema',
      value: collectorSchema
    },
    collectorTableName: {
      name: 'collectorTableName',
      value: collectorTableName
    }
  };

  const yamlData = jsyaml.safeDump(data);

  // Create a Blob object with the YAML data
  const yamlBlob = new Blob([yamlData], { type: 'text/yaml' });

  // Create a temporary anchor element
  const a = document.createElement('a');
  a.href = URL.createObjectURL(yamlBlob);
  a.download = 'config.yaml';

  // Programmatically trigger the download event
  a.click();

  // Clean up the URL object
  URL.revokeObjectURL(a.href);

  alert('Configuration saved!');
}
