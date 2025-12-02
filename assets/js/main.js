// Basic highlight for clicked skill chips (for demo)
document.querySelectorAll('.skill-chip').forEach((chip) => {
  chip.addEventListener('click', function() {
    this.classList.toggle('highlighted');
  });
});

// Highlighted class for chip feedback (optional)
const style = document.createElement('style');
style.textContent = `
  .skill-chip.highlighted {
    background-color: #1dd2b3 !important;
    color: #101727 !important;
    border-color: #1dd2b3 !important;
  }
`;
document.head.appendChild(style);
