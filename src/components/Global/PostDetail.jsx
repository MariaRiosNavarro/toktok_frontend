import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import PostUserHeader from "./PostUserHeader";
import PostDetailsFooter from "./PostDetailsFooter";
const PostDetail = ({ post }) => {
  const { slug } = useParams();

  return (
    <>
      <section className="w-full  mb-6">
        <PostUserHeader slug={slug} />
        <Link to={"/post/" + post._id}>
          <section className="mt-4 w-full">
            <div className="avatar ">
              <div className=" rounded-[32px] ">
                <img src={post.img} />
              </div>
            </div>
          </section>
        </Link>
        <PostDetailsFooter post={post} />
      </section>
    </>
  );
};

export default PostDetail;
