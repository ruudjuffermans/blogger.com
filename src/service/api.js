import { useState, useEffect } from "react";
import axios from "axios";

const fetchDataLocally = async () => {
  try {
    const response = await axios.get("../assets/data/data.json");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching local data");
  }
};

const fetchDataFromServer = async () => {
  try {
    const response = await axios.get("https://example.com/api/data");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from the server");
  }
};

const useDataFetching = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const isDevelopment = process.env.NODE_ENV === "development";
        const isDevelopment = true;

        const data = isDevelopment
          ? await fetchDataLocally()
          : await fetchDataFromServer();

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useDataFetching;
