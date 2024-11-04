window.confirmRemoveJob = function (jobId) {
  const confirm = window.confirm("Are you sure you want to remove this job?");
  if (confirm) {
    removeJob(jobId);
  }
};

function removeJob(jobId) {
  let jobPostDataArray =
    JSON.parse(localStorage.getItem("jobPostDataArray")) || [];
  jobPostDataArray.splice(jobId, 1);
  localStorage.setItem("jobPostDataArray", JSON.stringify(jobPostDataArray));
  location.reload(); // Refresh the page to reflect changes
}

document.addEventListener("DOMContentLoaded", function () {
  const jobList = document.getElementById("job-list");

  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.id = "modal-container";
  modalContainer.className = "modal-container";
  document.body.appendChild(modalContainer);

  // Retrieve job data from local storage
  let jobPostDataArray =
    JSON.parse(localStorage.getItem("jobPostDataArray")) || [];

  function displayJobs() {
    jobList.innerHTML = ""; // Clear existing job listings

    if (jobPostDataArray.length > 0) {
      jobPostDataArray.forEach((jobPostData, index) => {
        // Create a job card element
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.setAttribute("data-job-id", index);

        // Create and populate job card content
        jobCard.innerHTML = `
          <div class="job-header">
            <svg class="job-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="currentColor"/>
            </svg>
            <h2>${jobPostData.jobTitle}</h2>
            <svg class="remove-icon" data-job-id="${index}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>${jobPostData.companyName}</h3>
          <p><strong>Category:</strong> ${jobPostData.jobCategory}</p>
          <div class="job-description">
            <p>${jobPostData.jobDescription.substring(0, 150)}...</p>
          </div>
          <button class="view-more-btn" data-job-id="${index}">View More</button>
          <div class="job-details" id="job-details-${index}" style="display: none;">
            <div class="job-qualifications">
              <h4>Qualifications:</h4>
              ${jobPostData.jobQualification}
            </div>
            <div class="job-requirements">
              <h4>Requirements:</h4>
              ${jobPostData.jobRequirements}
            </div>
            ${
              jobPostData.uploadedImage
                ? `<img src="${jobPostData.uploadedImage}" alt="Job Image" class="job-image">`
                : ""
            }
          </div>
        `;

        // Append the job card to the job-list div
        jobList.appendChild(jobCard);
      });

      // Add event listeners to "View More" buttons
      document.querySelectorAll(".view-more-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const jobId = this.getAttribute("data-job-id");
          showModal(jobPostDataArray[jobId]);
        });
      });

      // Add event listeners to "Remove Job" buttons
      document.querySelectorAll(".remove-icon").forEach((icon) => {
        console.log("remove-icon element found:", icon);
        icon.addEventListener("click", function (e) {
          const jobId = this.getAttribute("data-job-id");
          confirmRemoveJob(jobId);
        });
      });
    } else {
      // If no job data is found, display a message
      jobList.innerHTML = "<p>No job listings available at the moment.</p>";
    }
  }

  function showModal(jobData) {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>${jobData.jobTitle}</h2>
        <h3>${jobData.companyName}</h3>
        <p><strong>Category:</strong> ${jobData.jobCategory}</p>
        <div class="job-description">
          <h4>Job Description:</h4>
          <p>${jobData.jobDescription}</p>
        </div>
        <div class="job-qualifications">
          <h4>Qualifications:</h4>
          ${jobData.jobQualification}
        </div>
        <div class="job-requirements">
          <h4>Requirements:</h4>
          ${jobData.jobRequirements}
        </div>
        <a href="./apply.html?jobId=${jobData.jobId}" target="_blank"><button class="apply-btn">Apply Now</button></a>
      </div>
    `;
    modalContainer.style.display = "flex";
    document.body.classList.add("modal-open");

    // Close modal when clicking the close button or outside the modal
    const closeBtn = modalContainer.querySelector(".close-btn");
    closeBtn.addEventListener("click", closeModal);
    modalContainer.addEventListener("click", function (e) {
      if (e.target === modalContainer) {
        closeModal();
      }
    });
  }

  function closeModal() {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  // function removeJob(jobId) {
  //   jobPostDataArray.splice(jobId, 1);
  //   localStorage.setItem("jobPostDataArray", JSON.stringify(jobPostDataArray));
  //   displayJobs();
  // }

  displayJobs(); // Initial display of jobs

  // Make displayJobs function globally accessible
  window.displayJobs = displayJobs;
});
