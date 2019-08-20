import {useEffect, useState} from 'react'
import axiosInstance from "../../core/axiosconfig";

export const useGetAnimes = url => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await axiosInstance.get(url);
    setAnimes(response);
    //setLoading(false);
  };

  useEffect(() => {
    fetchUrl()
  }, []);
  return [animes, loading];
};
