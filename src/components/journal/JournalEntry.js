import React from 'react'

const JournalEntry = () => {
      return (
            <div className='journal__entry pointer'>

                  <div
                        className='journal__entry-picture'
                        style={{
                              backgroundSize: 'cover',
                              backgroundImage: 'url(https://www.gettyimages.es/gi-resources/images/500px/983703508.jpg)'
                        }}
                  ></div>

                  <div className='journal__entry-body'>
                        <p className='journal__entry-title'>
                              Un nuevo dia
                        </p>
                        <p className='journal__entry-content'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                  </div>

                  <div className='journal__entry-date-box'>
                        <span>Monday</span>
                        <h4>28</h4>
                  </div>


            </div>
      )
}

export default JournalEntry