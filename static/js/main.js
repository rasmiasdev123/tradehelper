$(document).ready(function () {
  $("#loading-indicator").show();
  $("#main").hide();
  $("#volume").hide();
  $("#loading-volume").show();

  $.get("/fno_data", function (data) {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";
    data.forEach((row) => {
      const tr = document.createElement("tr");
      const cell1 = document.createElement("td");
      cell1.textContent = row["symbol"];
      tr.appendChild(cell1);
      const cell2 = document.createElement("td");
      cell2.textContent = row["open"];
      tr.appendChild(cell2);
      const cell3 = document.createElement("td");
      cell3.textContent = row["high"];
      tr.appendChild(cell3);
      const cell4 = document.createElement("td");
      cell4.textContent = row["low"];
      tr.appendChild(cell4);
      const cell5 = document.createElement("td");
      cell5.textContent = row["last_price"];
      tr.appendChild(cell5);
      const cell6 = document.createElement("td");
      cell6.textContent = row["change_percent"];
      tr.appendChild(cell6);
      const cell7 = document.createElement("td");
      cell7.textContent = row["volume"];
      tr.appendChild(cell7);

      const changePercentInt = parseInt(row["change_percent"]);

      if (changePercentInt >= 1 && changePercentInt < 2) {
        cell6.classList.add("green-medium");
      } else if (changePercentInt >= 2 && changePercentInt < 3) {
        cell6.classList.add("green-dark");
      } else if (changePercentInt >= 3) {
        cell6.classList.add("green-darkest");
      } else if (changePercentInt <= -1 && changePercentInt > -2) {
        cell6.classList.add("red-medium");
      } else if (changePercentInt <= -2 && changePercentInt > -3) {
        cell6.classList.add("red-dark");
      } else if (changePercentInt <= -3) {
        cell6.classList.add("red-darkest");
      }

      tableBody.appendChild(tr);
    });
    new DataTable("#dataTable", {
      pagingType: "full",
      lengthMenu: [10, 20, 30, 50, 80, 100],
    });
    $("#loading-indicator").hide();
    $("#main").show();
  });

  $.get("/hike_stocks", function (data) {
    const tableBody = document.querySelector("#volumeTable tbody");
    tableBody.innerHTML = "";
    data.forEach((row) => {
      const tr = document.createElement("tr");
      const cell1 = document.createElement("td");
      cell1.textContent = row["symbol"];
      tr.appendChild(cell1);
      const cell2 = document.createElement("td");
      cell2.textContent = row["turnover"].toFixed(0);
      tr.appendChild(cell2);
      const cell3 = document.createElement("td");
      cell3.textContent = row["dly_qty"];
      tr.appendChild(cell3);
      const cell4 = document.createElement("td");
      cell4.textContent = row["delivery_pct"];
      tr.appendChild(cell4);
      const cell5 = document.createElement("td");
      cell5.textContent = row["pct_change"].toFixed(2);
      tr.appendChild(cell5);
      const cell6 = document.createElement("td");
      cell6.textContent = row["dly_hike_pct"];
      tr.appendChild(cell6);
      const cell7 = document.createElement("td");
      cell7.textContent = row["turn_hike_pct"];
      tr.appendChild(cell7);
      tableBody.appendChild(tr);
      new DataTable("#volumeTable", {
        pagingType: "full",
        lengthMenu: [10, 20, 30, 50, 80, 100],
      });
      $("#volume").show();
      $("#loading-volume").hide();
    });
  });
});
