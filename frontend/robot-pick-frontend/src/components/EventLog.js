const EventLog = ({ events, loading, error }) => {
  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (events.length === 0) {
    return <p>No events to display or no matching events found.</p>;
  }

  return (
    <table className="events-table">
      <thead>
        <tr>
          <th>Robot ID</th>
          <th>Item ID</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.robot_id}</td>
            <td>{event.item_id}</td>
            <td>{new Date(event.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventLog;
