import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import ContactIconsList from "./ContactIcons";
import classes from "./ConatctUs.module.css";
const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactUs() {
  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and I will get back to you within 24 hours
          </Text>

          <ContactIconsList />
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@gmail.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            required
            label="Name"
            placeholder="Your name"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to connect with ..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
