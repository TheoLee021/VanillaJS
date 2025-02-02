function handleResize() {
    document.body.classList.remove('small-screen', 'medium-screen', 'large-screen');
    
    if (window.innerWidth < 800) {
        document.body.classList.add('small-screen');
    } else if (window.innerWidth < 1200) {
        document.body.classList.add('medium-screen');
    } else {
        document.body.classList.add('large-screen');
    }
}

window.addEventListener("resize", handleResize);
document.addEventListener('DOMContentLoaded', handleResize);
