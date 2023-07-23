import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";

function ListPage() {
    let navigate = useNavigate();

    const [toyList, setToyList] = useState([]);

    const moviesCollectionRef = collection(db, "toys");

    useEffect(() => {
      getMovieList();
    }, []);
    
  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setToyList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  console.log('toyList', toyList);

    return (
      <>
        <h3>All toys in your area</h3>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button style={{alignSelf: 'flex-end'}} onClick={() => navigate('/addNew')}>add your toy</button>
          <button style={{alignSelf: 'flex-start'}} onClick={() => getMovieList()}>refresh</button>
        </div>

        <ul id="toyList">
          <li
          >
            Many toys
          </li>
          <li
          >
            Many toys
          </li>
          <li
          >
            Many toys
          </li>
          <li
          >
            Many toys
          </li>
        </ul>

      </>
    );
}

export default ListPage;