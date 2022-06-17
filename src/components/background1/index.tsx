import { FC } from "react";
import Particles from "react-tsparticles";

type move =
  | "none"
  | "bounce"
  | "destroy"
  | "bounceHorizontal"
  | "bounceVertical"
  | "out"
  | "split"
  | undefined;

type direction =
  | number
  | "none"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "right"
  | "top"
  | "topLeft"
  | "topRight"
  | "outside"
  | "inside"
  | undefined;

export const BackgroundOne: FC = () => {
  const move: move = "bounce";
  const direction: direction = "none";
  const options = {
    background: {
      color: {
        value: "#111",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: direction,
        enable: true,
        outModes: {
          default: move,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return <Particles options={options} />;
};

// import Particles from "react-tsparticles";
// import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

// export const Background = () => {
//   const options = {
//     preset: "seaAnemone",
//   };
//   const initialize = async (instance: any) => {
//     await loadSeaAnemonePreset(instance);
//   };

//   return (
//     <div style={{ zIndex: -99 }}>
//       <Particles options={options} init={initialize} />
//     </div>
//   );
// };
