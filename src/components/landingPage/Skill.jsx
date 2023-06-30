import { Container, Grid, Text } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const styling = {
  roundContainer: {
    backgroundColor: '#5BE9B9',
    borderRadius: '50%',
    padding: '1em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default function Skills() {
  return (
    <Container sm css={{ marginTop: '-3em' }}>
      <Grid.Container
        gap={3}
        justify='center'
        css={{ backgroundColor: 'white', borderRadius: '1em', boxShadow: '6px 6px 16px 0px rgba(0,0,0,0.5)', paddingBlock: '5em' }}
      >
        <Grid xs={12} md={6} direction='column' alignItems='center'>
          <div style={styling.roundContainer}>
            <Icon icon='ant-design:code-outlined' fontSize={50} color='black' />
          </div>
          <Text css={{ '@xsMin': { fontSize: '$2xl', fontWeight: 'bold' }, marginTop: '1em', color: 'black' }}>Frontend Developer</Text>
          <Text css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </Text>
          <Text color='secondary' b css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center' }}>
            Languages I speak:
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Reactjs, Nextjs,HTML, CSS, JavaScript, Git,
          </Text>
          <Text color='secondary' b css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center' }}>
            Dev Tools:
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Vscode
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Material UI
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            NextUI
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Bootstrap
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Terminal
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Github
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Figma
          </Text>
        </Grid>
        <Grid
          xs={12}
          md={6}
          direction='column'
          alignItems='center'
          css={{
            '@mdMin': { borderLeft: '1px solid #cccccc' },
            '@smMax': { borderTop: '1px solid #cccccc', marginBlock: '2em' },
          }}
        >
          <div style={styling.roundContainer}>
            <Icon icon='ant-design:code-outlined' fontSize={50} color='black' />
          </div>
          <Text css={{ '@xsMin': { fontSize: '$2xl', fontWeight: 'bold' }, marginTop: '1em', color: 'black' }}>Backend Developer</Text>
          <Text css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </Text>
          <Text color='secondary' b css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center' }}>
            Languages I speak:
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Nodejs, Expressjs, MongoDB, Git, SQL
          </Text>
          <Text color='secondary' b css={{ '@xsMin': { fontSize: '$lg' }, marginTop: '1em', textAlign: 'center' }}>
            Dev Tools:
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Vscode
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Github
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Postman
          </Text>
          <Text b css={{ '@xsMin': { fontSize: '$md' }, marginTop: '1em', textAlign: 'center', color: 'black' }}>
            Thunder Client
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
