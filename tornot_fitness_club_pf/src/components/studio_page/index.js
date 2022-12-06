import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';



const StudiosPage = ({match}) => {

    const [studios, setStudios] = useState([]);
    const [query, setQuery] = useState({search: ''})
    const { id } = useParams();

    useEffect(() => {
        const {search} = query;

        fetch(`http://127.0.0.1:8000/studio/studio_page/${id}/`)
            .then(res => res.json())
            .then(json => {
                setStudios(json.data[0]);
            })

    }, [query])




    //{"data": [{"name": "pink", "address": "130 blvd", "phone_number": "123456789", "location": "90.0, 80.0", "amenities": "[]", "link_to_directions": "https://www.google.com/maps/dir/?api=1&origin=90.0,180.0&destination=90.0,80.0&travelmode=driving", "images": "[]"}]}

    return (
        <>

                      <h1>{studios.name}</h1>
                         <p>{studios.address}</p>
                         <p>{studios.phone_number}</p>
                         <p>{studios.location}</p>
                         <a href={studios.link_to_directions}>directions</a>
        </>
    )
}

export default StudiosPage;
