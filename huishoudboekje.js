import React, { useState } from "react";

import { Regel } from "./regel";

let initialRegels = [
  {
    id: 0,
    label: "Hypotheek",
    meerekenen: true,
    bedrag: 500,
    bewerkbaar: false
  },
  {
    id: 1,
    label: "Veld 2",
    meerekenen: false,
    bedrag: 1000,
    bewerkbaar: false
  },
  {
    id: 2,
    label: "Veld 3",
    meerekenen: false,
    bedrag: 0,
    bewerkbaar: false
  }
];

export function HuishoudBoekje(props) {
  const [saldo, setSaldo] = useState(10200);
  const [regels, setRegels] = useState(initialRegels);

  function berekenSom() {
    return regels
      .filter(regel => regel.meerekenen)
      .reduce((som, regel) => som - regel.bedrag, saldo);
  }

  const regelChanged = ({ id, meerekenen, bedrag, label, bewerkbaar }) => {
    const nieuweRegels = [...regels];
    const regel = nieuweRegels.find(regel => regel.id === id);
    regel.meerekenen = meerekenen;
    regel.bedrag = bedrag;
    regel.label = label;
    regel.bewerkbaar = bewerkbaar;
    setRegels(nieuweRegels);
    berekenSom();
  };

  const regelToevoegen = () => {
    const nieuweRegels = [
      ...regels,
      {
        id: regels.length,
        label: `Veld ${regels.length + 1}`,
        meerekenen: true,
        bedrag: 0,
        bewerkbaar: true
      }
    ];

    setRegels(nieuweRegels);
  };

  const saldoChanged = event => {
    setSaldo(+event.target.value);
  };

  return (
    <>
      Saldo:
      <input type="number" id="saldo" value={saldo} onChange={saldoChanged} />
      <br />
      {regels.map(regel => (
        <Regel
          key={regel.id}
          id={regel.id}
          label={regel.label}
          bedrag={regel.bedrag}
          meerekenen={regel.meerekenen}
          regelChanged={regelChanged}
          bewerkbaar={regel.bewerkbaar}
        />
      ))}
      <button onClick={regelToevoegen}>+</button>
      <br />
      Som: <span id="som">{berekenSom()}</span>
    </>
  );
}
