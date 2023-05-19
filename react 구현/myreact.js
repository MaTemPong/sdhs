function MyReact() {
  const options = {
    currentStateKey: 0,
    renderCount: 0,
    states: [],
    root: null,
    rootComponent: null,
  };

  function useState(initState) {
    const { currentStateKey: key, states } = options;
    if (states.length === key) states.push(initState);

    const state = states[key];
    const setState = (newState) => {
      states[key] = newState;
      _render();
    };
    options.currentStateKey += 1;
    return [state, setState];
  }

  const _render = debounceFrame(() => {
    const { root, rootComponent } = options;
    if (!root || !rootComponent) return;
    root.innerHTML = rootComponent();
    options.currentStateKey = 0;
    options.renderCount += 1;
  });

  function render(rootComponent, root) {
    options.root = root;
    options.rootComponent = rootComponent;
    _render();
  }

  return { useState, render };
}

const { useState, render } = MyReact();

function CounterAndMeow() {
  const [count, setCount] = useState(1);
  const [cat, setCat] = useState("야옹! ");

  function countMeow(newCount) {
    setCount(newCount);
    setCat("야옹! ".repeat(newCount));
  }

  window.increment = () => countMeow(count + 1);
  window.decrement = () => countMeow(count - 1);

  return `
      <div>
        <p>고양이가 ${count}번 울어서 ${cat} </p>
        <button onclick="increment()">증가</button>
        <button onclick="decrement()">감소</button>
      </div>
    `;
}

function debounceFrame(callback) {
  let nextFrameCallback = -1;
  return () => {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(callback);
  };
}

const App = () => `
    <div>
      ${CounterAndMeow()}
    </div>
  `;

render(App, document.querySelector("#app"));
