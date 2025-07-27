import { useState, useEffect } from "react";
import EventSimulator from "./components/EventSimulator";
import EventFilter from "./components/EventFilter";
import EventLog from "./components/EventLog";
import "./App.css";
import { API_BASE_URL } from "./consts";

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterRobotId, setFilterRobotId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEvents(data.events);
    } catch (err) {
      console.error("Failed to fetch events:", err);
      setError("Failed to load events. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (filterRobotId) {
      const lowerCaseFilter = filterRobotId.toLowerCase();
      const newFiltered = events.filter((event) =>
        event.robot_id.toLowerCase().includes(lowerCaseFilter)
      );
      setFilteredEvents(newFiltered);
    } else {
      setFilteredEvents(events);
    }
  }, [filterRobotId, events]);

  const handleFilterChange = (e) => {
    setFilterRobotId(e.target.value);
  };

  return (
    <div className="App">
      <h1>Robot Pick Event Log</h1>
      <EventSimulator fetchEvents={fetchEvents} />
      <hr />
      <div className="event-log-section">
        <h2>Event Log</h2>
        <EventFilter
          filterValue={filterRobotId}
          onFilterChange={handleFilterChange}
        />
        <EventLog events={filteredEvents} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;
