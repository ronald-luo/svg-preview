const svgInput = document.getElementById('svg-input');
const svgOutput = document.getElementById('svg-output');
const downloadSvgLink = document.getElementById('download-svg-link');

svgInput.addEventListener('input', () => {
  // Get the input value and create a new SVG element
  const svgCode = svgInput.value;
  const svgElement = new DOMParser().parseFromString(svgCode, 'image/svg+xml').querySelector('svg');

  // Clear the output and append the new SVG element
  svgOutput.innerHTML = '';
  svgOutput.appendChild(svgElement);

  // Update the download link href with the new SVG code
  const svgBlob = new Blob([svgCode], { type: 'image/svg+xml' });
  const svgUrl = URL.createObjectURL(svgBlob);
  downloadSvgLink.href = svgUrl;
});