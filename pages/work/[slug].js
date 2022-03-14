import { createClient, linkResolver } from '../../prismicio'
import * as prismicH from '@prismicio/helpers'

export default function Project({ page }) {
  const { title, description } = page.data;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('project', params.slug)

  return {
    props: { page },
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