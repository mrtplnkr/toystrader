
function AddNew() {
    return (
      <>
        <h3>List your toy</h3>

        <form id="newToy" style={{display: 'flex', flexDirection: 'column'}}>
          <input id="name" type="text" style={{margin: '0.5em 0'}} />
          <input id="picture" type="file" alt="toy" style={{margin: '0.5em 0'}} />
          <input id="ageRecommendation" type="number" style={{margin: '0.5em 0', width: '2em'}} />
        </form>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button style={{alignSelf: 'flex-end'}}>Save</button>
        </div>

      </>
    );
}

export default AddNew;