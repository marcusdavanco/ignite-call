import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { Heading } from '@ignite-ui/react'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.className}`}>
        <Heading as="h1">Hello World</Heading>
      </main>
    </>
  )
}
