/* eslint-disable array-callback-return */
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Lupe from "../assets/map.png";

export default function Inputs({ light, setLight, data }: any) {
  const [continent, setContinent] = useState<string>("");

  const continents = data.map((item: { continents: any }) => item.continents);
  const filtered = continents.map((item: any[]) => item[0]);

  const removeDuplicates = (array: any) => {
    return array.filter((el: any, index: any) => array.indexOf(el) === index);
  };
  const filteredContinents = removeDuplicates(filtered);

  const countries = data.map((item: any) => item);

  //   console.log(countries);

  let continent_country = countries.filter(function (country: any) {
    return country.continents[0] === continent;
  });

  console.log(continent_country);

  const continentChangeHandler = (event: any) => {
    setContinent(event.target.value);
  };

  return (
    <div>
      <SearchDiv light={light}>
        <img src={Lupe} alt="" />
        <Input
          light={light}
          type="search"
          name=""
          id=""
          placeholder="Search for a country..."
        />
      </SearchDiv>
      <select name="Continent" onChange={continentChangeHandler}>
        <option value="all"> Filter By Region</option>
        {filteredContinents.map((item: any) => {
          return <option value={item}>{item}</option>;
        })}
      </select>

      <div>
        {continent_country.map((item: any) => {
          return <p>{item.name.common}</p>;
        })}
      </div>
    </div>
  );
}

const SearchDiv = styled.div<any>`
  height: 48px;
  width: 343px;
  border-radius: 5px;
  background-color: ${(props) => (props.light ? "#FAFAFA" : "#171823")};
  display: flex;
`;

const Input = styled.input<any>`
  width: 300px;
  height: 48px;
  background-color: ${(props) => (props.light ? "#FAFAFA" : "#171823")};
  border: none;
  outline: none;
`;
