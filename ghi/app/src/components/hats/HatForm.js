import React, { useState, useEffect} from 'react';

function HatForm() {
    const [ locations, setLocations ] = useState([]);
    const [formData, setFormData ] = useState({
        name: '',
        fabric: '',
        style_name: '',
        color: '',
        location: '',
    })

    const getData = async () => {
        const url = 'http://localhost:8100/api/locations/'
        const resp = await fetch(url);

        if (resp.ok) {
            const data = await resp.json();
            setLocations(data.locations);
        }
    }

    useEffect(() => {
        getData();
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hatUrl = 'http://localhost:8090/api/hats/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const resp = await fetch(hatUrl, fetchConfig);
        console.log("Response: ", resp)

        if (resp.ok) {
            setFormData({
                name: '',
                fabric: '',
                style_name: '',
                color: '',
                location: '',
            });
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }

    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add A Hat</h1>
                        <form onSubmit={handleSubmit} id="create-hat-form">
                            <div className="form-floating mb-3">
                                <input  onChange={handleFormChange} value={formData.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                                <label htmlFor="name">Hat Name</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input  onChange={handleFormChange} value={formData.style_name} placeholder="style_name" required type="text" name="style_name" id="style_name" className="form-control"/>
                                <label htmlFor="style_name">Hat Style</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.fabric} placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control"/>
                                <label htmlFor="fabric">Fabric</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.color} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                                <label htmlFor="color">Color</label>
                            </div>
                            {/* <div className="form-floating mb-3">
                            <input placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                                <label htmlFor=""></label>
                            </div> */}
                            <div className="form-floating mb-3">
                                <select onChange={handleFormChange} value={formData.location} required name="location" id="location" className="form-select">
                                    <option value="">Choose a closet</option>
                                    {
                                        locations.map(location => {
                                            return (
                                                <option key={location.id} value={location.id}>{location.closet_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HatForm;