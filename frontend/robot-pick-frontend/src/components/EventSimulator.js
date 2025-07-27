import { API_BASE_URL } from "../consts";

async function sendPickEvent(randomRobotId, randomItemId) {
  try {
    const response = await fetch(`${API_BASE_URL}/pick`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        robot_id: randomRobotId,
        item_id: randomItemId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    alert(`Simulated: ${randomRobotId} picked ${randomItemId}`);
  } catch (err) {
    console.error("Failed to simulate pick event:", err);
    alert("Failed to simulate pick event. Check console for details.");
  }
}

function EventSimulator({ fetchEvents }) {
  const simulatePickEvent = async () => {
    const randomRobotId = `Robot-${String.fromCharCode(
      65 + Math.floor(Math.random() * 5)
    )}`;
    const randomItemId = `Item-${Math.floor(Math.random() * 1000)}`;

    await sendPickEvent(randomRobotId, randomItemId);
    await fetchEvents(); // Refresh the event log after a successful post
  };

  return (
    <div className="simulate-section">
      <h2>Simulate Pick Event</h2>
      <p>Click the button below to simulate a new robot pick event.</p>
      <button onClick={simulatePickEvent}>Simulate Random Pick</button>
    </div>
  );
}

export default EventSimulator;
