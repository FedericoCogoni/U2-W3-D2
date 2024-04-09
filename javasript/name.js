document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("savedName")
  const savedNameArea = document.getElementById("savedNameArea")
  if (savedName) {
    savedNameArea.textContent = "Nome salvato precedentemente: " + savedName
  }

  window.saveName = function () {
    const nameInput = document.getElementById("nameInput").value
    savedNameArea.textContent = "Nome salvato precedentemente: " + nameInput
  }

  window.removeName = function () {
    localStorage.removeItem("savedName")
    savedNameArea.textContent = ""
  }
})
