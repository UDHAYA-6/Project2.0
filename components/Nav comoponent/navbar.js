import { Menu, Group, Center, Container, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";
import classes from "./HeaderMegaMenu.module.css";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
const links = [
  { scroll: 500, label: "Education" },
  {
    link: "#1",
    label: "Projects",
    links: [
      { scroll: "https://spicy-udhay.vercel.app", label: "Food ordering" },
      {
        scroll: "https://furniture-udhay.vercel.app",
        label: "Furniture store",
      },
      { scroll: "https://bus-udhay.vercel.app", label: "Bus Ticket Booking" },
      { scroll: "https://portfolio-udhay.vercel.app", label: "Portfolio" },
    ],
  },
  { link: "https://github.com/UDHAYA-6", label: "Github" },
  { scroll: 900, label: "Services" },
  { scroll: 3390, label: "Contact" },
];

export default function HeaderMegaMenu() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const Navigate = (value) => {
    alert(value);
  };
  const themeToggle = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} onClick={() => Navigate(item.scroll)}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        className={classes.link}
        onClick={() => Navigate(link.scroll)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <h3>UK</h3>
          <Group gap={2} visibleFrom="sm">
            {items}
          </Group>
          <Button onClick={themeToggle} variant="transparent">
            <WbSunnyOutlinedIcon />
          </Button>
        </div>
      </Container>
    </header>
  );
}
