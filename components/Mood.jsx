import React from "react";

const Mood = () => {
  return (
    <>
      <div className="flex justify-center mt-[2rem]"> {/**/ }
        <div className="flex justify-between w-[80%] md:w-[60%]">
          {mood.map((items) => (
            <div key={items.id} className="text-white/60">
              {items.mood}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mood;

export const mood = [
  {
    id: 1,
    mood: "Love",
  },
  {
    id: 2,
    mood: "Party",
  },
  {
    id: 3,
    mood: "Sad",
  },
  {
    id: 4,
    mood: "Rain",
  },
  {
    id: 5,
    mood: "Travel",
  },
];
