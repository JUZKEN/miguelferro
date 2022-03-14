import { createClient } from '../prismicio'
import { PrismicRichText } from '@prismicio/react'

export default function Home({ page }) {
  const { leadText } = page.data;

  return (
    <div>
      <PrismicRichText field={leadText} />
    </div>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')

  return {
    props: { page },
  }
}