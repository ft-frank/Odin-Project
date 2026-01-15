const email = document.getElementById('email')
email.addEventListener('input', () => {
    if (!(email.value.includes("@"))) {
        email.setCustomValidity("BRUH")
        email.reportValidity()
    } else {
        email.setCustomValidity("")  // Clear the error when valid
    }
})