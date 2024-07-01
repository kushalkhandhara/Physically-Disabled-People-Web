import "./CartSec2.css";

export default function CartSec2() {
  return (
    <div className="cartsec2 container">
        <div className="cartsec2-main row">
            <div className="cartsec2-side1 col-sm-5">
                <div className="cartsec2-side1-header">
                    <h2>
                        Cart Total
                    </h2>
                </div>
                <div className="bill">

                    <div className="bill-total mt-5">
                        <div className="total-title">
                            <p>Subtotal</p>
                        </div>
                        <div className="total-price">
                            <p>
                                $0
                            </p>
                        </div>
                    </div>
                    <div className="bill-total mt-3">
                        <div className="total-title">
                            <p >Total</p>
                        </div>
                        <div className="total-price">
                            <p>
                                $0
                            </p>
                        </div>
                    </div>
                    <div className="bill-total mt-3">
                        <div className="total-title">
                            <p style={{fontWeight:"bold"}}>Total</p>
                        </div>
                        <div className="total-price">
                            <p style={{fontWeight:"bold"}}>
                                $0
                            </p>
                        </div>
                    </div>

                    <div className="bill-btn mt-5">
                        <button>Proceed To Checkout</button>

                    </div>
                </div>

            </div>
            <div className="cartsec2-side2  col-sm-7">
                <p>
                If you have a promocode, Enter it here
                </p>
                <div className="promoinputs">
                    <div className="promocode-inp">
                        <input type="text" placeholder="Enter Promo Code" name="" id="" />
                    </div>
                    <div className="inpbtn">
                        <button>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
