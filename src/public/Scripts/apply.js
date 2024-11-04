document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // Add click event to the logo
  const logo = document.querySelector("header img");
  logo.addEventListener("click", function () {
    window.location.reload();
  });

  // Get the job data from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("jobId");

  // Get the job data from local storage
  const jobPostDataArray = JSON.parse(localStorage.getItem("jobPostDataArray"));
  const jobData = jobPostDataArray.find((job) => job.jobId === jobId);

  console.log("Job data:", jobData);

  // Display the job data
  document.getElementById("job-title").textContent = jobData.jobTitle;
  document.getElementById("company-name").textContent = jobData.companyName;
  document.getElementById("job-category").textContent = jobData.jobCategory;
  document.getElementById("job-description-full").textContent =
    jobData.jobDescription;

  // Display the job image
  document.querySelector(".job-image").src = jobData.uploadedImage;

  // Get the modal element
  var modal = document.getElementById("apply-modal");

  // Get the apply button element
  var applyBtn = document.getElementById("apply-btn");

  // Get the form element
  var form = document.querySelector("form");

  // Get the overlay element
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  console.log("Apply button:", applyBtn);
  console.log("Form:", form);

  // Function to show the modal
  function showModal() {
    console.log("showModal function called");
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // prevent scrolling
  }

  // Function to validate the form
  function validateForm() {
    var isValid = form.checkValidity();
    if (!isValid) {
      // Trigger the browser's default validation UI
      form.reportValidity();
    }
    return isValid;
  }

  // When the form is submitted, validate and show the modal if valid
  form.addEventListener("submit", function (event) {
    console.log("Form submit event triggered");
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
      showModal();
    }
  });

  // Add click event listener to the apply button
  applyBtn.addEventListener("click", function (event) {
    console.log("Apply button clicked");
    event.preventDefault(); // Prevent default button behavior
    if (validateForm()) {
      showModal();
    }
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == overlay) {
      console.log("Modal closed!");
      closeModal();
    }
  };

  // When the user clicks the close button, close the modal
  document.getElementsByClassName("close")[0].onclick = function () {
    console.log("Close button clicked!");
    closeModal();
  };

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // enable scrolling

    // Clear the form
    form.reset();

    // Clear file input
    var fileInput = document.getElementById("cv");
    if (fileInput) {
      fileInput.value = "";
    }

    // Reset file upload UI
    var beforeUpload = document.querySelector(".before-upload");
    var afterUpload = document.querySelector(".after-upload");
    var cvFileName = document.getElementById("cv-file-name");

    if (beforeUpload && afterUpload && cvFileName) {
      beforeUpload.style.display = "block";
      afterUpload.style.display = "none";
      cvFileName.textContent = "";
    }
  }

  // Handle file input change
  var fileInput = document.getElementById("cv");
  if (fileInput) {
    fileInput.addEventListener("change", function (e) {
      var fileName = e.target.files[0].name;
      var beforeUpload = document.querySelector(".before-upload");
      var afterUpload = document.querySelector(".after-upload");
      var cvFileName = document.getElementById("cv-file-name");

      if (beforeUpload && afterUpload && cvFileName) {
        beforeUpload.style.display = "none";
        afterUpload.style.display = "block";
        cvFileName.textContent = fileName;
      }
    });
  }
});
