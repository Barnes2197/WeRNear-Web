import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
import 'C:/Users/Maurice/Documents/WeRNear/WeRNear-Web/wernear/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './profilepic.css'
class Profile extends Component
{
    render()
    {
        return(
            <div className= "position">
                <Image src="https://static.comicvine.com/uploads/scale_small/11112/111122896/5192096-vegeta_fukkatsu_no_f_2_by_bardocksonic-d9ik5c3.png" className="pic"
                roundedCircle/>
            </div>
        )
    }
}

export default Profile;