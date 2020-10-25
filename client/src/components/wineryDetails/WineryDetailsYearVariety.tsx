import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { WineryDetails } from "../types/Winery";

interface Props {
  selectedWinery: any;
}

export const WineryDetailsYearVariety = ({ selectedWinery }: Props) => {
  const [regionDetails, setRegionDetails] = useState<WineryDetails>();

  // Gets wine region percentages based on selected id
  const getRegionDetails = async () => {
    await Axios({
      method: "GET",
      url: `http://localhost:5000/api/breakdown/year-variety/${selectedWinery}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setRegionDetails(res.data);
    });
  };

  useEffect(() => {
    if (!regionDetails) {
      getRegionDetails();
    }
  }, [regionDetails, selectedWinery]);

  return (
    <ListGroup flush>
      {regionDetails &&
        regionDetails.breakdown.map(
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
