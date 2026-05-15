import "./App.css";
import groupPhoto from "./assets/group.jpg";

export default function App() {
  return (
    <div className="landing">

      <section className="hero">
        <h1>Welcome to Our Landing Page</h1>
        <p>Meet our team</p>
      </section>

      <section className="group-photo">
        <img src={groupPhoto} alt="Group Photo" />
      </section>

      <section className="members">
        <h2>Our Members</h2>
        <ul className="member-list">
          <li>Angelica Labbao</li>
          <li>Jelyza Francisco</li>
          <li>Melvin Lumanta</li>
          <li>Jane Clea Genoguin</li>
          <li>John Lorenz Jaropojop</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Group 1</p>
      </footer>

    </div>
  );
}