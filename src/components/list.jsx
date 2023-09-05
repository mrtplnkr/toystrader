import { collection, 
  getDocs, deleteDoc,
  doc,
  query, } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authProvider";
import { db } from "../firebase-config";
import Item from "./item";

function ListPage() {
  let navigate = useNavigate();
  const { user } = useAuth();

  const [toyList, setToyList] = useState([]);

  const toysCollectionRef = collection(db, "toys");

  useEffect(() => {
    getToyList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [myWishedItems, setMyWishedItems] = useState(localStorage.getItem("wishListItems") ?? []);

  useEffect(() => {
    localStorage.setItem("'wishListItems", JSON.stringify(myWishedItems))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myWishedItems?.length]);

  const addRemoveWish = (newItem) => {
      if (myWishedItems && myWishedItems.filter(x => x.id === newItem.id).length) {
        setMyWishedItems(myWishedItems.filter(x => x.id !== newItem.id));
      } else {
        setMyWishedItems(myWishedItems.concat([newItem]));
      }
  }

  const deleteItem = async (id) => {
    const movieDoc = doc(db, "toys", id);
    await deleteDoc(movieDoc);
    getToyList();
  };
  
  const getToyList = async () => {
    try {
      const data = await getDocs(toysCollectionRef);
      const q = await query(data.docs)
      .where("userId", "!=", "UtGuMAEDsQbkAKqNstSQ4R9D5uw2");
      const filteredData = q
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setToyList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3>All toys in your area</h3>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <button style={{alignSelf: 'flex-end'}} onClick={() => navigate('/addNew')}>add your toy</button>
        <button style={{alignSelf: 'flex-start'}} onClick={() => getToyList()}>refresh</button>
      </div>

      <ul id="toyList">
        {toyList.map((x) => {
          return (
            <Item key={x.id} {...x} 
              isOwned={x.userId === user.id} deleteItem={deleteItem} 
              wished={myWishedItems.filter(w => w.id === x.id).length} addRemoveWish={addRemoveWish}>
            </Item>)
        })}
      </ul>
    </>
  );
}

export default ListPage;