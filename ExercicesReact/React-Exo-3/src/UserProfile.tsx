import { useState } from "react";

interface Profile {
  name: string;
  lastname: string;
  bio: string;
  job: string;
  location: string;
}

const defaultProfile: Profile = {
  name: "Vic",
  lastname: "despi",
  bio: "i am a software engineer",
  job: "full stack engineer",
  location: "bxl - paris",
};

export default function UserProfile() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);

  const updateField = (field: keyof Profile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 300,
        }}
      >
        <input
          value={profile.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="Name"
        />
        <input
          value={profile.lastname}
          onChange={(e) => updateField("lastname", e.target.value)}
          placeholder="lastname"
        />
        <input
          value={profile.bio}
          onChange={(e) => updateField("bio", e.target.value)}
          placeholder="Bio"
        />
        <input
          value={profile.job}
          onChange={(e) => updateField("job", e.target.value)}
          placeholder="job"
        />
        <input
          value={profile.location}
          onChange={(e) => updateField("location", e.target.value)}
          placeholder="location"
        />

        <button onClick={() => setProfile(defaultProfile)}>Reset</button>
      </div>
      <div
        style={{
          marginTop: 16,
          border: "1px solid #ccc",
          padding: 16,
          borderRadius: 8,
          maxWidth: 300,
        }}
      >
        <h3>{profile.name}</h3>
        <p>{profile.lastname}</p>
        <p>{profile.bio}</p>
        <p>{profile.job}</p>
        <p>{profile.location}</p>
      </div>
    </div>
  );
}
