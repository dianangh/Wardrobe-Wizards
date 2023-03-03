import React from 'react';

class ShoesForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.
    // }
}

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Shoe Wardrobe</h1>
                <form onSubmit={this.handleSubmit} id="create-location-form">
                <div className="form-floating mb-3">
                    <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="brand">Manufacturer</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.roomCount} onChange={this.handleRoomCountChange} placeholder="Room count" required type="number" name="room_count" id="room_count" className="form-control" />
                    <label htmlFor="room_count">Room count</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.city} onChange={this.handleCityChange} placeholder="City" required type="text" name="city" id="city" className="form-control" />
                    <label htmlFor="city">City</label>
                </div>
                <div className="mb-3">
                    <select value={this.state.state} onChange={this.handleStateChange} required name="state" id="state" className="form-select">
                    <option value="">Choose a state</option>
                    {this.state.states.map(state => {
                        return (
                        <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                        </option>
                        );
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default ShoesForm;
