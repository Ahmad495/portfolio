/* eslint-disable react/no-unescaped-entities */
import { Grid, Text } from '@nextui-org/react';

export default function Intro() {
  return (
    <div style={{ backgroundColor: '#6E07F3' }}>
      <Grid.Container justify='center' css={{ paddingBlock: '7em', paddingInline: '5em' }}>
        <Grid xs={12} justify='center'>
          <Text
            color='white'
            css={{ '@xsMin': { fontSize: '$2xl', fontWeight: 'bold' }, '@mdMin': { fontSize: '$4xl', fontWeight: 'bold' }, textAlign: 'center' }}
          >
            Hi, I’m Ahmad. Nice to meet you.
          </Text>
        </Grid>
        <Grid xs={12} md={6} justify='center'>
          <Text color='white' css={{ textAlign: 'justify', '@xsMin': { fontSize: '$lg' }, marginTop: '1em' }}>
            i'm a mern stack engineer working at a company called geekinate for about 1.8 years. Now i have ben promoted to mid level engineer. I have
            worked on finco a fintech web app in which i was the lead developer we used mern stack to develop finco also provided the functionality
            for real time chat using socket io and also ability to have video calls using aws chime. After that i lead 2 frontend based project in
            which we used nextjs and i also took care of devops on aws ec2
          </Text>
        </Grid>
      </Grid.Container>
    </div>
  );
}
