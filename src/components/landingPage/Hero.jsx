/* eslint-disable react/no-unescaped-entities */
import { Grid, Text, Image } from '@nextui-org/react';
import avatar from '../../assets/mf-avatar.svg';
import heroFooter from '../../assets/hero-devices.svg';

export default function Hero() {
  return (
    <Grid.Container justify='center'>
      <Grid xs={12} justify='center' css={{ '@smMin': { marginTop: '5em' }, '@smMax': { marginTop: '3em' } }}>
        <Text
          color='secondary'
          css={{ textAlign: 'center', '@xlMax': { fontSize: '$5xl', fontWeight: 'bold' }, '@smMax': { fontSize: '$3xl', fontWeight: 'bold' } }}
        >
          Hi 👋, I'm Ahmad. Mern Stack Engineer,
        </Text>
      </Grid>
      <Grid xs={12} justify='center' css={{ marginBlock: '2em' }}>
        <Text b css={{ textAlign: 'center', '@xlMax': { fontSize: '$xl' }, '@smMax': { fontSize: '$lg' } }}>
          I design and code beautifully simple things, and I love what I do.
        </Text>
      </Grid>
      <Grid xs={12}>
        <Image src={avatar} alt='avatar image' width={1000} height={200} />
      </Grid>
      <Grid xs={12} justify='center' css={{ marginTop: '6em' }}>
        <Image src={heroFooter} width={860} autoResize />
      </Grid>
    </Grid.Container>
  );
}
