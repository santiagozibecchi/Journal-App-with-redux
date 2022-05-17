import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
      return (
            <div className='notes__main-content'>

                  <NotesAppBar />

                  <div className='notes__content'>

                        <input
                              type="text"
                              placeholder='Some awesome title'
                              className='notes__title-input'
                              autoComplete='off'
                        />

                        <textarea
                              placeholder='What happend today?'
                              className='notes__textarea'
                        ></textarea>

                        <div>
                              <img
                                    src='https://www.batiburrillo.net/wp-content/uploads/2019/07/Ampliacio%CC%81n-de-imagen-en-li%CC%81nea-sin-perder-calidad.jpg'
                                    alt='imagen de leon'
                                    className='notes__image'
                              />
                        </div>

                  </div>

            </div>
      )
}

export default NoteScreen