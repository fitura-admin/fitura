import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { langs } from "~/src/shared/model/shared.const";
import { SelectLangI } from "~/src/shared/model/shared.types";

// TO DO: Сделать универсальный редьюсер если не лень

interface InitialState {
  isAppLoaded: boolean;
  lang: SelectLangI;
  burgerOpen: boolean;
  spaceSection: number;
  navSection: string;
  isNavClicked: boolean;
  modalOpen: boolean;
  anyModalOpen: boolean;
}

const initialState: InitialState = {
  isAppLoaded: false,
  lang: langs[0],
  burgerOpen: false,
  spaceSection: 0,
  navSection: "home",
  isNavClicked: false,
  modalOpen: false,
  anyModalOpen: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setAppLoaded: (state, action: PayloadAction<boolean>) => {
      state.isAppLoaded = action.payload;
    },
    setBurgerOpen: (state, action: PayloadAction<boolean>) => {
      state.burgerOpen = action.payload;
    },
    setAppLang: (state, action: PayloadAction<SelectLangI>) => {
      state.lang = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<number>) => {
      state.spaceSection = action.payload;
    },
    setNavSection: (state, action: PayloadAction<string>) => {
      state.navSection = action.payload;
    },
    setNavClicked: (state, action: PayloadAction<boolean>) => {
      state.isNavClicked = action.payload;
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
    setAnyModalOpen: (state, action: PayloadAction<boolean>) => {
      state.anyModalOpen = action.payload;
    },
  },
});

export const {
  setAppLoaded,
  setAppLang,
  setBurgerOpen,
  setCurrentSection,
  setNavSection,
  setNavClicked,
  setModalOpen,
  setAnyModalOpen,
} = navigationSlice.actions;
export const selectNavigation = (state: { navigation: InitialState }) =>
  state.navigation;
export default navigationSlice.reducer;
