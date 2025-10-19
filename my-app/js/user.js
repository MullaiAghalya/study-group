const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
      alert("No user logged in!");
      window.location.href = "login.html";
    } else {
      document.getElementById("name").textContent = userData.name;
      document.getElementById("email").textContent = userData.email;
    }

    const saveBtn = document.getElementById("saveBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const savedMsg = document.getElementById("savedMsg");

    saveBtn.addEventListener("click", () => {
      const department = document.getElementById("department").value;
      const year = document.getElementById("year").value;

      if (!department || !year) {
        savedMsg.textContent = "Please select both department and year ❗";
        savedMsg.style.color = "red";
        return;
      }

      // Update and save to localStorage
      userData.department = department;
      userData.passingYear = year;
      localStorage.setItem("user", JSON.stringify(userData));

      savedMsg.textContent = "Details saved successfully ✅";
      savedMsg.style.color = "green";
    });

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    });