const variable1 = "Bonjour à tous";


function App() {
  return (
    <div className="App" style={{ color: "red" }}>      
      <h1>{variable1}</h1>
      <p style={{ color: "green" }}>
        Ce titre est en rouge grâce au style intégré dans la div
      </p>
    </div>
  );
}

export default App;
