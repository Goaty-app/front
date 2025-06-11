import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import http from "@/lib/HTTPClient";

// TODO: Define every slice
// TODO: Move slices to their part
const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    showReducer: (state, action) => {
      console.log(state);
      console.log(action.payload);
    },
  },
});

export const mockPromise = createAsyncThunk(
  "async/mockPromise",
  async (payload) => {
    http
      .get(`http://localhost:3001/api/task/${payload}`)
      .then((response) => {
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error.data;
      });
  },
);

const asyncSlice = createSlice({
  name: "async",
  initialState: {
    async: "",
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(mockPromise.pending, (state) => {
        state.status = "pending";
      })
      .addCase(mockPromise.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as string;
      })
      .addCase(mockPromise.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.async = action.payload as unknown as string;
      });
  },
});

export const { showReducer } = taskSlice.actions;

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    async: asyncSlice.reducer,
  },
});

// TYPE
//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;

// Use in component
//const taskState = useSelector((state: RootState) => state.task);
//const dispatch = useDispatch();
