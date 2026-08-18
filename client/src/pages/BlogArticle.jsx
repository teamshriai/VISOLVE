import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { articles } from "../data/blogs/articles";

function BlogArticle() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Article Not Found
          </h1>

          <p className="text-gray-600 mb-6">
            The requested article could not be found.
          </p>

          <Link
            to="/blogs"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <article className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center space-x-1.5 text-sm text-blue-600 hover:text-blue-800"
          >
            <FiArrowLeft className="text-base" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        <header className="border-b border-gray-200 pb-6 mb-8">
          <p className="text-sm text-gray-500 mb-3">
            {article.date}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            {article.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Article content will be migrated from the original ViSolve
            Knowledge Hub article.
          </p>
        </div>
      </article>
    </div>
  );
}

export default BlogArticle;
