
import { useState } from "react";
import { db, auth, storage } from "../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AddNew() {
    const [title, setTitle] = useState(String.empty);
    const [fileUploadName, setFileUpload] = useState(null);
    const toyCollectionRef = collection(db, "toys");
    const navigate = useNavigate();

    const uploadFile = async (file) => {
        if (!file) return;
        const filesFolderRef = ref(storage, `projectFiles/${file.name}`);
        try {
          await uploadBytes(filesFolderRef, file);
          setFileUpload(file.name)
        } catch (err) {
          console.error(err);
        }
    };
    
    const onSubmitToy = async () => {
        try {
            await addDoc(toyCollectionRef, {
                title,
                file: fileUploadName,
                userId: auth?.currentUser?.uid,
            });
            navigate('/list');
        } catch (err) {
            console.error(err);
        }
    };

    return (
      <>
        <h3>List your toy</h3>

        <form id="newToy" style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e) => {
            onSubmitToy();
            e.preventDefault();
        }}>
            <input id="title" type="text" style={{margin: '0.5em 0'}} onChange={(e) => setTitle(e.target.value)} />
            <input id="picture" type="file" alt="toy" style={{margin: '0.5em 0'}}
                onChange={(e) => {
                    uploadFile(e.target.files[0])
                }} />

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <button type="submit" style={{alignSelf: 'flex-end'}}>Add</button>
            </div>
        </form>
      </>
    );
}

export default AddNew;
