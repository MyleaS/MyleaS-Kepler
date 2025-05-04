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

for (let i = 0; i < skills.length; i++) {
  const skillName = skills[i];

  // Create a new list item element
  const skill = document.createElement("li");
  skill.textContent = skillName;
  skillsList.appendChild(skill);
}
