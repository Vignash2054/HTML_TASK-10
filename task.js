   function convert(){
        const val = Number(document.getElementById("centimeter").value);
        const inch = val/2.54;
        const result = document.getElementById("result");
        result.innerHTML = inch.toFixed(4) + "inches";
      }
