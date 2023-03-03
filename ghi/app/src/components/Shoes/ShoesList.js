import { useState, useEffect } from "react";

function ShoeList() {
    const [shoes, setShoes] = useState([]);
    const [bins, setBins] = useState([]);

    const handleDelete = async (event) => {
        console.log("It's gonna be deleted")
        console.log("The item will be deleted", typeof(event.target.id));
        const url = `http://localhost:8080/api/shoes/${event.target.id}`

        const fetchConfig = {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(url, fetchConfig)
        const data = await response.json();

        setShoes(shoes.filter(shoe => String(shoe.id) !== event.target.id))
    }

    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/shoes/");
        if (response.ok) {
            const data = await response.json();
            setShoes(data.shoes);
            console.log("data line 30", data)
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
                        <h1 className="text-center">List of Shoes</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    {/* <th>Model</th> */}
                                    <th>Color</th>
                                    <th>Style</th>
                                    <th>Bin Storage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    shoes.map(shoe => {
                                        return (
                                            <tr key={shoe.id}>
                                                <td>{ shoe.brand }</td>
                                                {/* <td>{ shoe.model_name }</td> */}
                                                <td>{ shoe.color }</td>
                                                <td>{ shoe.style }</td>
                                                <td>{ shoe.bin_storage }</td>
                                                <td><button onClick={handleDelete} id={shoe.id} className="btn btn-sm btn-danger">Delete</button></td>
                                            </tr>
                                        )}
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoeList;
