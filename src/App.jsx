import "./styles.css";
import Signup from "./Myform";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary />
      <Signup />
      <ErrorBoundary />
    </div>
  );
}
