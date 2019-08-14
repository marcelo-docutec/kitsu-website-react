import React from "react";
import {useGetAnimes} from "./hooks";

const List = () => {
  const [animes, loading] = useGetAnimes('anime?filter[seasonYear]=2019');
  return (
    <div>
      {loading ?
        <h1>Loading, please wait..</h1>
        :
        <div>
          info
          {animes}
        </div>
      }
    </div>
  );
};

export default List;