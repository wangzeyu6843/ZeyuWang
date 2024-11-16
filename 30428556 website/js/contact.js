document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault(); 

    
   const successMessageDiv = document.getElementById('successMessage');
   successMessageDiv.style.display = 'block';

   this.reset();
    
});
/* adapted from the contact page of the tutorial
https://www.ChatGPT.com */