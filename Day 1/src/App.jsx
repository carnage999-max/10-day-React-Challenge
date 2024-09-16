import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>
          <h1>10-day React Challenge</h1>
        </p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="Ezekiel 11011" />
        </a>
      </div>
      <h1>Me + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I am learning React Fundamentals in {count} days
        </button>
        <p>
          <i>Embrace the challenge, the journey begins!</i>
        </p>
      </div>

      <div className="day1">
        <h1>Day 1 - Introduction to React</h1>
        <ProfileCard
          name="Ezekiel Okebule"
          position="Software Engineer"
          bio="I am a Software Engineer with proficient backend skills with Python and JavaScript"
        />
      </div>
    </>
  );
}

export default App;
