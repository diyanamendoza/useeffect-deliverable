export default function Character({ character }) {
    const { name, origin, species, gender, image, status } = character

    return (
        <figure aria-label="character">
          <img src={image} alt={`${name}-${species}`} />
          <div className="details">
            <h3>{name}</h3>
            <p>{species} | {gender}</p>
            <p>Origin: {origin}</p>
            <p>Status: {status}</p>
          </div>
        </figure>
      )
    }