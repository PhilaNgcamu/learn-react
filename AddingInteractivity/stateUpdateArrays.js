import { func } from "prop-types";
import { useState } from "react";

export function List() {
  let initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ];

  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <ul>
        {artists.map((artist) => {
          return (
            <>
              <li key={artist.id}>
                {artist.name}{" "}
                <button
                  onClick={() => {
                    setArtists(
                      artists.filter((art) => {
                        console.log(art.id, artist.id);
                        return art.id !== artist.id;
                      })
                    );
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export function ShapeEditor() {
  let initialShapes = [
    { id: 0, type: "circle", x: 50, y: 100 },
    { id: 1, type: "square", x: 150, y: 100 },
    { id: 2, type: "circle", x: 250, y: 100 },
  ];
  const [shapes, setShapes] = useState(initialShapes);
  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") return shape;
      else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }
  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}

const initialCounters = [0, 0, 0];

export function CounterList() {
  const [counters, setCounters] = useState(initialCounters);
  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) return c + 1;
      else {
        return c;
      }
    });
    setCounters(nextCounters);
  }
  return (
    <ul>
      {counters.map((counter, i) => {
        return (
          <li key={i}>
            {counter}{" "}
            <button
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        );
      })}
    </ul>
  );
}
