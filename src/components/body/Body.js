import React, { useEffect, useState } from "react";

const Body = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/ayah/1  ")
      .then((res) => {
        res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  });
  const [isLoading, setIsLoading] = useState();

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
    <div>gggggggggggggggggggg</div>
  ) : (
    <div>ddddddddddddddddddddd</div>
  );
};

export default Body;
