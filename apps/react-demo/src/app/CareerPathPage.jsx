import { useState } from 'react';
import './../../../html-css-js-demo/styles-careerpath.css';

export function CareerPathPage() {
  const [steps, setSteps] = useState({
    'Learn HTML': true,
    'Learn CSS / SASS': true,
    'JavaScript & DOM Manipulation': true,
    'Learn Version Control': true,
    'Learn TypeScript': true,
    'React Basics with Hooks': true,
    'Styling Frameworks': true,
    'Redux Toolkit': true,
    SEO: true,
    Hosting: true,
    'Using BaaS': true,
    'Web Security': false,
    'Unit & Integration testing': false,
    'Building Mobile Apps': true,
    'Building Desktop Apps': false,
  });

  function updateSteps(e) {
    setSteps({ ...steps, [e.target.name]: e.target.checked });
  }

  return (
    <div>
      <main>
        <h1>Frontend Engineer Career path</h1>
        <div>
          <ul>
            {Object.entries(steps).map(([step, islearned], i) => {
              return (
                <li key={i}>
                  <span>{i + 1}</span>
                  <input
                    type="checkbox"
                    name={step}
                    checked={islearned}
                    onChange={updateSteps}
                  />
                  <label htmlFor={step}>{step}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default CareerPathPage;
