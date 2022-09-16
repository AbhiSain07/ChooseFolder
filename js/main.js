document.getElementById("folder").addEventListener(
  "change",
  function (event) {
    var output = document.getElementsByClassName("main");
    var files = event.target.files;
  },
  false
);

// NAME
function myFunction() {
  var x = document.getElementById("folder");
  var txt = "";
  if ("files" in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } else {
      for (var i = 0; i < x.files.length; i++) {
        var file = x.files[i];
        if ("name" in file) {
          txt += " " + file.name + "....";
        }
        if ("size" in file) {
          var fsize = file.size;
          if (fsize < 1000) {
            txt +=
              "   " +
              fsize +
              " Bytes.... <button title=More_Info>Info</button><br>";
          } else if (1000 < fsize < 1000000) {
            let fsize1 = Math.round(fsize / 1024);
            txt +=
              " " +
              fsize1 +
              " KB.... <button title=More_Info>Info</button><br>";
          } else if (1000000 < fsize < 1000000000) {
            let fsize2 = Math.round(fsize / 1024);
            txt += " " + fsize2 + " MB....<button> Info</button><br>";
          } else {
          }
        }
      }
    }
  } else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
    }
  }
  document.getElementById("name").innerHTML = txt;
}
