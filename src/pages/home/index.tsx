import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

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
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />
      <main className={`${roboto.className}`}>
        <Container>
          <Hero>
            <Heading as="h1" size="4xl">
              Agendamento descomplicado
            </Heading>
            <Text size="xl">
              Conecte seu calendário e permita que as pessoas marquem
              agendamentos no seu tempo livre.
            </Text>
            <ClaimUsernameForm />
          </Hero>
          <Preview>
            <Image
              src={previewImage}
              height={400}
              quality={100}
              priority
              alt="Calendário simbolizando aplicação em funcionamento"
            />
          </Preview>
        </Container>
      </main>
    </>
  )
}
