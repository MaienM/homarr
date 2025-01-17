import { Group, Kbd, Text } from "@mantine/core";
import { IconBook2, IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";

import { useScopedI18n } from "@homarr/translation/client";

import { createGroup } from "../lib/group";
import { interaction } from "../lib/interaction";
import type { SearchMode } from "../lib/mode";
import { appIntegrationBoardMode } from "./app-integration-board";
import { commandMode } from "./command";
import { externalMode } from "./external";
import { pageMode } from "./page";
import { userGroupMode } from "./user-group";

const searchModesWithoutHelp = [userGroupMode, appIntegrationBoardMode, externalMode, commandMode, pageMode] as const;

const helpMode = {
  modeKey: "help",
  character: "?",
  groups: [
    createGroup({
      keyPath: "character",
      title: (t) => t("search.mode.help.group.mode.title"),
      options: searchModesWithoutHelp.map(({ character, modeKey }) => ({ character, modeKey })),
      component: ({ modeKey, character }) => {
        const t = useScopedI18n(`search.mode.${modeKey}`);

        return (
          <Group px="md" py="xs" w="100%" wrap="nowrap" align="center" justify="space-between">
            <Text>{t("help")}</Text>
            <Kbd size="sm">{character}</Kbd>
          </Group>
        );
      },
      filter: () => true,
      useInteraction: interaction.mode(({ modeKey }) => ({ mode: modeKey })),
    }),
    createGroup({
      keyPath: "href",
      title: (t) => t("search.mode.help.group.help.title"),
      useOptions() {
        const t = useScopedI18n("search.mode.help.group.help.option");

        return [
          {
            label: t("documentation.label"),
            icon: IconBook2,
            href: "https://homarr.dev/docs/getting-started/",
          },
          {
            label: t("submitIssue.label"),
            icon: IconBrandGithub,
            href: "https://github.com/ajnart/homarr/issues/new/choose",
          },
          {
            label: t("discord.label"),
            icon: IconBrandDiscord,
            href: "https://discord.com/invite/aCsmEV5RgA",
          },
        ];
      },
      component: (props) => (
        <Group px="md" py="xs" w="100%" wrap="nowrap" align="center">
          <props.icon />
          <Text>{props.label}</Text>
        </Group>
      ),
      filter: () => true,
      useInteraction: interaction.link(({ href }) => ({ href })),
    }),
  ],
} satisfies SearchMode;

export const searchModes = [...searchModesWithoutHelp, helpMode] as const;
