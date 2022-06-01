import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { createClient } from '../prismicio'
import Layout from './../components/Layout';
import ProjectItem from './../components/ProjectItem';
import Head from 'next/head'

export default function Home({ menu, page, featuredProjects }) {
  let imageWrap = useRef(null);
  const { leadText } = page.data;
  const [itemHovered, setItemHovered] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);

  const onHoverItem = () => {
    setItemHovered(true);
  }

  const onHoverItemLeave = () => {
    setItemHovered(false);
  }

  const changePreviewImage = (url) => setPreviewImageUrl(url);

  const moveImage = (e) => {
    let xpos = e.clientX;
    let ypos = e.clientY;

    const tl = gsap.timeline();
    tl.to(imageWrap, {
      x: xpos * 0.4,
      y: ypos * 0.4
    });
  }

  return (
    <Layout menu={menu}>
      <Head>
        <title>Miguel Ferro - Web Portfolio</title>
      </Head>
      <div className='mf-home__hero'><h1>{leadText[0].text}</h1></div>
      <div className={itemHovered ? "mf-home__featured-projects item-hovered" : "mf-home__featured-projects"}>
        {featuredProjects.map(item => {
          return (
            <ProjectItem key={item.data.title} changePreviewImage={changePreviewImage} moveImage={moveImage} item={item} onHover={onHoverItem} onHoverLeave={onHoverItemLeave} />
          )
        })}
        <div ref={el => {imageWrap = el}} className='image-wrap'>
          <div className='image-wrap-badge'>
            
          </div>
          <div className='image-wrap-img' style={{backgroundImage: `url(${previewImageUrl})`}}></div>
        </div>
        <div className='blur-overlay'></div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const menu = await client.getSingle('menu')
  const page = await client.getSingle('homepage')

  // Retrieve data from all featured projects
  const featuredProjectsUids = page.data.featuredProjects.map(item => item.project.uid)
  const featuredProjects = await client.getAllByUIDs('project', featuredProjectsUids)

  return {
    props: {
      menu,
      page,
      featuredProjects
    },
  }
}