import { getImageUrl } from "./utils";
import { people } from "./data.js";

export default function List() {
  const avatarStyle = {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
  };
  const chemists = people.filter((person) => person.profession === "化学家");

  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img style={avatarStyle} src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}因 {person.accomplishment} 而闻名全世界！
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
