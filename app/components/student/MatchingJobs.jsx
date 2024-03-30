import React from 'react'

const MatchingJobs = (matchedJobs) => {
  return (
    <ul className="columns-3">
            {matchedJobs.length > 0 ? (
              matchedJobs.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <li></li>
            )}
          </ul>
  )
}

export default MatchingJobs;