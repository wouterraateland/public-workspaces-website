import { useState } from "react";

const isNothing = v => v === undefined || v === null;
const maybe = (ifNothing, ifJust) => v =>
  isNothing(v) ? ifNothing(v) : ifJust(v);

const getValue = (obj, key) => key.split(".").reduce((v, part) => v[part], obj);

const isMatch = (obj, key, query) =>
  !query ||
  maybe(() => false, x => x.toLowerCase().includes(query.toLowerCase()))(
    getValue(obj, key)
  );

const useQuery = (data = [], keys = [], initialQuery = "") => {
  const [query, setQuery] = useState(initialQuery);

  return {
    query,
    setQuery,
    filteredData: data.filter(obj => keys.some(key => isMatch(obj, key, query)))
  };
};

export default useQuery;
