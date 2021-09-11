import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC = () => {
  const fontColor = { color: '#2571c0' };
  return (
    <Layout>
      <div className="flex h-full ">
        <div className="h-full relative flex-1 m-auto text-center">
          <div className="inline-block absolute text-center bottom-20 left-20">
            <div className="font-medium text-center text-5xl ">
              Yiuman's 小<span style={{ fontSize: '1px' }}>破</span>站
            </div>
            <div className="inline-block mt-5">
              <div className="text-3xl text-left font-black ">
                「 愿编码<span style={fontColor}>半生</span>
              </div>
              <div className="mt-1 ml-20 text-3xl text-left font-black ">
                归来仍是<span style={fontColor}>少年</span> 」
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 m-auto text-center p-20  ">
          <StaticImage src="../images/psc.jpeg" alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
