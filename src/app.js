/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my", "your"];
  let adj = ["great", "adorable", "aggressive", "delightful", "evil"];
  let noun = ["earthquake", "poison", "bubble", "cobweb"];
  let ext = [".com", ".org", ".net", ".us", ".io"];
  let finished = [];

  for (var x = 0; x < pronoun.length; x++) {
    for (var y = 0; y < adj.length; y++) {
      for (var z = 0; z < noun.length; z++) {
        for (var i = 0; i < ext.length; i++) {
          finished.push(pronoun[x] + adj[y] + noun[z] + ext[i]);
        }
      }
    }
  }
  console.log(finished);
  document.getElementById("gen").innerHTML = finished
    .map((item, index) => {
      return "<div class='domain'>" + item + "</div>";
    })
    .join("");
};
