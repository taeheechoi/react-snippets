const App = () => {
  const data = [
    {
      title: "Page1",
      description: "Page 1",
    },
    {
      title: "Page2",
      description: "Page 2",
    },
    {
      title: "Page3",
      description: "Page 3",
    },
    {
      title: "Page4",
      description: "Page 4",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <button
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentPage === data.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
      <button disabled={currentPage === 0} onClick={() => setCurrentPage(0)}>
        Reset
      </button>
      <div>
        <h1>{data[currentPage] && data[currentPage].title}</h1>
        <p>{data[currentPage] && data[currentPage].description}</p>
      </div>
    </div>
  );
};
