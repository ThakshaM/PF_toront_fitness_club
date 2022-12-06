
import React, {useEffect, useState} from "react";
import StudiosPage from "../studio_view_page";
import Geolocation from "../Location"
import {Link, useParams } from "react-router-dom";



const Converter = () => {
    const [postal, setPostal] = useState()
    const[active, setActive] = useState()
    const location = Geolocation();

     const submit = () => {
        return (<p> hello </p>)
    }


    return (


        <> <p>
            {
                location.loaded ? JSON.stringify(location) : "no details"

            }
            </p>
            {console.log(location.coordinates.lat)}
            {console.log(location.coordinates.long)}

            <p> Enter your postal code </p>
            <input
                type="text"
                 onChange={event => setPostal(event.target.value)}
            />

            <button
                     style={{background: 'darkgrey'}}
                    onClick={() => setActive("byPostal")}
                >
                    <Link to={`/studios/${postal}`}>submit</Link>

            </button>
            <p> By current location </p>

            <button
                     style={{background: 'darkgrey'}}
                    onClick={() => setActive("byCurrentLocation")}
                >
                    <Link to={`/studios/${location.coordinates.lat}/${location.coordinates.lng}`}>submit</Link>

            </button>

            {active === "byPostal" && <StudiosPage/>}
            {active === "byCurrentLocation" && <StudiosPage/>}


            <p> {postal}</p>

        </>
    )
}

export default Converter;
