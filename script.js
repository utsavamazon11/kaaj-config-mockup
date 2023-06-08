$(document).ready(function () {
  // no need to attach the event handler here as you've attached it in HTML directly
});

function nextSlider(currentSliderId, nextSliderId) {
  event.preventDefault(); // prevent form submission

  const currentSlider = document.getElementById(currentSliderId);
  const nextSlider = document.getElementById(nextSliderId);

  currentSlider.style.display = "none";
  nextSlider.style.display = "block";
}

function previousSlider(currentSliderId, previousSliderId) {
  event.preventDefault(); // prevent form submission

  const currentSlider = document.getElementById(currentSliderId);
  const previousSlider = document.getElementById(previousSliderId);

  currentSlider.style.display = "none";
  previousSlider.style.display = "block";
}

function saveConfig() {
  event.preventDefault(); // prevent form submission

  const data = {};
  
  // Gather data from Collector section
  const collectorInputs = document.querySelectorAll('#collectorSlider .required-field');
  for (const input of collectorInputs) {
    if (!input.value) {
      alert(`Please fill in the ${input.id} in the Collector section.`);
      return;
    }
    data[input.id] = {
      name: input.id,
      value: input.value
    };
  }

  // Gather data from Transformer section
  const transformerInputs = document.querySelectorAll('#transformerSlider .form-check-input');
  for (const input of transformerInputs) {
    data[input.id] = {
      name: input.id,
      value: input.checked
    };
  }

  // Gather data from Analytics section
  const analyticsInputs = document.querySelectorAll('#analyticsSlider .form-check-input');
  for (const input of analyticsInputs) {
    data[input.id] = {
      name: input.id,
      value: input.checked
    };
  }

  const yamlData = jsyaml.dump(data);

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
