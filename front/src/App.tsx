import React from "react";
import { Provider } from "react-redux";
import {
  Box,
  Tabs,
  Tab,
  ThemeProvider,
  createMuiTheme,
  Container,
} from "@material-ui/core";
import {
  VideogameAsset as VideogameIcon,
  Toc as ScoreIcon,
} from "@material-ui/icons";
import configureStore from "./store";

import Game from "./containers/Game";
import Score from "./containers/Score";

const store = configureStore();

export default function App() {
  const [currentTab, setTab] = React.useState<string>("game");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Provider store={store}>
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            type: "dark",
          },
        })}
      >
        <Box
          display="flex"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#212121",
          }}
        >
          <Container>
            <Tabs
              value={currentTab}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              style={{ margin: "auto", width: "80%" }}
            >
              <Tab value="game" icon={<VideogameIcon />} aria-label="Игра" />
              <Tab value="score" icon={<ScoreIcon />} aria-label="Счет" />
            </Tabs>
            {currentTab === "game" ? <Game /> : <Score />}
          </Container>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}
