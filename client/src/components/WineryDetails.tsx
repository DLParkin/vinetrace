import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { BiArrowBack } from "react-icons/bi";
import edit from "../icons/edit.svg";
import w from "../icons/w.svg";
import { WineryDetailsYear } from "./wineryDetails/WineryDetailsYear";
import { WineryDetailsVariety } from "./wineryDetails/WineryDetailsVariety";
import { WineryDetailsRegion } from "./wineryDetails/WineryDetailsRegion";
import { WineryDetailsYearVariety } from "./wineryDetails/WineryDetailsYearVariety";
import { EditModal } from "./EditModal";
import { Winery } from "./types/Winery";

interface Props {
  selectedWinery: any;
  setShowWineryDetails: any;
}

export const WineryDetails = ({
  selectedWinery,
  setShowWineryDetails,
}: Props) => {
  const [winery, setWinery] = useState<Winery>();
  const [activeTab, setActiveTab] = useState("1");
  const [modal, setModal] = useState(false);

  // Disabled as ts moans about the call, use the lotCode to pull in the relevant json object
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWinery = async () => {
    await Axios({
      method: "GET",
      url: `http://localhost:5000/api/winery/${selectedWinery}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setWinery(res.data);
    });
  };

  useEffect(() => {
    if (!winery) {
      getWinery();
    }
  }, [winery, selectedWinery]);

  const toggled = () => setModal(!modal);

  const toggle = (tab: React.SetStateAction<string>) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (winery === undefined) {
    return <>Something has gone wrong</>;
  }

  return (
    <div className="winery-details-container">
      <BiArrowBack
        size="1.5rem"
        className="hover-icon"
        onClick={() => setShowWineryDetails(false)}
      />
      <Row>
        <Col xs={10}>
          <h2>
            <img src={w} alt="winery logo" />
            {winery.lotCode ? ` ${winery.lotCode}` : " Lot code not set"}
          </h2>
        </Col>
        <Col xs={2}>
          <img src={edit} alt="edit" onClick={toggled} className="hover-icon" />
        </Col>
      </Row>
      {winery.description && <p>{winery.description}</p>}
      <Row>
        <Col xs={9}>
          <p>Volume</p>
          <p>Tank Code</p>
          <p>Product state</p>
          <p>Owner</p>
        </Col>
        <Col xs={3}>
          <p>{winery.volume ? `${winery.volume} L` : "unavailable"}</p>
          <p>{winery.tankCode ? winery.tankCode : "unavailable"}</p>
          <p>{winery.productState ? winery.productState : "unavailable"}</p>
          <p>{winery.ownerName ? winery.ownerName : "unavailable"}</p>
        </Col>
      </Row>
      <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("1");
            }}
            className="hover-icon"
          >
            Year
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("2");
            }}
            className="hover-icon"
          >
            Variety
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("3");
            }}
            className="hover-icon"
          >
            Region
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("4");
            }}
            className="hover-icon"
          >
            Year & Variety
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <WineryDetailsYear selectedWinery={selectedWinery} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <WineryDetailsVariety selectedWinery={selectedWinery} />
        </TabPane>
        <TabPane tabId="3">
          <WineryDetailsRegion selectedWinery={selectedWinery} />
        </TabPane>
        <TabPane tabId="4">
          <WineryDetailsYearVariety selectedWinery={selectedWinery} />
        </TabPane>
      </TabContent>
      {modal && (
        <EditModal toggled={toggled} modal={modal} lotCode={selectedWinery} />
      )}
    </div>
  );
};
