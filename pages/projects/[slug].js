import _ from 'lodash'
import { createClient, linkResolver } from '../../prismicio'
import * as prismicH from '@prismicio/helpers'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Project({ menu, page }) {
  const {
    title,
    primaryImage
  } = page.data;
  
  return (
    <Layout menu={menu}>
      <h1>{title}</h1>
    </Layout>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const menu = await client.getSingle('menu')
  const page = await client.getByUID('project', params.slug)

  return {
    props: {
      menu,
      page
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType('project')

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false
  }
}