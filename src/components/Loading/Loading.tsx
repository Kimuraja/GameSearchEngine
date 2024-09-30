import React from 'react'
import './_Loading.scss'

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <h1 className="loading__heading">Lodaing data...</h1>
      <div className="spinner-border text-light" role="status"/>
    </div>
  )
}

export default Loading