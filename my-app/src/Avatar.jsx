import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
  const defaultStyle = {
    borderRadius: "50%",
    padding: "5px",
  };
  return (
    <img
      style={defaultStyle}
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
