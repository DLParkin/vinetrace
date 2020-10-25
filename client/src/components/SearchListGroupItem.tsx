import React from "react";
import {
  Col,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
} from "reactstrap";
import { Winery } from "./types/Winery";

interface Props {
  result: Winery; // TODO fix tyoe
  handleWineryDetails: (e: any) => void;
}

export const SearchListGroupItem = ({ result, handleWineryDetails }: Props) => {
  return (
    <ListGroupItem action style={{ paddingBottom: "0px" }}>
      <Row>
        <Col xs="10" className="list-group-card-heading">
          <ListGroupItemHeading
            onClick={(e) => handleWineryDetails(e)}
            className="hover-icon"
          >
            {result.lotCode}
          </ListGroupItemHeading>
          <ListGroupItemText>{result.description}</ListGroupItemText>
        </Col>
        <Col xs="2">
          <p>{result.volume}</p>
          <p>{result.tankCode}</p>
        </Col>
      </Row>
    </ListGroupItem>
  );
};
