import React, { useState, useEffect } from "react";

function ShoeForm() {
    const [bins, setBins] = useState([]);
    const [formData, setFormData] = useState({
        brand: "",
        model_name: "",
        color: "",
        style: "",
        photo_url: "",
        bin_storage: "",
    });

    const getData = async () => {
        const url = "http://localhost:8100/api/bins/";
        console.log("this is the url, line 16", url)
        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        console.log("this is the data, line 21", data)
        console.log('line 24, bins data', setBins(data.bins))
        setBins(data.bins);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("href line 33", formData.bin_storage)
        const url = "http://localhost:8080/api/shoes/";
        console.log("line 34, url for the fetch", url)
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
                headers: {
                'Content-Type': 'application/json',
                },
        };

        const response = await fetch(url, fetchConfig);
        console.log("this is the response", response)

        if (response.ok) {
            setFormData({
                brand: "",
                model_name: "",
                color: "",
                style: "",
                photo_url: "",
                bin_storage: "",
            });
        }
        console.log("line 58 response", response)
    }

    const handleFormChange = (event) => {
        const value = event.target.value;
        console.log("this is the value", value)
        const inputName = event.target.name;
        console.log("line 64 input name", inputName)
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
                        <h1>Create a new Shoe</h1>
                        <form onSubmit={handleSubmit} id="create-location-form">
                            <div className="form-floating mb-3">
                            <input onChange={handleFormChange}  placeholder="Manufacturer" required type="text" name="brand" id="brand" className="form-control" />
                            <label htmlFor="brand">Manufacturer</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input
                            onChange={handleFormChange}
                            placeholder="Model Name"
                            required
                            type="text"
                            name="model_name"
                            id="model_name"
                            className="form-control"
                        />
                        <label htmlFor="model_name">Model Name</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input
                            onChange={handleFormChange}
                            placeholder="Color"
                            required
                            type="text"
                            name="color"
                            id="color"
                            className="form-control"
                        />
                        <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input
                            onChange={handleFormChange}
                            placeholder="Style"
                            type="text"
                            name="style"
                            id="style"
                            className="form-control"
                        />
                        <label htmlFor="style">Style</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input
                            onChange={handleFormChange}
                            placeholder="Picture"
                            type="text"
                            name="photo_url"
                            id="photo_url"
                            className="form-control"
                        />
                        <label htmlFor="photo_url">Picture</label>
                        </div>
                        <div className="form-floating mb-3">
                                <select onChange={handleFormChange} value={formData.bins} required name="bin_storage" id="bin_storage" className="form-select">
                                    <option value="">Choose a Bin Wardrobe</option>
                                    {
                                        bins.map(bin_storage => {
                                            return (
                                                <option key={bin_storage.id} value={bin_storage.href}>{bin_storage.closet_name}</option>
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
    );
}

export default ShoeForm;
