$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $('#configForm').submit(function (event) {
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
    a.download = 'config_dataset1.yaml';
    a.click();
  });
});
