import React from 'react'
import NoteScreen from '../../notes/NoteScreen';
import NothingSelected from './NothingSelected';
import Slidebar from './Slidebar';

const JournalScreen = () => {
      return (
            <div className='journal__main-content'>

                  <Slidebar />

                  {/* Contenido principal */}
                  <main>

                        {/* <NothingSelected /> */}

                        <NoteScreen />

                  </main>

            </div>
      )
}

export default JournalScreen;