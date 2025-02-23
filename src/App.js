function App() {
  return React.createElement("h1", null, "Welcome to Atomic Pizza");
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
