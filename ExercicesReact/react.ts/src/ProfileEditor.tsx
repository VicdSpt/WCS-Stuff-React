import { useEffect } from "react";
import { useProfile } from "./ProfileContext";

function ProfileEditor() {
  const {username, setUsername} = useProfile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  useEffect(() => {
    document.title = `${username}'s Profile`
  }, [username])

  return (
    <div>
      <input type="text" value={username} onChange={handleChange}></input>
      <p>{username}</p>
    </div>
  );
}

export default ProfileEditor;
