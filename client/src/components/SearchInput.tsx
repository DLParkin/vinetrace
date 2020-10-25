import React from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import glass from "../icons/glass.svg";

interface Props {
  searchTerm: string;
  handleSearch: (e: any) => void;
}

export const SearchInput = (props: Props) => {
  return (
    <div className="search-input">
      <h3>
        Wine Search <img src={glass} alt="winery logo" />
      </h3>
      <Form>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaSearch />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Search by lot code and description..."
              value={props.searchTerm}
              onChange={(e) => props.handleSearch(e)}
            />
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};
