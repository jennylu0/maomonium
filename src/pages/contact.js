import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactCard from "../components/contactCard";

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <h1 className="layout-title">Contact</h1>
        <ContactCard/>
    </Layout>
);

export default ContactPage;