// Card body 
import React from "react";
import logo from '../logo.svg';

class Card extends React.Component {
  render() {
    return (
      <div>
            {/* card on body  */}
            {/* <div className="col-md-10 border border-success ms-auto py-3"> */}
              <div className="row m-1">
                <div className="col mb-lg-2">
                  <div
                    className="card shadow rounded"
                    style={{ width: "15rem", height: "26rem" }}
                  >
                    <a
                      id=""
                      href="#"
                      className="text-center p-1"
                      style={{ height: "285px" }}
                    >
                      <img
                        src={logo}
                        style={{
                          maxWidth: "200px",
                          maxHeight: "350px",
                          textAlign: "center",
                        }}
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="card-body">
                              <p className="card-title" style={{color: 'black'}}>Title</p>
                              <h5 className="card-text" style={{color: 'black'}}>Price</h5>
                              <form action="/#" method="post">
					                
                                <button className="btn btn-danger m-1" type='submit' name='rmvFromCart' style={{width: "100%"}}>Remove from Cart</button>
                                
                                <button className="btn btn-primary m-1" type='submit' name='addToCart' style={{width: "100%"}}>Add to Cart</button>
                               
                            
                            </form>
                            </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          
      </div>
    );
  }
}
export default Card;
