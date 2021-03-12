import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import pet, { ANIMALS, Animal } from "@frontendmasters/pet";
import { connect } from "react-redux";
import Results from "./Results";
import useDropdown from "./useDropdown";
import changeTheme from "./actionCreators/changeTheme";
import changeLocation from "./actionCreators/changeLocation";

interface OwnProps {
  location: string;
  theme: string;
  setLocation: any;
  setTheme: any;
  path: any;
}

type Props = OwnProps;

const SearchParams = (props: Props) => {
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([] as Animal[]);

  function requestPets() {
    pet
      .animals({
        location: props.location,
        breed,
        type: animal
      })
      .then(({ animals }) => {
        setPets(animals || []);
        console.log("animals", animals);
      });
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={props.location}
            placeholder="Location"
            onChange={(e) => props.setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={props.theme}
            onChange={(e) => props.setTheme(e.target.value)}
            onBlur={(e) => props.setTheme(e.target.value)}>
            <option value="peru">Peru</option>
            <option value="darkblue">Darkblue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: props.theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

const mapStateToProps = ({ theme, location }: Props) => ({
  theme,
  location
});

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: string }) => any
) => ({
  setTheme: (theme: string) => dispatch(changeTheme(theme)),
  setLocation: (location: any) => dispatch(changeLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
