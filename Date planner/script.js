// State object to hold plan selections
const datePlan = {
    food: '',
    activity: ''
};

// Evading "No" Button functionality
const noBtn = document.getElementById('moving-no-btn');

noBtn.addEventListener('mouseover', () => {
    // Generate random coordinates inside the bounding space
    const x = Math.floor(Math.random() * 240) - 120;
    const y = Math.floor(Math.random() * 160) - 80;
    
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Function to handle moving across card steps
function nextStep(stepNumber) {
    // Hide current active steps
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Display targeted step
    const targetCard = document.getElementById(`step-${stepNumber}`);
    targetCard.classList.add('active');

    // Build the summary strings once reaching the final view
    if (stepNumber === 4) {
        document.getElementById('summary-food').innerText = datePlan.food;
        document.getElementById('summary-activity').innerText = datePlan.activity;
    }
}

// Function to record specific option updates
function selectOption(category, value) {
    datePlan[category] = value;
    
    // Smooth transition delay to next menu block
    setTimeout(() => {
        if (category === 'food') {
            nextStep(3);
        } else if (category === 'activity') {
            nextStep(4);
        }
    }, 250);
}

