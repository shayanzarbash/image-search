import Search from "./components/Search";
function App() {

  const onSubmit = (value) => {
    console.log("search", value);
  }


  return (
    <>
      <div>
        <Search onSubmit={onSubmit} />
      </div>

    </>
  );
}

export default App;
