import Character from "../Character/Character"
import './CharacterList.css'


export default function CharacterList({ characters }) {
    return (
      <div className="character-list-container">
        {(characters.length === 0) ? <h2>Poop. No results to show!</h2> :
      <ul aria-label="characterList" className="characterList">
        {characters.map((character) => {
          return (
            <li className="listItem" key={character.name + Math.random() * 100}>
              <Character character={character} />
            </li>
          )
        })}
      </ul>}
      </div>
    )
  }