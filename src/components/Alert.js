import React from 'react'

const Alert = (props) => {
  return (
<>
<div className="container " style={{marginTop:"20px"}}>
<div className={`alert alert-${props.alert.type}`} role="alert">
 {props.alert.msg}
</div>

</div>

</>
  )
}

export default Alert
