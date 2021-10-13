import React from "react";
import { Header } from "../components/common/Header";
import { Table } from "../components/common/Table";


const Home = () => {

  return (
    <>
    <Header/>
      <div className="actions">
        <div className="name">
          <h2>Mike Tyson</h2>
        </div>
        <div className="context">
          <div className="add">
            <button type="submit" className="add-submit">Add +</button>
          </div>
          <div className="p">
            <p id="table">Tables</p>
            <p className="report">Report</p>
          </div>
            <Table/>
          </div>
        </div>
    </>

  );
};

export default Home;
