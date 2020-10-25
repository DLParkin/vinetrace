import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { WineryDetails } from "../types/Winery";

interface Props {
  selectedWinery: string;
}

export const WineryDetailsVariety = ({ selectedWinery }: Props) => {
  const [varietyDetails, setVarietyDetails] = useState<WineryDetails>();

  // Gets wine variety percentages based on selected id
  const getVarietyDetails = async () => {
    await Axios({
      method: "GET",
      url: `http://localhost:5000/api/breakdown/variety/${selectedWinery}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setVarietyDetails(res.data);
    });
  };

  useEffect(() => {
    if (!varietyDetails) {
      getVarietyDetails();
    }
  }, [varietyDetails, selectedWinery]);

  return (
    <ListGroup flush>
      {varietyDetails &&
        varietyDetails.breakdown.map(
          (
            details: { key: React.ReactNode; percentage: React.ReactNode },
            index: number
          ) => (
            <ListGroupItem action key={index}>
              <Row>
                <Col xs={10}>{details.key}</Col>
                <Col xs={2}>{`${details.percentage}%`}</Col>
              </Row>
            </ListGroupItem>
          )
        )}
    </ListGroup>
  );
};
