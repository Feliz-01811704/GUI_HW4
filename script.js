$(document).ready(function () {
    // Add validation rules to the form
    $("#multiplicationForm").validate({
      rules: {
        minY: {
          required: true,
          number: true,
          range: [-50, 50]
        },
        maxY: {
          required: true,
          number: true,
          range: [-50, 50]
        },
        minX: {
          required: true,
          number: true,
          range: [-50, 50]
        },
        maxX: {
          required: true,
          number: true,
          range: [-50, 50]
        }
      },
      submitHandler: function (form) {
        // Function to execute when the form is valid
        createMultTable();
        // Prevent the default form submission
        return false;
      }
    });
  
    function createMultTable() {
      const minY = parseInt($("#minY").val());
      const maxY = parseInt($("#maxY").val());
      const minX = parseInt($("#minX").val());
      const maxX = parseInt($("#maxX").val());
  
      if (!isNaN(minY) && !isNaN(maxY) && !isNaN(minX) && !isNaN(maxX)) {
        const table = $("#mult_table");
  
        let tableHTML = "<table border='1'><thead><tr><th>&times;</th>";
  
        for (let x = minX; x <= maxX; x++) {
          tableHTML += `<th>${x}</th>`;
        }
  
        tableHTML += "</tr></thead><tbody>";
  
        for (let y = minY; y <= maxY; y++) {
          tableHTML += `<tr><th>${y}</th>`;
          for (let x = minX; x <= maxX; x++) {
            tableHTML += `<td>${x * y}</td>`;
          }
          tableHTML += "</tr>";
        }
  
        tableHTML += "</tbody></table>";
  
        table.html(tableHTML);
        $("#error").empty(); // Clear any previous error messages
      } else {
        const error = $("#error");
        const errorMessage = "Please enter numbers in the valid range";
        error.html(errorMessage);
      }
    }
  });
  