import { useState, useEffect } from 'react';


function HatList() {
    const [hats, setHats ] = useState([]);
    const [locations, setLocations ] = useState([])

    const handleDelete = async (e) => {
        console.log("hello")
        console.log("e.target.id", typeof(e.target.id));
        const url = `http://localhost:8090/api/hats/${e.target.id}`


        const fetchConfig = {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }

        const resp = await fetch(url, fetchConfig)
        const data = await resp.json();

        setHats(hats.filter(hat => String(hat.id) !== e.target.id))

    }

    const getData = async () => {
        const resp = await fetch('http://localhost:8090/api/hats/');
        if (resp.ok) {
            const data = await resp.json();
            setHats(data.hats);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>List Hats</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Style</th>
                                <th>Fabric</th>
                                <th>Color</th>
                                <th>Location</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                hats.map(hat => {
                                    return (
                                        <tr key={hat.id}>
                                            <td>{ hat.name }</td>
                                            <td>{ hat.style_name }</td>
                                            <td>{ hat.fabric }</td>
                                            <td>{ hat.color }</td>
                                            <td>{ hat.location }</td>
                                            <td><button onClick={handleDelete} id={hat.id} className="btn btn-sm btn-danger">Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default HatList;