import React from 'react'

export default function Score({head, score, extra}) {
  return (
    <div id="square">
      <div className="head">
        {head !== 0 ? head : ''}
      </div>
      <div className="body">
        <div className="score">
          <div>
            {score !== 0 ? score : ''}
          </div>
        </div>
        <div className="extra">
          <div>
            {extra !== 0 ? extra : ''}
          </div>
        </div>
      </div>
    </div>
  )
}


