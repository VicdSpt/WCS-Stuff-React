import BoxingCount from "./BoxingCount";
import { type PersonAvatarProps } from "../types/AvatarProps";

function PersonAvatar({ firstName, lastName, image }: PersonAvatarProps) {
  return (
    <>
      <div>
        <div className="avatar-profile">
          <img className="avatar-image"
            src={image}
            alt={`${firstName} ${lastName}`}
            style={{ width: "100px" }}
          />
          <p className="avatar-text">{`${firstName} ${lastName}`}</p>
          <p className="avatar-btn">
            <BoxingCount />
          </p>
        </div>
      </div>
    </>
  );
}
export default PersonAvatar;
