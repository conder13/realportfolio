window.addEventListener('scroll', function () {
   const elements = document.querySelectorAll('.fade-in');
   elements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
         el.classList.add('visible');
      }
   });
});

document.addEventListener('DOMContentLoaded', function () {
   // Lighter pastel colors array
   const lighterPastelColors = [
      '#FFDFE5', // Lighter Pastel Pink
      '#D3E5F1', // Lighter Pastel Blue
      '#D3E8D7', // Lighter Pastel Green
      '#E0D0FF', // Lighter Pastel Purple
      '#FFFBCC', // Lighter Pastel Yellow
      '#FFE0D1'  // Lighter Pastel Peach
   ];

   // Predefined contrasting text colors for each background color
   const textColors = [
      '#D14D72',    // Contrasting dark pink for pastel pink background
      '#2A5D86',    // Contrasting dark blue for pastel blue background
      '#3B6B45',    // Contrasting dark green for pastel green background
      '#6A1D91',    // Contrasting dark purple for pastel purple background
      '#A48A2B',    // Contrasting dark yellow-gold for pastel yellow background
      '#B85A3D'     // Contrasting dark peach for pastel peach background
   ];

   const projectBoxes = document.querySelectorAll('.project-box');

   projectBoxes.forEach((box, index) => {
      const bgColor = lighterPastelColors[index % lighterPastelColors.length];
      box.style.backgroundColor = bgColor;

      // Apply the contrasting text color for each project box
      const textColor = textColors[index % textColors.length];
      console.log(`Background color: ${bgColor}, Text color: ${textColor}`); // Debugging line

      const projectDescription = box.querySelector('.project-description');
      if (projectDescription) {
         projectDescription.style.color = textColor; // Apply the contrasting text color
      }
   });
});
