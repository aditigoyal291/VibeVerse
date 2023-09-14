"use client";
import { Button, Group } from "@mantine/core";
import { SpotlightProvider, spotlight } from "@mantine/spotlight";
// import { SpotlightAction } from '@mantine/spotlight';
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";

function SpotlightControl() {
  return (
    <Group position="center">
      <Button onClick={spotlight.open} className="bg-red-500 text-red-800">
        Open spotlight
      </Button>
    </Group>
  );
}

export const actions = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
];

export default function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
}
