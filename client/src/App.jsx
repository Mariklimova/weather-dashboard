import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './app.module.css'

function App() {


  return (
    <>
      <div className={style.container}>
        <div className={style.current_info}>
          <div className={style.data_container}>
            <div className={style.time}>
              12:30 <span>PM</span>
            </div>
            <div className={style.date}>
              Monday, 24 May
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
