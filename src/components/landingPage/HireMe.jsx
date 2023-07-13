/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import ContactForm from '../modals/Contact';

export default function HireMe() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Container lg>
      <ContactForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <Card css={{ marginBottom: '-5em', backgroundColor: '#141C3A', borderRadius: '.8em', paddingBlock: '3em', paddingInline: '2em' }}>
        <Card.Body>
          <Grid.Container alignItems='center'>
            <Grid xs={12} md={4} css={{ '@mdMax': { justifyContent: 'center' } }}>
              <Text
                color='white'
                css={{ textAlign: 'center', '@xlMax': { fontSize: '$5xl', fontWeight: 'bold' }, '@smMax': { fontSize: '$3xl', fontWeight: 'bold' } }}
              >
                Start a project
              </Text>
            </Grid>
            <Grid xs={12} md={4} css={{ marginTop: '1.5em', '@mdMax': { justifyContent: 'center' } }}>
              <Text color='white' css={{ textAlign: 'center' }}>
                Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
              </Text>
            </Grid>
            <Grid xs={12} md={4} justify='end' css={{ '@mdMax': { justifyContent: 'center', marginTop: '1em' } }}>
              <Button
                icon={<Icon icon='tabler:hand-rock' fontSize={'2em'} />}
                color={'success'}
                rounded
                bordered
                auto
                size={'lg'}
                ghost
                onClick={() => setOpenDialog(true)}
              >
                Let's do this
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
}
