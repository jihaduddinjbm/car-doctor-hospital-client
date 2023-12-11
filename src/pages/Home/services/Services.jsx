import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setService] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl text-orange-500">service</h2>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map( service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }

            </div>
           
        </div>
    );
};

export default Services;