import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loader() {
  return (
    <div style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
    }}>
        <Oval
            height="80"
            width="80"
            color="#1976D2"
            secondaryColor="#d5e6f7"
            ariaLabel="oval-loading"
        />
    </div>
  )
}

export default Loader