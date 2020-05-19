import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Schedule from '../components/schedule';

const SchedulePage = () => (
    <Layout>
        <SEO title="Convention Schedule"/>
        <h1 class="layout-title">Schedule</h1>
        <Schedule/>
    </Layout>
);

export default SchedulePage;