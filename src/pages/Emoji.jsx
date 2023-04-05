import React, { useRef, useState } from 'react';
import emoji from '../assets/JsonData/data.json';
import '../assets/css/emoji.css';
import { useSelector } from 'react-redux';

const Emoji = () => {
  let search = ''; 
  console.log(search);
  search = useSelector(state => state.SearchData.search);
  const tags = emoji.filter(e => e.keywords.includes(search) || e.title.includes(search) || e.symbol.includes(search));
  if(search === '')
  {
    tags.slice(0, 20)
  }
  // console.log(tags.slice(0, 20));

  return (
    <>
        <h1 style={{ paddingBottom: '20px' }}>Emoji</h1>
        <div id='emoji_layout'>
          {
          tags.map((e) => {
            return (
              <>
                <div className="emoji_box">
                  <div className="emoji_symbol">
                    {e.symbol}
                  </div>
                  <div className="emoji_title">
                    <h4>{e.title}</h4>
                  </div>
                  <button className="copy_btn" onClick={() => { navigator.clipboard.writeText(e.symbol) }}>Copy</button>
                </div>
              </>
            )
          })
          }
        </div>
      </>
  )
}

export default Emoji;