document.getElementById('calculate').addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthdate');
    const ageResult = document.getElementById('ageResult');
    
    const birthdate = new Date(birthdateInput.value);
    if (isNaN(birthdate.getTime())) {
        ageResult.textContent = 'Please enter a valid birthdate.';
        return;
    }
    
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    ageResult.textContent = `You are ${age} years old.`;
});
