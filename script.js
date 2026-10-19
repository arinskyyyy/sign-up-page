document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const togglePasswordBtn = document.getElementById('toggle-password');
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

            const eyeOpen = togglePasswordBtn.querySelector('.eye-open');
            const eyeClosed = togglePasswordBtn.querySelector('.eye-closed');

            if (isPassword) {
                if (eyeOpen) eyeOpen.style.display = 'none';
                if (eyeClosed) eyeClosed.style.display = 'block';
                togglePasswordBtn.setAttribute('aria-label', 'Hide password');
            } else {
                if (eyeOpen) eyeOpen.style.display = 'block';
                if (eyeClosed) eyeClosed.style.display = 'none';
                togglePasswordBtn.setAttribute('aria-label', 'Show password');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value;

            if (!username || !password) {
                return;
            }

            console.log('Sign up submitted:', { username });
            // Ready for backend authentication or API integration
        });
    }
});