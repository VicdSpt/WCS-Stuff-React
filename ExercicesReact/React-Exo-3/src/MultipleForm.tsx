import { useState } from "react";

export default function MultipleForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setError("All Fields are Required");
      return;
    }
    setError("");
    setSubmitted(`Welcome, ${username}! Check ${email}`);
  };

  const handleReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setSubmitted("");
    setError("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 300,
        }}
      >
        <input
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {submitted && <p style={{ color: "green" }}>{submitted}</p>}
        <button type="submit">Sign Up</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}
