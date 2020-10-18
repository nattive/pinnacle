import React from "react";
import post from '../../Assets/img/post/post_1.png'
import { connect } from 'react-redux'
import { getPosts, getCategories, searchPosts } from "../../Actions/blogAction";
import { useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";

function Sidebar(props) {
  let { path, url } = useRouteMatch();

  useEffect(() => {
   props.getPosts();
   props.getCategories();
  }, [])
  return (
    <>
      <div class="blog_right_sidebar">
        <aside class="single_sidebar_widget search_widget">
          <form action="#">
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Keyword"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Search Keyword'"
                  onChange={(e) => props.searchPosts(e.target.value)}
                />
                <div class="input-group-append">
                  <button class="btn" type="button">
                    <i class="ti-search"> </i>
                  </button>
                </div>
              </div>
            </div>
            <button
              class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
              type="submit"
            >
              Search
            </button>
          </form>
        </aside>
        <aside class="single_sidebar_widget post_category_widget">
          <h4 class="widget_title"> Category </h4>
          <ul class="list cat-list">
            {props.categories &&
              props.categories.map((category) => (
                <li key={category.id}>
                  <a href="#" class="d-flex">
                    <p>{category.name}</p>
                    <p>({category.blog_posts && category.blog_posts.length})</p>
                  </a>
                </li>
              ))}
          </ul>
        </aside>
        <aside class="single_sidebar_widget popular_post_widget">
          <h3 class="widget_title"> Recent Post </h3>
          {props.posts &&
            props.posts.map((post) => (
              <div key={post.id} class="media post_item">
                <img
                  src={post.imageUrl}
                  alt="post"
                  className="img-thumbnail w-25"
                />
                <div class="media-body">
                  <Link className="mb-3" to={`${url}/${post.slug}`}>
                    <h3>{post.title.substring(0, 25)}... </h3>
                  </Link>
                  <p> {post.created} </p>
                </div>
              </div>
            ))}
        </aside>
      </div>
    </>
  );
}


const mapStateToProps = (state) => ({
  posts: state.blog.posts,
  categories: state.blog.categories,
});

const mapDispatchToProps = {
  getPosts,
  getCategories,
  searchPosts,
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);