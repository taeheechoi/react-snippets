const App = ({ data }) => {
  const [filter, setFilter] = useState({
    like: false,
    date: false,
  });

  const [data, setSortedData] = useEffect([]);

  const likeHandler = () => {
    setFilter({
      ...filter,
      like: true,
      date: false,
    });
  };

  const dateHandler = () => {
    setFilter({
      ...filter,
      like: false,
      date: true,
    });
  };

  useEffect(() => {
    if (filter.like) {
      const newData = data.sort((a, b) => b.like - a.like);
      setSortedData([...newData]);
    } else if (filter.date) {
      const newData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedData([...newData]);
    } else {
      const newData = data.sort((a, b) => b.like - a.like);
      setSortedData([...newData]);
    }
  }, [filter.like, filter.date, filter, data]);

  return (
    <div>
      <div>
        <label>Sort By</label>
        <button onClick={likeHandler}>Like</button>
        <button onClick={dateHandler}>Date</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Like</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.like}</td>
                <td>{item.date}</td>
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default App