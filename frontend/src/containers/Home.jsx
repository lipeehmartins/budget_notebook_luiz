import React from "react";
import { Header } from "../components/common/Header";
import { Table } from "../components/common/Table";


const Home = () => {

  return (
    <>
    <Header/>
      <div class="actions">
        <div class="name">
          <h2>Mike Tyson</h2>
        </div>
        <div class="context">
          <div class="add">
            <button type="submit" class="add-submit">Add +</button>
          </div>
          <div class="p">
            <p id="table">Tables</p>
            <p class="report">Report</p>
          </div>
            <Table/>
          </div>
        </div>
    </>

  );
};

export default Home;
