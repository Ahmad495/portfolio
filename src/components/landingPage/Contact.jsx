import { useState } from 'react';
import { Button, Grid, Text } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import ContactForm from '../modals/Contact';

export default function Contact() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div style={{ marginBlock: '10em', borderBottom: '1px solid #cccccc' }}>
      <ContactForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <Grid.Container justify='center' css={{ paddingBottom: '8em' }}>
        <Grid xs={12} justify='center'>
          <Text css={{ '@mdMin': { fontSize: '$3xl', fontWeight: 'bold' }, '@smMax': { fontSize: '$3xl', fontWeight: 'bold' }, textAlign: 'center' }}>
            Interested in collaborating with me?
          </Text>
        </Grid>
        <Grid xs={12} direction='column' alignItems='center'>
          <Text css={{ '@mdMin': { fontSize: '$xl' }, textAlign: 'center', marginTop: '1em' }}>
            I’m always open to discussing product design work or partnership opportunities.
          </Text>
          <Button
            icon={<Icon icon='basil:chat-outline' fontSize={'2em'} />}
            color='gradient'
            auto
            rounded
            bordered
            ghost
            css={{ marginTop: '2em' }}
            size={'lg'}
            onClick={() => setOpenDialog(true)}
          >
            Start a conversation
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}
