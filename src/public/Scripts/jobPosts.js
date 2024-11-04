document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("job-form");
  const quillReq = Quill.find(
    document.getElementById("job-requirements-editor")
  );
  const quillQual = Quill.find(
    document.getElementById("job-qualification-editor")
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      jobId: Date.now().toString(), // Generate a unique jobId
      companyName: document.getElementById("company-name").value,
      jobCategory: document.getElementById("job-category").value,
      jobTitle: document.getElementById("job-title").value,
      jobDescription: document.getElementById("job-description").value,
      jobQualification: quillQual.root.innerHTML,
      jobRequirements: quillReq.root.innerHTML,
      uploadedImage: getBase64Image(
        document.querySelector(".after-upload img")
      ),
    };

    // Retrieve existing job data array from local storage
    let jobPostDataArray =
      JSON.parse(localStorage.getItem("jobPostDataArray")) || [];

    // Add the new job data to the array
    jobPostDataArray.push(formData);

    // Save the updated array back to local storage
    localStorage.setItem("jobPostDataArray", JSON.stringify(jobPostDataArray));

    // Alert the user
    alert("Job post data saved successfully!");

    // Clear form and reset UI (as in your previous code)
    form.reset();
    quillReq.setContents([]);
    quillQual.setContents([]);

    const uploadedImage = document.querySelector(".after-upload img");
    if (uploadedImage) {
      uploadedImage.src = "";
      uploadedImage.style.display = "none";
    }

    document.querySelector(".before-upload").style.display = "block";
    document.querySelector(".after-upload").style.display = "none";

    // Optionally reload the page
    // window.location.reload();
  });
});

function getBase64Image(img, mimeType = "image/png") {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Ensure mimeType is correctly formatted
  const validMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  if (!validMimeTypes.includes(mimeType)) {
    throw new Error(
      "Invalid MIME type. Please use 'image/png', 'image/jpeg', or 'image/jpg'."
    );
  }

  const dataURL = canvas.toDataURL(mimeType);
  return dataURL;
}

// Example usage
const imgElement = document.querySelector("img");
try {
  const base64Image = getBase64Image(imgElement, "image/jpeg");
  console.log(base64Image);
} catch (error) {
  console.error(error.message);
}
