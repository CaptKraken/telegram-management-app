import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TelegramAccount {
  user_id: number;
  first_name?: string;
  last_name?: string;
  username: string;
}

export interface AuthState {
  value: TelegramAccount | undefined;
}

const initialState: AuthState = {
  value: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TelegramAccount>) => {
      state.value = action.payload;
    },
  },
});
