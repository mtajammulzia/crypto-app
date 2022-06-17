import { FC } from "react";
import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

export const BackgroundTwo: FC = () => {
  const options = {
    preset: "seaAnemone",
  };
  const initialize = async (instance: any) => {
    await loadSeaAnemonePreset(instance);
  };

  return <Particles options={options} init={initialize} />;
};
