import { createClient } from '../prismicio'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Layout from './../components/Layout';

export default function Home({ menu, page, featuredProjects }) {
  const { leadText } = page.data;

  return (
    <Layout menu={menu}>
      <div className='mf-home__leadtext'>
        <PrismicRichText field={leadText} />
      </div>
      {featuredProjects.map(item => {
        return (
          <h2 key={item.uid}>
            <PrismicLink field={item}>{item.data.title}</PrismicLink>
          </h2>
        )
      })}
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