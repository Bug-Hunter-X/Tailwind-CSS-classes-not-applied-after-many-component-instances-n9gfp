```javascript
// MyComponent.jsx

function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default MyComponent;

// App.js (or similar)
import MyComponent from './MyComponent';

const App = () => {
  const numComponents = 1000;
  const components = [];
  for (let i = 0; i < numComponents; i++) {
    components.push(<MyComponent key={i} />); // Add keys for React
  }

  return (
    <div>
      {components}
    </div>
  );
};

export default App;
```