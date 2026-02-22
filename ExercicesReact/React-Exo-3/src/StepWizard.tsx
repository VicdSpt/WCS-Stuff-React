import { useState } from "react";

export default function StepWizard() {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  return (
    <div>
      <p>Step: {step}/3</p>

      {step === 1 && (
        <div>
          <p>What's your name ?</p>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <p>What's your language ?</p>
          <input
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <p>
            Hello, {name}, choosing {language} is a great idea !
          </p>
        </div>
      )}

      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        {step > 1 && <button onClick={() => setStep((newStep) => newStep - 1)}>Back</button>}
        {step < 3 && <button onClick={() => setStep((newStep) => newStep + 1)}>Next</button>}
      </div>
    </div>
  );
}
