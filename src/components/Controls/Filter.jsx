
   export default function Filter({category, options, selection, filterChange}) {
    return (
      <div>
        <label>Filter by {category}
        <select
          value={selection}
          onChange={(event) => filterChange(event.target.value)}
        >
          <option value=''>all</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select></label>
      </div>
    );
  }