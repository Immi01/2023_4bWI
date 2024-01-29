import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);

    useEffect(() => {
        fetch("https://65b0e87ad16d31d11bdd8cae.mockapi.io/swp/person").then(
            res => res.json().then(data=>{
                setPeople(data);
                setFilteredPeople(data);
            })
        );
    }, [])

    const filterPeople = (filter) => {
        let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
        setFilteredPeople(filtered);
    }

    return (
        <div className="">
            <div className="fixed border mb-4 bg-white w-full h-28 p-8">
                <input type="text" className="border m-2" placeholder="Search" onChange={(el) => {
                    console.log(el.target.value);
                    filterPeople(el.target.value);
                }}/>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
                {filteredPeople.map(person => {
                    return <Card name={person.name} imageUri={person.avatar} title={person.job}/>
                })}
            </div>
        </div>
    );
}