import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <Header />
      <main style={{padding: "20px", textAlign: "center"}}>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>
        
        <Greeting name="Priya" topic="React Components" />
        <Greeting name="Rohan" topic="JSX & Props" />
        
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <ProfileCard
            name="Arjun Kumar"
            role="Frontend Developer"
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <ProfileCard
            name="Sneha Verma"
            role="UI/UX Designer"
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
