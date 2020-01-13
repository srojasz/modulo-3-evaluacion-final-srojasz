import React from 'react'



export default () => {

  const logo = "https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png";

  return (
    <header className="d-flex justify-content-center m-5">
      <img className="img-fluid" src={logo} alt="Cabecera de la serie Rick and Morty" />
    </header>
  )
}

