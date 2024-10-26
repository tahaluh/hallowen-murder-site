export const Routes = {
  characters: "/characters",
  character: (id: string) => `/characters/${id}`,
  hint: (key: string) => `/hints/${key}`,
};
