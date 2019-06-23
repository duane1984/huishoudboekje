import React from "react";

export function Regel(props) {
  const meerekenenChanged = event => {
    props.regelChanged({
      id: props.id,
      meerekenen: event.target.checked,
      bedrag: props.bedrag,
      bewerkbaar: props.bewerkbaar,
      label: props.label
    });
  };

  const bedragChanged = event => {
    props.regelChanged({
      id: props.id,
      meerekenen: props.meerekenen,
      bedrag: +event.target.value,
      bewerkbaar: props.bewerkbaar,
      label: props.label
    });
  };

  const labelChanged = event => {
    props.regelChanged({
      id: props.id,
      meerekenen: props.meerekenen,
      bedrag: props.bedrag,
      label: event.target.value,
      bewerkbaar: props.bewerkbaar
    });
  };

  const keyUp = event => {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
      props.regelChanged({
        id: props.id,
        meerekenen: props.meerekenen,
        bedrag: props.bedrag,
        label: props.label,
        bewerkbaar: false
      });
    }
  };

  console.log(props.bewerkbaar);
  return (
    <>
      {props.bewerkbaar ? (
        <input
          type="text"
          disabled={!props.bewerkbaar}
          value={props.label}
          onChange={labelChanged}
          onKeyUp={keyUp}
        />
      ) : (
        props.label
      )}
      <input
        type="checkbox"
        checked={props.meerekenen}
        onChange={meerekenenChanged}
      />
      {props.bewerkbaar ? (
        <input
          type="number"
          value={props.bedrag}
          onChange={bedragChanged}
          disabled={!props.bewerkbaar}
          onKeyUp={keyUp}
        />
      ) : (
        props.bedrag
      )}
      <br />
    </>
  );
}
