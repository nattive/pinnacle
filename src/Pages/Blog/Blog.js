import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Breadcrumb from "../../Layout/Breadcrumb";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Blog() {
  return (
    <>
      <Header />
      <Breadcrumb title="Blog" />
      <section class="blog_area section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                <Posts />
              </div>
            </div>
            <div class="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
