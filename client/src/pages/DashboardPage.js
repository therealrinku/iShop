import { Fragment } from "react";
import Navbar from "../components/Navbar";
import "../css/DashboardPage.css";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="dashboard--page">
        <p>Dashboard</p>
      </section>
    </Fragment>
  );
};

export default Dashboard;
