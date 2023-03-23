/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */

      function FarenheitToCelsius(degree) {
            return(degree - 32 / 1.8)
      }

      function CelsiusToFahrenheit(degree) {
            return(degree * 1.8 + 32)
      }

      function handleCelsiusChange() {
            let cDegree = document.getElementById("cValue").value;
            document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
         }

         function handleFahrenheitChange() {
            let fDegree = document.getElementById("fValue").value;
            document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
         }

