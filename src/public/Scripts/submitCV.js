function applyDnDCV(el) {
  const beforeUploadEl = el.querySelector(".before-upload");
  const afterUploadEl = el.querySelector(".after-upload");
  const cvFileName = el.querySelector("#cv-file-name");
  const inputFile = el.querySelector("input");
  const clearBtn = el.querySelector(".after-upload .clear-btn");

  function showCVFileName(file) {
    if (file) {
      cvFileName.textContent = file.name;
      afterUploadEl.style.display = "block";
      beforeUploadEl.style.display = "none";
    }
  }

  beforeUploadEl.addEventListener("click", (e) => {
    e.preventDefault();
    inputFile.click();
  });

  inputFile.addEventListener("change", (e) => {
    e.preventDefault();
    showCVFileName(e.target.files[0]);
  });

  clearBtn.addEventListener("click", (e) => {
    afterUploadEl.style.display = "none";
    beforeUploadEl.style.display = "flex";
  });

  beforeUploadEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    el.classList.add("active");
  });

  beforeUploadEl.addEventListener("dragleave", (e) => {
    e.preventDefault();
    el.classList.remove("active");
  });

  beforeUploadEl.addEventListener("drop", (e) => {
    e.preventDefault();
    el.classList.remove("active");
    showCVFileName(e.dataTransfer.files[0]);
  });
}

applyDnDCV(document.querySelector(".cv-upload"));
