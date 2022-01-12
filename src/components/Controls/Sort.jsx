
   export default function Sort({options, selection, filterChange}) {
    return (
      <div>
        <label>Sort
        <select
          value={selection}
          onChange={(event) => filterChange(event.target.value)}
        >
            <option value={''}></option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select></label>
      </div>
    );
  }