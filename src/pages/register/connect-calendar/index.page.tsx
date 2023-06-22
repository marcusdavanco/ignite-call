import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { api } from '@/lib/axios'
import { Container, Header } from '../styles'
import { ConnectItem, Connectbox } from './styles'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {
  const session = useSession()

  // async function handleRegister(data: RegisterFormData) {
  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <Connectbox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
          </Button>
        </ConnectItem>
        <pre>{JSON.stringify(session.data)}</pre>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Connectbox>


    </Container>
  )
}
