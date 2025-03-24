import { Button, Container, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';

interface Props {
    btnText: string;
    title: string;
    gradientTitle: string;
    description: string;
}

export default function Hero(props: Props) {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                {props.gradientTitle}
              </Text>{' '}
                {props.title}
            </Title>

            <Text className={classes.description} mt={30}>
                {props.description}
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
                {props.btnText}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}