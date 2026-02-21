import { useState } from "react";

function ProfileEditor() {
  const initialProfile: Profile = {
    name: "",
    age: 0,
    email: "",
    bio: "",
  };

  const [profile, setProfile] = useState<Profile>(initialProfile);

  const handleReset = () => {
    setProfile(initialProfile);
  };

  return (
    <div>
      <h2>Edit Profile</h2>

      <label>
        Name:
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          value={profile.age}
          onChange={(e) =>
            setProfile({ ...profile, age: Number(e.target.value) })
          }
        />
      </label>

      <label>
        Bio:
        <input
          type="text"
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
      </label>

      <button onClick={handleReset}>Reset</button>

      <div
        style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
      >
        <h3>Preview</h3>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Age: {profile.age}</p>
        <p>Bio: {profile.bio}</p>
      </div>
    </div>
  );
}

export default ProfileEditor