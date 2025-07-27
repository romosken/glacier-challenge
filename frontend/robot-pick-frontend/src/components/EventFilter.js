const EventFilter = ({ filterValue, onFilterChange }) => {
  return (
    <div className="filter-section">
      <label htmlFor="robotIdFilter">Filter by Robot ID:</label>
      <input
        type="text"
        id="robotIdFilter"
        value={filterValue}
        onChange={onFilterChange}
        placeholder="e.g., Robot-A"
      />
    </div>
  );
};

export default EventFilter;
