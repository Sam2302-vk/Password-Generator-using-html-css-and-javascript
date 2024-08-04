document.getElementById('generate-button').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    const password = generatePassword(length, includeUppercase, includeNumbers, includeSpecial);
    document.getElementById('password').textContent = password;
});

function generatePassword(length, includeUppercase, includeNumbers, includeSpecial) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let characterSet = lowerCaseChars;
    if (includeUppercase) {
        characterSet += upperCaseChars;
    }
    if (includeNumbers) {
        characterSet += numberChars;
    }
    if (includeSpecial) {
        characterSet += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}
