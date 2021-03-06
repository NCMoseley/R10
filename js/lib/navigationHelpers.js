import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("Session", { sessionData })
    )
  );
};

export const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push("root", Router.getRoute("Speaker", { speakerData }))
  );
};

export const removeSpeaker = () => {
  Store.dispatch(NavigationActions.pop("root"));
};

export const popScene = () => {
  let currentNavigatorUID = Store.getState().navigation.currentNavigatorUID;
  Store.dispatch(NavigationActions.pop(currentNavigatorUID));
};
