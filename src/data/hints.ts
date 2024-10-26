import { Routes } from "@/routes/routes";

export type Hint = {
  key: string;
  route: string;
};

export const hints: Hint[] = [
  {
    key: "sgmk",
    route: Routes.hint("sgmk"),
  },
];
