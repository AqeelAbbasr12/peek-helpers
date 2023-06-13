import {
  createStyles,
  Header,
  Group,
  Burger,
  Container,
  rem,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../assets/logo.png";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
  }[];
}

export function Navbar({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={66} className="pb-16 pt-2 sm:pb-20 sm:pt-4 sticky top-0">
      <Container className="px-6 p-0 max-w-[85rem]">
        <div className={classes.inner}>
          <Image src={Logo} alt="logo" className="w-[120pt] sm:w-[170pt]" />
          <Group spacing={5} className={classes.links}>
            {items}

            <Button variant="default">Log in</Button>
            <Button className="bg-secondaryColor hover:bg-secondaryColor hover:opacity-70">
              Sign up
            </Button>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
}
