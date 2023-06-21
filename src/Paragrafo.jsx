import { useState } from "react";

export default function Paragrafo() {
  const [para, setPara] = useState(0);

  function paragrafo() {
    if (para % 2 === 0) {
      document.getElementById("teste").style.color = "blue";
    } else {
      document.getElementById("teste").style.color = "red";
    }
    setPara(para + 1);
  }

  return (
    <>
      <p id="teste"> Oi sou eu</p>
      <button onClick={paragrafo}>Muda cor</button>
    </>
  );
}
