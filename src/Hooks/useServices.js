import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    setLoadData(true);
    fetch("https://api.npoint.io/acb5462328d275fa6490")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoadData(false);
      });
  }, []);

  return [services, loadData, setServices, setLoadData];
};

export default useServices;
