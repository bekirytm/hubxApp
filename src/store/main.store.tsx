import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
const a = async () => {
  return await AsyncStorage.getItem('onboard');
};

const MainStore = createSlice({
  name: 'onboarding',
  initialState: {
    onboarding: 'null',
  },
  reducers: {
    setOnboarding: function (state, action: PayloadAction<string>) {
      state.onboarding = action.payload;
    },
  },
});

export const {setOnboarding} = MainStore.actions;
export default MainStore.reducer;
