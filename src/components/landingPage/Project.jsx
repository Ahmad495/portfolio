/* eslint-disable react/no-unescaped-entities */
import { Container, Grid, Text } from '@nextui-org/react';
import ProjectCard from '../Card';

export default function Project() {
  return (
    <Container css={{ marginTop: '5em' }}>
      <Grid.Container justify='center' gap={3}>
        <Grid xs={12} direction='column' justify='center'>
          <Text css={{ '@mdMin': { fontSize: '$5xl', fontWeight: 'bold' }, '@smMax': { fontSize: '$3xl', fontWeight: 'bold' }, textAlign: 'center' }}>
            Projects
          </Text>
          <Text css={{ '@mdMin': { fontSize: '$xl' }, textAlign: 'center', marginTop: '1em' }}>
            Here are a few past design projects I've worked on. Want to see more? Email me.
          </Text>
        </Grid>
        <Grid xs={12} md={4}>
          <ProjectCard />
        </Grid>
        <Grid xs={12} md={4}>
          <ProjectCard />
        </Grid>
        <Grid xs={12} md={4}>
          <ProjectCard />
        </Grid>
        <Grid xs={12} md={4}>
          <ProjectCard />
        </Grid>
        <Grid xs={12} md={4}>
          <ProjectCard />
        </Grid>
        <Grid xs={12} md={4}>
          <ProjectCard />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
