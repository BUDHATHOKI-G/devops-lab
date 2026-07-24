import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Loading...");

  const loadMessage = async () => {
    try {
      const response = await fetch("/api/message");
      const data = await response.json();

      setMessage(data.message);
      setStatus("🟢 Connected");
    } catch (err) {
      setStatus("🔴 Backend Unreachable");
      setMessage(err.message);
    }
  };

  useEffect(() => {
    loadMessage();
  }, []);

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1>DevOps Learning Lab</h1>

      <hr />

      <h2>Backend Status</h2>

      <p>{status}</p>

      <h2>Database Message</h2>

      <h3>{message}</h3>

      <button onClick={loadMessage}>
        Refresh
      </button>
    </div>
  );
}

export default App;