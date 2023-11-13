import React, { useEffect, useState } from "react"
import './loader.scss'

const LoaderPage = () => {

  return (
      <div className="cube-wrapper">
        <div className="cube-folding">
          <span className="leaf1"></span>
          <span className="leaf2"></span>
          <span className="leaf3"></span>
          <span className="leaf4"></span>
        </div>
        <span className="loading" data-name="Loading">
          Bea eta Unai
        </span>
      </div>)

}

export default LoaderPage
