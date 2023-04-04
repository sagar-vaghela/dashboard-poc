import React from 'react';
import emoji from '../assets/JsonData/data.json';
import '../assets/css/emoji.css';

const Emoji = () => {
  const tags = emoji.filter(e => e.keywords.includes(''));
  // console.log(tags);

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
                    {e.title}
                  </div>
                  <button className="copy_btn">Copy</button>
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