// ============================================
// CONTACT FORM HANDLING
// ============================================

// Get the contact form element from the DOM
const contactForm = document.getElementById('contactForm');

// Get the success and error message display elements
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

// ============================================
// EVENT LISTENER: Form Submission
// ============================================

contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Hide any previous messages before submitting
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Disable the submit button to prevent multiple submissions
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Prepare the data to send to the server
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // ============================================
    // SEND DATA TO SERVER VIA FETCH API
    // ============================================

    fetch('/submit', {
        method: 'POST', // HTTP POST request
        headers: {
            'Content-Type': 'application/json' // Tell server we're sending JSON
        },
        body: JSON.stringify(formData) // Convert form data to JSON string
    })
    .then(response => {
        // Parse the response as JSON
        return response.json();
    })
    .then(data => {
        // Handle the response from the server

        if (data.success) {
            // Success: Show success message and reset the form
            console.log('Submission successful:', data);
            
            // Display success message
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Reset the form fields to empty
            contactForm.reset();
            
            // Re-enable the submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

        } else {
            // Error: Show error message
            console.error('Submission failed:', data.message);
            
            // Display error message
            errorMessage.style.display = 'block';
            errorText.textContent = data.message;
            
            // Scroll to error message
            errorMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Re-enable the submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    })
    .catch(error => {
        // Handle network errors or other issues
        console.error('Error submitting form:', error);
        
        // Display error message
        errorMessage.style.display = 'block';
        errorText.textContent = 'An error occurred while submitting the form. Please try again.';
        
        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Re-enable the submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    });
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Check if the link target exists
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FORM VALIDATION (Client-side)
// ============================================

// Validate email format using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add real-time validation to email field
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#bdc3c7';
        }
    });
}

// ============================================
// CONSOLE LOGGING (For Development)
// ============================================

// Log when the page loads successfully
console.log('Contact form script loaded successfully');
console.log('Form submission will be handled via Fetch API');
