import { useNavigate } from "react-router-dom";

function ListPage() {
    let navigate = useNavigate();
    return (
      <>
        <h3>All toys in your area</h3>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button style={{alignSelf: 'flex-end'}} onClick={() => navigate('/addNew')}>add your toy</button>
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