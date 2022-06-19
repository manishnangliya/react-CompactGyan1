import React from 'react'
import './contactpage.css';

const Contact = () => {
  return (
    <div className="form-body my-4">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Write Your query</h3>
              <p>Fill in the data below.</p>
              <form className="requires-validation" noValidate>

                <div className="col-md-12">
                  <input className="form-control" type="text" name="name" placeholder="Full Name" required />
                </div>

                <div className="col-md-12">
                  <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                </div>
                <div className="col-md-12">
                  <input className="form-control" type="text" name="number" placeholder="Mobile Number" required />
                </div>

                <div className="form-floating my-3">
                  <textarea className="form-control" style ={{color:"black",height: "100px"}}type="text" placeholder="Write your query" id="floatingTextarea"></textarea>
                  <label htmlFor="floatingTextarea " style ={{color: "#8D8D8D"}}>Write your Query</label>
                </div>


                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div >

  )
}

export default Contact
