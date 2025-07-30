// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Character sets for password generation
    const CHARACTER_SETS = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // DOM elements
    const elements = {
        passwordField: document.getElementById('passwordField'),
        copyBtn: document.getElementById('copyBtn'),
        lengthSlider: document.getElementById('lengthSlider'),
        lengthValue: document.getElementById('lengthValue'),
        includeLowercase: document.getElementById('includeLowercase'),
        includeUppercase: document.getElementById('includeUppercase'),
        includeNumbers: document.getElementById('includeNumbers'),
        includeSymbols: document.getElementById('includeSymbols'),
        generateBtn: document.getElementById('generateBtn'),
        errorMessage: document.getElementById('errorMessage')
    };

    // Debug: Check if elements are found
    if (!elements.generateBtn) {
        console.error('Generate button not found! Check ID "generateBtn" in HTML.');
        return;
    }
    if (!elements.passwordField) {
        console.error('Password field not found! Check ID "passwordField" in HTML.');
        return;
    }

    // Generate password function
    function generatePassword() {
        const length = parseInt(elements.lengthSlider.value);
        let characterSet = '';

        // Build character set based on checkboxes
        if (elements.includeLowercase.checked) {
            characterSet += CHARACTER_SETS.lowercase;
        }
        if (elements.includeUppercase.checked) {
            characterSet += CHARACTER_SETS.uppercase;
        }
        if (elements.includeNumbers.checked) {
            characterSet += CHARACTER_SETS.numbers;
        }
        if (elements.includeSymbols.checked) {
            characterSet += CHARACTER_SETS.symbols;
        }

        // Check if at least one character type is selected
        if (characterSet.length === 0) {
            showError('Please select at least one character type!');
            elements.passwordField.value = '';
            return;
        }

        // Generate password
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            password += characterSet[randomIndex];
        }

        // Display password
        elements.passwordField.value = password;
        hideError();
    }

    // Copy to clipboard function
    async function copyToClipboard() {
        const password = elements.passwordField.value;
        if (!password) {
            showError('No password to copy!');
            return;
        }

        try {
            await navigator.clipboard.writeText(password);
            
            // Visual feedback
            const originalText = elements.copyBtn.textContent;
            elements.copyBtn.textContent = '✓ Copied!';
            elements.copyBtn.classList.add('copied');
            
            setTimeout(() => {
                elements.copyBtn.textContent = originalText;
                elements.copyBtn.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            // Fallback for older browsers
            elements.passwordField.select();
            document.execCommand('copy');
            showError('Copied! (using fallback method)');
        }
    }

    // Show error message
    function showError(message) {
        elements.errorMessage.textContent = message;
        elements.errorMessage.classList.add('show');
    }

    // Hide error message
    function hideError() {
        elements.errorMessage.classList.remove('show');
    }

    // Update length display
    function updateLengthDisplay() {
        elements.lengthValue.textContent = elements.lengthSlider.value;
    }

    // Event listeners
    elements.generateBtn.addEventListener('click', () => {
        console.log('Generate button clicked'); // Debug
        generatePassword();
    });
    elements.copyBtn.addEventListener('click', copyToClipboard);
    elements.lengthSlider.addEventListener('input', updateLengthDisplay);

    // Keyboard shortcut for generation
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            console.log('Ctrl+Enter pressed'); // Debug
            generatePassword();
        }
    });

    // Initialize length display
    updateLengthDisplay();

    // Generate initial password
    generatePassword();

    console.log('Password Generator loaded successfully!');
});