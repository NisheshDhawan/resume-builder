document.addEventListener("DOMContentLoaded", () => {
  // Tables
  const educationTable = document.getElementById("educationTable").querySelector("tbody");
  const experienceTable = document.getElementById("experienceTable").querySelector("tbody");
  const certificationTable = document.getElementById("certificationTable").querySelector("tbody");
  const projectTable = document.getElementById("projectTable").querySelector("tbody");

  // Buttons
  const addRowBtn = document.getElementById("addRowBtn");
  const addExpRowBtn = document.getElementById("addExpRowBtn");
  const addCertRowBtn = document.getElementById("addCertRowBtn");
  const addProjectRowBtn = document.getElementById("addProjectRowBtn");

  // Skills
  const skillInput = document.getElementById("skillInput");
  const addSkillBtn = document.getElementById("addSkillBtn");
  const skillsList = document.getElementById("skillsList");

  // Languages
  const languageInput = document.getElementById("languageInput");
  const addLanguageBtn = document.getElementById("addLanguageBtn");
  const languagesList = document.getElementById("languagesList");

  // Hobbies
  const hobbyInput = document.getElementById("hobbyInput");
  const addHobbyBtn = document.getElementById("addHobbyBtn");
  const hobbiesList = document.getElementById("hobbiesList");

  // Form & preview elements
  const resumeForm = document.getElementById("resumeForm");
  const previewSection = document.getElementById("previewSection");
  const resumeContent = document.getElementById("resumeContent");
  const downloadBtn = document.getElementById("downloadBtn");
  const editBtn = document.getElementById("editBtn");

  // Add Education Row
  addRowBtn.addEventListener("click", () => {
    const rowCount = educationTable.rows.length + 1;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" name="degree${rowCount}" placeholder="Degree" /></td>
      <td><input type="text" name="institution${rowCount}" placeholder="Institution" /></td>
      <td><input type="text" name="year${rowCount}" placeholder="Year" /></td>
      <td><input type="text" name="grade${rowCount}" placeholder="Grade/Percentage" /></td>
    `;
    educationTable.appendChild(row);
  });

  // Add Experience Row
  addExpRowBtn.addEventListener("click", () => {
    const rowCount = experienceTable.rows.length + 1;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" name="jobTitle${rowCount}" placeholder="Job Title" /></td>
      <td><input type="text" name="company${rowCount}" placeholder="Company" /></td>
      <td><input type="text" name="duration${rowCount}" placeholder="Duration" /></td>
      <td><textarea name="responsibilities${rowCount}" placeholder="Describe responsibilities"></textarea></td>
    `;
    experienceTable.appendChild(row);
  });

  // Add Certification Row
  addCertRowBtn.addEventListener("click", () => {
    const rowCount = certificationTable.rows.length + 1;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" name="certName${rowCount}" placeholder="Certification Name" /></td>
      <td><input type="text" name="certIssuer${rowCount}" placeholder="Issuer" /></td>
      <td><input type="text" name="certYear${rowCount}" placeholder="Year" /></td>
      <td><input type="file" name="certFile${rowCount}" accept=".pdf,.jpg,.png,.jpeg" /></td>
    `;
    certificationTable.appendChild(row);
  });

  // Add Project Row
  addProjectRowBtn.addEventListener("click", () => {
    const rowCount = projectTable.rows.length + 1;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" name="projectTitle${rowCount}" placeholder="Project Title" /></td>
      <td><textarea name="projectDesc${rowCount}" placeholder="Project Description"></textarea></td>
    `;
    projectTable.appendChild(row);
  });

  // Add Skill
  addSkillBtn.addEventListener("click", () => {
    const skill = skillInput.value.trim();
    if (skill) {
      const li = document.createElement("li");
      li.textContent = skill;
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.innerHTML = '<i class="fas fa-times"></i>';
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.background = "transparent";
      removeBtn.style.border = "none";
      removeBtn.style.color = "#e74c3c";
      removeBtn.style.cursor = "pointer";
      removeBtn.title = "Remove skill";
      removeBtn.addEventListener("click", () => skillsList.removeChild(li));
      li.appendChild(removeBtn);
      skillsList.appendChild(li);
      skillInput.value = "";
    }
  });

  // Add Language
  addLanguageBtn.addEventListener("click", () => {
    const language = languageInput.value.trim();
    if (language) {
      const li = document.createElement("li");
      li.textContent = language;
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.innerHTML = '<i class="fas fa-times"></i>';
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.background = "transparent";
      removeBtn.style.border = "none";
      removeBtn.style.color = "#e74c3c";
      removeBtn.style.cursor = "pointer";
      removeBtn.title = "Remove language";
      removeBtn.addEventListener("click", () => languagesList.removeChild(li));
      li.appendChild(removeBtn);
      languagesList.appendChild(li);
      languageInput.value = "";
    }
  });

  // Add Hobby
  addHobbyBtn.addEventListener("click", () => {
    const hobby = hobbyInput.value.trim();
    if (hobby) {
      const li = document.createElement("li");
      li.textContent = hobby;
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.innerHTML = '<i class="fas fa-times"></i>';
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.background = "transparent";
      removeBtn.style.border = "none";
      removeBtn.style.color = "#e74c3c";
      removeBtn.style.cursor = "pointer";
      removeBtn.title = "Remove hobby";
      removeBtn.addEventListener("click", () => hobbiesList.removeChild(li));
      li.appendChild(removeBtn);
      hobbiesList.appendChild(li);
      hobbyInput.value = "";
    }
  });

  // Form submit -> Preview resume
  resumeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect Personal Info
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const linkedin = document.getElementById("linkedin").value.trim();
    const github = document.getElementById("github").value.trim();

    // Collect Education
    const educationRows = educationTable.querySelectorAll("tr");
    let educationHtml = "";
    educationRows.forEach((row) => {
      const degree = row.querySelector('input[name^="degree"]').value.trim();
      const institution = row.querySelector('input[name^="institution"]').value.trim();
      const year = row.querySelector('input[name^="year"]').value.trim();
      const grade = row.querySelector('input[name^="grade"]').value.trim();
      if (degree || institution || year || grade) {
        educationHtml += `<li><strong>${degree}</strong>, ${institution} (${year}) - ${grade}</li>`;
      }
    });

    // Collect Experience
    const expRows = experienceTable.querySelectorAll("tr");
    let experienceHtml = "";
    expRows.forEach((row) => {
      const jobTitle = row.querySelector('input[name^="jobTitle"]').value.trim();
      const company = row.querySelector('input[name^="company"]').value.trim();
      const duration = row.querySelector('input[name^="duration"]').value.trim();
      const responsibilities = row.querySelector('textarea[name^="responsibilities"]').value.trim();
      if (jobTitle || company || duration || responsibilities) {
        experienceHtml += `<li><strong>${jobTitle}</strong> at ${company} (${duration})<br>${responsibilities}</li>`;
      }
    });

    // Collect Certifications
    const certRows = certificationTable.querySelectorAll("tr");
    let certificationHtml = "";
    certRows.forEach((row) => {
      const certName = row.querySelector('input[name^="certName"]').value.trim();
      const certIssuer = row.querySelector('input[name^="certIssuer"]').value.trim();
      const certYear = row.querySelector('input[name^="certYear"]').value.trim();
      if (certName || certIssuer || certYear) {
        certificationHtml += `<li>${certName} by ${certIssuer} (${certYear})</li>`;
      }
    });

    // Collect Projects
    const projectRows = projectTable.querySelectorAll("tr");
    let projectHtml = "";
    projectRows.forEach((row) => {
      const projTitle = row.querySelector('input[name^="projectTitle"]').value.trim();
      const projDesc = row.querySelector('textarea[name^="projectDesc"]').value.trim();
      if (projTitle || projDesc) {
        projectHtml += `<li><strong>${projTitle}</strong>: ${projDesc}</li>`;
      }
    });

    // Collect Skills
    const skillsItems = skillsList.querySelectorAll("li");
    let skillsHtml = "";
    skillsItems.forEach((li) => {
      skillsHtml += `<li>${li.firstChild.textContent}</li>`;
    });

    // Collect Languages
    const languageItems = languagesList.querySelectorAll("li");
    let languageHtml = "";
    languageItems.forEach((li) => {
      languageHtml += `<li>${li.firstChild.textContent}</li>`;
    });

    // Collect Hobbies
    const hobbiesItems = hobbiesList.querySelectorAll("li");
    let hobbiesHtml = "";
    hobbiesItems.forEach((li) => {
      hobbiesHtml += `<li>${li.firstChild.textContent}</li>`;
    });

    const additionalInfo = document.getElementById("additional").value.trim();

    // Construct Resume Preview HTML
    resumeContent.innerHTML = `
      <h2>${firstName} ${lastName}</h2>
      <p><strong>Phone:</strong> ${phone} | <strong>Email:</strong> ${email}</p>
      <p><strong>LinkedIn:</strong> ${linkedin} | <strong>GitHub:</strong> ${github}</p>

      <h3>Education</h3>
      <ul>${educationHtml}</ul>

      <h3>Work Experience</h3>
      <ul>${experienceHtml}</ul>

      <h3>Certifications</h3>
      <ul>${certificationHtml}</ul>

      <h3>Projects</h3>
      <ul>${projectHtml}</ul>

      <h3>Skills</h3>
      <ul>${skillsHtml}</ul>

      <h3>Languages</h3>
      <ul>${languageHtml}</ul>

      <h3>Hobbies</h3>
      <ul>${hobbiesHtml}</ul>

      <h3>Additional Information</h3>
      <p>${additionalInfo.replace(/\n/g, "<br>")}</p>
    `;

    resumeForm.style.display = "none";
    previewSection.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Download as PDF
  downloadBtn.addEventListener("click", () => {
    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(resumeContent).save();
  });

  // Edit Resume
  editBtn.addEventListener("click", () => {
    previewSection.style.display = "none";
    resumeForm.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

  const adminResponseBtn = document.getElementById("adminResponseBtn");
  adminResponseBtn.addEventListener("click", () => {
    alert("Response has been sent to the Admin's mail section.");
  });

});