import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "@/public/image2.svg";
import classes from "./Hero.module.css";

export default function HeroBullets() {
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>I'm Udhaya Kumar</Title>
          <Text c="dimmed" mt="md">
            Welcome to My Portfolio! If you're just curious about what I do,
            feel free to dive in.Explore my portfolio and discover how I
            leverage the power of cutting-edge technologies, to bring ideas to
            life.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Hire me
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Download cv
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
