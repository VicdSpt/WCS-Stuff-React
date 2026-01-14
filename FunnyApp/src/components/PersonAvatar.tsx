import BoxingCount from "./BoxingCount";
import { type PersonAvatarProps } from "../types/AvatarProps";

function PersonAvatar({ firstName, lastName, image, punchCount = 0, onPunchClick }: PersonAvatarProps) {
  return (
    <div className="avatar-profile">
      <img 
        className="avatar-image"
        src={image}
        alt={`${firstName} ${lastName}`}
      />
      <p className="avatar-text">{`${firstName} ${lastName}`}</p>
      <BoxingCount count={punchCount} onClick={onPunchClick} />
    </div>
  );
}

export default PersonAvatar;