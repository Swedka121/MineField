import "./sass/index.scss"
import React, { useEffect, useState } from "react";

function App() {
  const [scrolltop, useScrolltop] = useState(0)

  window.addEventListener("scroll", e => {
    console.log(window.scrollY)
    useScrolltop(window.scrollY)
  })
  
  return (
    <div className="App" style={{"--scrollTop":`${scrolltop}px`}}>
      <div className='parallax'>
        <img id="p-1"></img>
        <div className="p-2">
          <div className="title"></div>
          <button onClick={() => {console.log(1)}}>Play</button>
        </div>
        <img id="p-4"></img>
      </div>
      <div className="body">
        <div className="container">
          <div className="back">
            <div className="back-elem back1"></div>
            <div className="back-elem back2"></div>
            <div className="back-elem back3"></div>
            <div className="back-elem back4"></div>
            <div className="back-elem back5"></div>
          </div>
          <div className="About">
            <div className="block1 block">
              <div className="img"></div>
              <div className="text">
                <h1>Hello</h1>
                <p>Хочеш пограти на українському приватному сервері майнкрафт?<br/>Тоді тобі до нас</p>
              </div>
            </div>
            <div className="block2 block">
              <div className="img"></div>
              <div className="text">
                <h1>Comuniti</h1>
                <p>Лише 30 граіців<br/>
                здатні відбудувати світ<br/>
                MineField</p>
              </div>
            </div>
            <div className="block3 block">
              <div className="img"></div>
              <div className="text">
                <h1>Events</h1>
                <p>Робіть та беріть участь в івентах на нашому сервері</p>
              </div>
            </div>
          </div>
          <div className="Moderation">
            <h1 className="title">Moderation</h1>
            <p className="text">Наша модерація:<br/>
              Swedka121 - Девелопер<br/>
            </p>
          </div>
          <div className="Social">
            <h1 className="title">Social</h1>
            <div className="blocks">
              <div className="block">
                <div className="light"></div>
                <div className="body1"></div>
              </div>
              <div className="block">
                <div className="light"></div>
                <div className="body1"></div>
              </div>
              <div className="block block-soc-3">
                <div className="light"></div>
                <div className="body1"></div>
              </div>
            </div>
          </div>
          <div className="HowToPlay">
            <h1 className="title">How to play?</h1>
            <div className="block4 block">
              <div className="img"></div>
              <div className="text">
                <h1>Discord</h1>
                <p>Перейди в наш діскорд за посиланням:</p>
              </div>
            </div>
            <div className="block5 block">
              <div className="img"></div>
              <div className="text">
                <p>Та слідуй інструкціям в діскорді</p>
              </div>
            </div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
