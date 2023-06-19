import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fooddata from "./Data";

export default function Home() {
  const [menu, setMenu] = useState(Fooddata);
  const filteriteams=(curiteams)=>{
    const updateiteams= Fooddata.filter((cur,index)=>{
      return cur.category  == curiteams
    });
    setMenu(updateiteams)
  }
  return (
    <div>
      <section className="container mt-2">
        <h2 className="text-center">Search Your Food </h2>
        <div className="btn-container d-flex justify-content-around mt-4 ">
          <Button variant="primary" onClick={() => filteriteams("punjabi")}>
            Panjabi
          </Button>{" "}
          <Button variant="secondary"  onClick={() => filteriteams("vadapav")}    >Vadapao</Button>{" "}
          <Button variant="success"  onClick={() => filteriteams("Pizza")}  >Pizza</Button>{" "}
          <Button variant="warning "  onClick={() => filteriteams("Chai")}  >Chai  </Button>{" "}
          <Button variant="danger" onClick={() => filteriteams("Frankie")}  >Frank</Button>{" "}
          <Button variant="info" onClick={() => setMenu(Fooddata)}  >All</Button>{" "}
        </div>
        <div className="container ">
          <div className="row d-flex justify-content-around mt-5 align-iteams-center">
            {menu.map((ele , index) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4"
                  >
                    <Card.Img
                      variant="top"
                      src={ele.imgdata}
                      style={{ height: "16rem" }}
                      className="mt-3"
                    />
                    <Card.Body>
                      <Card.Title>{ele.rname}</Card.Title>
                      <Card.Text>Price:{ele.price}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
