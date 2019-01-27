import React from 'react'
import {ANIMALS} from 'petfinder-client'

class SearchParams extends React.Component {

    render() {
        return (
            <div className="search-params">
                <label htmlFor="location">
                    Location
                    <input 
                        onChange={this.handleLocationChange}
                        id="location" 
                        value={this.state.location} 
                        placeholder="Location"
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal" 
                        value={this.state.animal} 
                        onChange={this.handleAnimalChange} 
                        onBlur={this.handleAnimalChange}
                    >
                        <option />
                        {ANIMALS.map(animal => (
                            <option key={animal} value={animal}>
                                {animal} 
                            </option> 
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={this.state.breeds.length === 0}
                        id="breed" 
                        value={this.state.breed} 
                        onChange={this.handleBreedChange} 
                        onBlur={this.handleBreedChange} 
                    >

                        <option />
                        {this.state.breeds.map(breed => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option> 
                        ))}
                    </select>
                </label>
                        <button>Submit</button>
            </div>
        )
    }
}

export default SearchParams
