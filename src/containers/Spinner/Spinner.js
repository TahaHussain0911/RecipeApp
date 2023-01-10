import React from 'react'
import loading from '../../assets/loading.gif'
import './Spinner.css'
const Spinner = () => {
  return (
<div class="d-flex justify-content-center">
    <img src={loading} alt="" />
</div>  
)
}

export default Spinner