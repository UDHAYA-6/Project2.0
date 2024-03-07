import { Text } from "@mantine/core";
import classes from "./card.module.css";

const data = [
  {
    title: "Languages, Framework/library, Styling",
    stats: "Front-end",
    description: "Html, Css,Java Script, React js, Next js, ",
  },
  {
    title: "Languages, Databse, API",
    stats: "Back-end",
    description: "Django, Python, MongoDb",
  },
  {
    title: "Other tools",
    stats: "Version Control",
    description: "Git, GitHub, Gitlab, Material UI, Mantine UI",
  },
];

export default function Card() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return (
    <center>
      <div className={classes.root}>{stats}</div>
    </center>
  );
}
