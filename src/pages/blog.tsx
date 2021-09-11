import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/blog.css';

interface BlogProps extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string;
          cover?: string;
          frontmatter: { title: string; date: string; image?: string };
        };
      }>;
    };
  };
}

const BlogPage: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout>
      <div className="text-center px-72 blog-main">
        {data.allMarkdownRemark.edges.map((edge) => (
          <div key={edge.node.id} className="my-5 py-10 blog-block">
            {edge.node.frontmatter.date} {edge.node.frontmatter.title}
          </div>
        ))}
      </div>
    </Layout>
  );
};

//查询数据
export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            cover
          }
        }
      }
    }
  }
`;

export default BlogPage;
