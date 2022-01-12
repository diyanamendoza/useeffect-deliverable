export default function Search({ searchQuery, setSearch, handleSubmit }) {
    return (
      <form aria-label="search" onSubmit={handleSubmit}>
        <label htmlFor="search">Search by Name
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={searchQuery}
        />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }