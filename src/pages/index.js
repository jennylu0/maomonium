import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import MainGallery from "../components/mainGallery";
import homeData from "../models/home";

// make main gallery component that recieves data from single json file
// implement filtering 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="layout-title">Page title</h1>
    <MainGallery props={homeData.galleryData}/>


  </Layout>
)

export default IndexPage
