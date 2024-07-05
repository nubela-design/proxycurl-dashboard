const companyInput = document.getElementById('exampleInputCompany');
const suggestionsList = document.getElementById('companySuggestions');

// Sample data for demonstration (replace with your own)
const companies = [
    { name: "Microsoft", logo: "assets/img/logo/microsoft.svg" },
    { name: "Apple", logo: "assets/img/logo/apple 14.svg" },
    { name: "Google", logo: "assets/img/logo/Google-logoicon.svg" },
    { name: "Amazon", logo: "assets/img/logo/Amazon logo.jpeg" },
    { name: "Netflix", logo: "assets/img/logo/netflix.jpeg" }
];

// Function to render company suggestions
function renderCompanySuggestions(suggestions) {
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
        const img = document.createElement('img');
        img.src = suggestion.logo;
        img.alt = suggestion.name;
        img.style.width = '20px'; // Adjust size as needed
        img.style.marginRight = '10px'; // Adjust margin as needed
        const textNode = document.createTextNode(suggestion.name);
        listItem.appendChild(img);
        listItem.appendChild(textNode);
        suggestionsList.appendChild(listItem);
    });
}

// Event listener for input focus
companyInput.addEventListener('focus', function() {
    const userInput = companyInput.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestions(filteredSuggestions);
});

// Event listener for input change
companyInput.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestions(filteredSuggestions);
});

// Event listener for suggestion click
suggestionsList.addEventListener('click', function(e) {
    if (e.target && e.target.matches('li.list-group-item')) {
        companyInput.value = e.target.innerText.trim();
        suggestionsList.innerHTML = ''; // Clear suggestions after selection
        // You can perform any action here on suggestion selection
    }
});

// Event listener to close suggestions when clicking outside
document.addEventListener('click', function(event) {
    const target = event.target;
    // Check if the click target is not the input field or the suggestions list
    if (target !== companyInput && !companyInput.contains(target) && target !== suggestionsList && !suggestionsList.contains(target)) {
        // Clear the suggestion list
        suggestionsList.innerHTML = '';
    }
});

// Second input and suggestions list
const companyInput2 = document.getElementById('exampleInputCompany2');
const suggestionsList2 = document.getElementById('companySuggestions2');

// Function to render company suggestions for the second input
function renderCompanySuggestions2(suggestions) {
    suggestionsList2.innerHTML = '';
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
        const img = document.createElement('img');
        img.src = suggestion.logo;
        img.alt = suggestion.name;
        img.style.width = '20px'; // Adjust size as needed
        img.style.marginRight = '10px'; // Adjust margin as needed
        const textNode = document.createTextNode(suggestion.name);
        listItem.appendChild(img);
        listItem.appendChild(textNode);
        suggestionsList2.appendChild(listItem);
    });
}

// Second input and suggestions list
const companyInputCreate = document.getElementById('exampleInputCompanyCreate');
const suggestionsListCreate = document.getElementById('companySuggestionsCreate');

// Function to render company suggestions for the second input
function renderCompanySuggestionsCreate(suggestions) {
    suggestionsListCreate.innerHTML = '';
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
        const img = document.createElement('img');
        img.src = suggestion.logo;
        img.alt = suggestion.name;
        img.style.width = '20px'; // Adjust size as needed
        img.style.marginRight = '10px'; // Adjust margin as needed
        const textNode = document.createTextNode(suggestion.name);
        listItem.appendChild(img);
        listItem.appendChild(textNode);
        suggestionsListCreate.appendChild(listItem);
    });
}

// Second input and suggestions list
const companyInputCreate2 = document.getElementById('exampleInputCompanyCreate2');
const suggestionsListCreate2 = document.getElementById('companySuggestionsCreate2');

// Function to render company suggestions for the second input
function renderCompanySuggestionsCreate2(suggestions) {
    suggestionsListCreate2.innerHTML = '';
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
        const img = document.createElement('img');
        img.src = suggestion.logo;
        img.alt = suggestion.name;
        img.style.width = '20px'; // Adjust size as needed
        img.style.marginRight = '10px'; // Adjust margin as needed
        const textNode = document.createTextNode(suggestion.name);
        listItem.appendChild(img);
        listItem.appendChild(textNode);
        suggestionsListCreate2.appendChild(listItem);
    });
}

// Event listener for input focus for the second input
companyInputCreate.addEventListener('focus', function() {
    const userInput = companyInputCreate.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestionsCreate(filteredSuggestions);
});

// Event listener for input change for the second input
companyInputCreate.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestionsCreate(filteredSuggestions);
});

// Event listener for suggestion click for the second suggestions list
suggestionsListCreate.addEventListener('click', function(e) {
    if (e.target && e.target.matches('li.list-group-item')) {
        companyInputCreate.value = e.target.innerText.trim();
        suggestionsListCreate.innerHTML = ''; // Clear suggestions after selection
        // You can perform any action here on suggestion selection
    }
});

// Event listener to close suggestions when clicking outside for the second suggestions list
document.addEventListener('click', function(event) {
    const target = event.target;
    // Check if the click target is not the input field or the suggestions list
    if (target !== companyInputCreate && !companyInputCreate.contains(target) && target !== suggestionsListCreate && !suggestionsListCreate.contains(target)) {
        // Clear the suggestion list
        suggestionsListCreate.innerHTML = '';
    }
});


// Event listener for input focus for the second input
companyInput2.addEventListener('focus', function() {
    const userInput = companyInput2.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestions2(filteredSuggestions);
});

// Event listener for input change for the second input
companyInput2.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestions2(filteredSuggestions);
});

// Event listener for suggestion click for the second suggestions list
suggestionsList2.addEventListener('click', function(e) {
    if (e.target && e.target.matches('li.list-group-item')) {
        companyInput2.value = e.target.innerText.trim();
        suggestionsList2.innerHTML = ''; // Clear suggestions after selection
        // You can perform any action here on suggestion selection
    }
});

// Event listener to close suggestions when clicking outside for the second suggestions list
document.addEventListener('click', function(event) {
    const target = event.target;
    // Check if the click target is not the input field or the suggestions list
    if (target !== companyInput2 && !companyInput2.contains(target) && target !== suggestionsList2 && !suggestionsList2.contains(target)) {
        // Clear the suggestion list
        suggestionsList2.innerHTML = '';
    }
});
