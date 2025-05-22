const body = document.body;
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const footerElement = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Mylea Spicer All rights reserved.`;
footerElement.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

// Create a new list item element
skills.forEach((skillName) => {
  const skill = document.createElement("li");
  skill.textContent = skillName;
  skillsList.appendChild(skill);
});

const messageForm = document.getElementsByName("leave_message")[0];
// Add an event listener for the "submit" event
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;
  // Log the values to the console for verification
  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  // Select the #messages section by id
  const messageSection = document.querySelector("#messages");
  // Query the messageSection to find the <ul> element
  const messageList = messageSection.querySelector("ul");

  // Create a new list item element
  const newMessage = document.createElement("li");

  // Set the inner HTML of the newMessage element
  newMessage.innerHTML = ` <a href="mailto:${userEmail}">${userName}</a>
    <span>: ${userMessage}</span>`;

  // Create a new button element
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // Add an event listener to the removeButton
  removeButton.addEventListener("click", function () {
    // Find the button's parent element
    const entry = removeButton.parentNode;
    // Remove the entry element from the DOM
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  // Append the new message to the messageList
  messageList.appendChild(newMessage);

  // Clear the form
  messageForm.reset();
});

// New code starts here

// Fetch the repositories from the GitHub API
fetch(`https://api.github.com/users/${"MyleaS"}/repos`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  // Store the parsed JSON data in a variable named repositories
  .then((data) => {
    // Log the data to the console for verification
    const repositories = data;
    console.log(repositories);

    // Select the projects section by id
    const projectSection = document.getElementById("Projects");
    // Query the projectSection to find the <ul> element
    const projectList = projectSection.querySelector("ul");
    // Iterate over the repositories array
    for (let i = 0; i < repositories.length; i++) {
      // Create a new list item element
      const project = document.createElement("li");

      // Set the inner text of the project to the repository's name
      project.innerText = repositories[i]["name"];

      // Append the project element to the projectList
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);

    // Display an error message in the Projects section
    const projectSection = document.getElementById("Projects");
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Failed to load projects. Please try again later.";
    projectSection.appendChild(errorMessage);
  });
