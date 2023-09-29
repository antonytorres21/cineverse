import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const [production, setProduction] = useState();
  const location = useLocation();

  useEffect(() => {
    async function fetchProduction() {}
    fetchProduction();
  }, []);
  return <></>;
}

export default Details;
