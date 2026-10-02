import TerminalModule from "react-console-emulator";
import MacWindows from "./MacWindows";
import "./cli.scss";

const Terminal = TerminalModule.default;

const commands = {
  about: {
    description: "About me.",
    fn: () =>
      "Hi, I'm Deepakanojiya,\n A developer who loves building for the web.",
  },
  skills: {
    description: "My tech stack.",
    fn: () => "React,\n JavaScript,\n HTML,\n CSS",
  },
  projects: {
    description: "Featured projects.",
    fn: () => "Pixel Studio\nTask Buddy\nWeather Now",
  },
  contact: {
    description: "Say hello.",
    fn: () => "Add your email here: hello@example.com",
  },
  echo: {
    description: "Repeat text.",
    usage: "echo <text>",
    fn: (...args) => args.join(" "),
  },
};

const welcomeMessage = `Welcome! I'm Deepakanojiya.\nCommands: about, skills, projects, contact, echo, help, clear`;

function Cli({ windowName,  setWindowState }) {
  return (
    <MacWindows  windowName={windowName} setWindowState={setWindowState} >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="Deepakanojiya:~$"
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindows>
  );
}

export default Cli;
