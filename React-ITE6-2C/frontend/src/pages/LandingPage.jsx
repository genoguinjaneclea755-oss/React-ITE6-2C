import { useState } from "react";
import "./LandingPage.css";

import Act1 from "../Activities/Activity 1/Act1";
import Act2 from "../Activities/Activity 2/Act2";
import Act3 from "../Activities/Activity 3/App";
import Act4 from "../Activities/Activity 4/App";
import Act5 from "../Activities/Activity 5/App";

function LandingPage() {
  const [selected, setSelected] = useState(null);

  const renderActivity = () => {
    switch (selected) {
      case 1:
        return <Act1 />;
      case 2:
        return <Act2 />;
      case 3:
        return <Act3 />;
      case 4:
        return <Act4 />;
      case 5:
        return <Act5 />;
      default:
        return <h2>Select an Activity</h2>;
    }
  };

  return (
    <div>
      <h1>BSIT-2C Activities</h1>

      <button onClick={() => setSelected(1)}>Activity 1</button>
      <button onClick={() => setSelected(2)}>Activity 2</button>
      <button onClick={() => setSelected(3)}>Activity 3</button>
      <button onClick={() => setSelected(4)}>Activity 4</button>
      <button onClick={() => setSelected(5)}>Activity 5</button>

      <hr />

      {renderActivity()}
    </div>
  );
}

export default LandingPage;