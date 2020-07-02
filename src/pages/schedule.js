import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Schedule from '../components/schedule';
import scheduleData from "../models/schedule";


const SchedulePage = () => (
    <Layout>
        <SEO title="Convention Schedule"/>
        <h1 className="layout-title">Schedule</h1>
        <Schedule data={scheduleData.conventions}/>
    </Layout>
);

export default SchedulePage;