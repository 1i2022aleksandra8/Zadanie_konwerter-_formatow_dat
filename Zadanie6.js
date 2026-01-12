document.getElementById("convertBtn").addEventListener("click", convertDate);
document.getElementById("clearBtn").addEventListener("click", clearResults);

function convertDate() {
  const input = document.getElementById("dateInput").value;

  if (input.trim() === "") {
    alert("Wprowadź datę w formacie DD-MM-YYYY!");
    return;
  }

  const parts = input.split("-");

  if (parts.length !== 3) {
    alert("Niepoprawny format! Użyj DD-MM-YYYY.");
    return;
  }

  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
    alert("Niepoprawny format! DD=2 znaki, MM=2 znaki, YYYY=4 znaki.");
    return;
  }

  document.getElementById("day").textContent = day;
  document.getElementById("month").textContent = month;
  document.getElementById("year").textContent = year;

  const format1 = [year, month, day].join("-");
  document.getElementById("format1").textContent = format1;

  const format2 = day + "." + month + "." + year;
  document.getElementById("format2").textContent = format2;

  const noSeparators = day + month + year;
  document.getElementById("noSeparators").textContent = noSeparators;

  const reversed = input.split("-").reverse().join("-");
  document.getElementById("reversed").textContent = reversed;

  document.getElementById("results").style.display = "block";
}

function clearResults() {
  document.getElementById("dateInput").value = "";
  document.getElementById("results").style.display = "none";
}