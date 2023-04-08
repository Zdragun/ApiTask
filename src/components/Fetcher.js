import React, { useState, useEffect } from 'react';
import '../css/styles.css'
import { Link } from 'react-router-dom';
import { image2, Rectangle31 } from '../public/images.js'
import { Rating } from 'react-simple-star-rating'
import { fetchData, /* fetchLocationName */ } from '../api/api'


const Fetcher = () => {

    const [info, setInfo] = useState([]);
    const [rating, setRating] = useState(0)
    /*    const [some, setSome] = useState(null); */

    /*  const locNavigate = () => {
         fetchLocationName(49.84441, 24.02543).then((resJson) => {
             const { adminArea5, adminArea1 } = resJson.results[0].locations[0];
             setSome(JSON.stringify(adminArea5 + "," + adminArea1))
         })
     }
  */
 

     const handleRating = (rate) => {
        setRating(rate)
    
      
      }
    
     
    useEffect(() => {
        fetchData().then(data => { console.log(data); setInfo(data) })

    }, []);


    /* 
        useEffect(() => {
    
            locNavigate()
        }, []);
     */

    return (
        <div> {info.map((user, id) => {
            return (
                <div className='container' key={id}>

                    <div className='minContainer'>
                        <div className='imageCont'>
                            <img height={85} width={85} src={image2} alt="imghospital" /></div>
                        <div className='midCont'>
                            <Link className='reLink' to={"/detailedJob"}><h2>{user.title}</h2></Link>
                            <p style={{ paddingBottom: 8 }}>{user.name}</p>
                            <p>{user.location.lat} {user.location.long}</p>{/*<p>{JSON.parse(some)}</p> */}
                        </div>
                    </div>
                    <div className='asterisk'><Rating size={17}  onClick={handleRating}/>{rating}</div>
                    <div className='timeFlex'>
                        <img src={Rectangle31} alt="posted" />
                        <p>{user.createdAt}</p>
                    </div>

                </div>
            )
        })
        }
        </div>
    )
}

export default Fetcher