import "./CartSec1.css";
import BlindPro from "../../../assets/blind.jpg";
import { MdDelete } from "react-icons/md";
export default function CartSec1() {
  return (
    <div className="cartsec1 container">
        <div className="cartsec1-table">
            <table>
                <tr>
                   <th>Products</th>
                   <th >Title</th>
                   <th >Quantity</th>
                   <th>Price</th>
                   <th>Total</th>
                   <th>Remove</th>
                </tr> 
                <tr>
                    <td>
                        <img src={BlindPro} className="img-fluid cartproimg" alt="" />
                    </td>
                    <td >
                        Smart Stick For Blind People
                    </td>
                    <td>
                        <div className="quan-box">
                            2
                        </div>
                    </td>
                    <td>10$</td>
                    <td>20$</td>
                    <td>
                        <MdDelete size={30}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={BlindPro} className="img-fluid cartproimg" alt="" />
                    </td>
                    <td >
                        Smart Stick For Blind People
                    </td>
                    <td>
                        <div className="quan-box">
                            2
                        </div>
                    </td>
                    <td>10$</td>
                    <td>20$</td>
                    <td>
                        <MdDelete size={30}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={BlindPro} className="img-fluid cartproimg" alt="" />
                    </td>
                    <td >
                        Smart Stick For Blind People
                    </td>
                    <td>
                        <div className="quan-box">
                            2
                        </div>
                    </td>
                    <td>10$</td>
                    <td>20$</td>
                    <td>
                        <MdDelete size={30}/>
                    </td>
                </tr>
            </table>

        </div>
    </div>
  )
}
