import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { WineryDetails } from "../types/Winery";

interface Props {
  selectedWinery: string;
}

export const WineryDetailsYear = ({ selectedWinery }: Props) => {
  const [yearDetails, setYearDetails] = useState<WineryDetails>();

  // Gets wine year percentages based on selected id
  const getYearDetails = async () => {
    await Axios({
      method: "GET",
      url: `http://localhost:5000/api/breakdown/year-variety/${selectedWinery}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setYearDetails(res.data);
    });
  };

  useEffect(() => {
    if (!yearDetails) {
      getYearDetails();
    }
  }, [yearDetails, selectedWinery]);

  return (
    <ListGroup flush>
      {yearDetails &&
        yearDetails.breakdown.map(
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
