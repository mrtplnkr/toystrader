import React from 'react';

const urlFormat = 'https://firebasestorage.googleapis.com/v0/b/toystrader-a494f.appspot.com/o/projectFiles%2F<FILE>?alt=media';

function Item(props) {

    return (
        <li>
            {props.isOwned && <button onClick={() => props.deleteItem(props.id)}>del</button>}
            <img alt={props.title} src={urlFormat.replace('<FILE>', props.file)} />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <span style={{flex: 1}}>{props.title}</span>
                <button style={{ alignSelf: 'center' }} onClick={() => props.addRemoveWish(props)}>
                    {props.wished ? 'wished' : 'wish'}</button>
            </div>
        </li>
    );
}

export default Item;
