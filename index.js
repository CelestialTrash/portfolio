// Create the circle element
const follower = document.createElement('div');
follower.classList.add('follower');
document.body.appendChild(follower);

// Add event listener for mouse movements
document.addEventListener('mousemove', (event) => {
    follower.style.left = `${event.clientX}px`;
    follower.style.top = `${event.clientY}px`;
});