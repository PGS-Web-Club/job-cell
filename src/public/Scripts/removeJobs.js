document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for remove icons
  jobList.addEventListener("click", function (e) {
    if (e.target.closest(".remove-icon")) {
      const jobId = e.target
        .closest(".remove-icon")
        .getAttribute("data-job-id");
      confirmRemoveJob(jobId);
    }
  });
});

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
