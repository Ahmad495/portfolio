import { Grid, Text } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const styling = {
  socailStyling: {
    borderRadius: '50%',
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3em',
  },
};

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#6E07F3', paddingBlock: '5em' }}>
      <Grid.Container justify='center'>
        <Grid xs={12} direction='column' justify='center'>
          <Text
            color='white'
            css={{ '@xlMax': { fontSize: '$5xl', fontWeight: 'bold' }, '@smMax': { fontSize: '$3xl', fontWeight: 'bold' }, textAlign: 'center' }}
          >
            Ahmad
          </Text>
          <Text color='white' css={{ '@xlMax': { fontSize: '$xl' }, textAlign: 'center', marginTop: '1em' }}>
            Living, learning, & leveling up one day at a time.
          </Text>
        </Grid>
        <Grid xs={12} justify='center'>
          <a href='#' style={styling.socailStyling}>
            <Icon icon='mdi:github' fontSize={'3em'} color='white' />
          </a>
          <a href='#' style={{ ...styling.socailStyling, marginInline: '1em' }}>
            <Icon icon='mingcute:linkedin-fill' fontSize={'3em'} color='white' />
          </a>
          <a href='#' style={styling.socailStyling}>
            <Icon icon='basil:medium-solid' fontSize={'3em'} color='white' />
          </a>
        </Grid>
        <Grid xs={12} justify='center'>
          <a href='mailto:ahmad.mehmood.agha@gmail.com'>
            <Text color='white' css={{ '@xlMax': { fontSize: '$xl' }, textAlign: 'center', marginTop: '2em' }}>
              Handcrafted by me @ahmad.mehmood.agha@gmail.com
            </Text>
          </a>
        </Grid>
        <Grid xs={12} justify='center'>
          <a href='https://nextui.org/' target='_blank' rel='noreferrer'>
            <Text color='white' css={{ '@xlMax': { fontSize: '$md' }, textAlign: 'center', marginTop: '2em' }}>
              Made with ❤️ and NextUI
            </Text>
          </a>
        </Grid>
      </Grid.Container>
    </div>
  );
}
