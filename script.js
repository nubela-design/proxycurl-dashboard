document.addEventListener('DOMContentLoaded', function () {
  // Existing code
  var checkbox = document.getElementById('flexCheckChecked');
  var alertBox = document.getElementById('checkboxAlert');

  checkbox.addEventListener('change', function () {
    if (!this.checked) {
      alertBox.style.display = 'block';
    } else {
      alertBox.style.display = 'none';
    }
  });

  // Get the toggle switch element for the new code
  var toggleSwitch = document.getElementById('toggleSwitch');
  // Get the workEmailAlert element for the new code
  var workEmailAlert = document.getElementById('workEmailAlert');
  // Get the pricingTable element for the new code
  var pricingTable = document.getElementById('pricingTable');

  // Function to handle toggle switch change for the new code
  function handleToggleSwitch() {
    if (toggleSwitch.checked) {
      workEmailAlert.style.display = 'none';  // Hide workEmailAlert
      pricingTable.style.display = 'table';   // Show pricingTable
    } else {
      workEmailAlert.style.display = 'block'; // Show workEmailAlert
      pricingTable.style.display = 'none';    // Hide pricingTable
    }
  }

  // Add event listener for toggle switch change for the new code
  toggleSwitch.addEventListener('change', handleToggleSwitch);

  // Initial setup based on the default state of the toggle switch for the new code
  handleToggleSwitch();
});

//---------------

// Another block of code
document.addEventListener('DOMContentLoaded', function () {
  // Get checkbox and button elements 
  const checkbox = document.getElementById('limitTopup');
  const button = document.getElementById('saveButton');

  // Hide button by default
  button.style.display = 'none';

  // Add click event listener to checkbox
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

  // SAVE BUTTON //

  // Get button and content elements
  const addButton = document.getElementById('addLimit');
  const limit = document.getElementById('limitTrigger');

  // Hide limit content by default
  limit.style.display = 'none';

  // Add click event to button 
  addButton.addEventListener('click', () => {
    if (limit.style.display === 'none') {
      limit.style.display = 'block';
    } else {
      limit.style.display = 'none';
    }
  });
});

//---------------

//double-click dropdown
document.addEventListener("DOMContentLoaded", function() {
  var dropdownToggle = document.getElementById("dropdownMenuButton");
  var dropdownMenu = document.querySelector("#hover-dropdown .dropdown-menu");

  // Flag to track if dropdown is open
  var isOpen = false;

  // Add a click event listener to the dropdown toggle button
  dropdownToggle.addEventListener("click", function(event) {
    // Prevent the default action of following the href link
    event.preventDefault();

    // If the dropdown is closed, open it
    if (!isOpen) {
      dropdownMenu.classList.add("show");
      dropdownToggle.setAttribute("aria-expanded", "true");
      isOpen = true;
    } else {
      // If the dropdown is open, follow the href link
      window.location.href = dropdownToggle.getAttribute("href");
    }
  });

  // Add an event listener to close the dropdown when clicking outside
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#hover-dropdown")) {
      dropdownMenu.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
      isOpen = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var dropdownToggle = document.getElementById("dropdownMenuButtonCreditsOnly");
  var dropdownMenu = document.querySelector("#hover-dropdown-credits-only .dropdown-menu");

  // Flag to track if dropdown is open
  var isOpen = false;

  // Add a click event listener to the dropdown toggle button
  dropdownToggle.addEventListener("click", function(event) {
    // Prevent the default action of following the href link
    event.preventDefault();

    // If the dropdown is closed, open it
    if (!isOpen) {
      dropdownMenu.classList.add("show");
      dropdownToggle.setAttribute("aria-expanded", "true");
      isOpen = true;
    } else {
      // If the dropdown is open, follow the href link
      window.location.href = dropdownToggle.getAttribute("href");
    }
  });

  // Add an event listener to close the dropdown when clicking outside
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#hover-dropdown-credits-only")) {
      dropdownMenu.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
      isOpen = false;
    }
  });
});

//---------------

// Function to validate team name
function validateTeamName() {
  const teamNameInput = document.getElementById('teamNameForm');
  const teamNameError = document.getElementById('teamNameError');
  const teamNameExistsError = document.getElementById('teamNameExistsError');

  const regex = /^[a-zA-Z0-9@_\- ]{1,64}$/;
  const isValid = regex.test(teamNameInput.value);
  const teamName = teamNameInput.value.toLowerCase();

  if (!isValid) {
    teamNameInput.classList.add('is-invalid');
    teamNameError.style.display = 'block';
    teamNameExistsError.style.display = 'none';
  } else if (teamName === 'obeng') {
    teamNameInput.classList.add('is-invalid');
    teamNameError.style.display = 'none';
    teamNameExistsError.style.display = 'block';
  } else {
    teamNameInput.classList.remove('is-invalid');
    teamNameError.style.display = 'none';
    teamNameExistsError.style.display = 'none';
  }
}

//---------------

// Event listener for input on team name field
document.getElementById('teamNameForm').addEventListener('input', validateTeamName);