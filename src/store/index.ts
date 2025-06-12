import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { httpApi } from "@/lib/HTTPClient";
import { getHerds } from '@/service/herd.service';
import { getAnimals } from '@/service/animal.service';
import { getAllFoodStocks } from '@/service/food.service';
import { getHealthcares } from '@/service/healthcare.service';
import { getProduction } from '@/service/production.service';
import type { Herd } from '@/interface/herd.interface';
import type { Animal } from '@/interface/animal.interface';
import type { FoodStock } from '@/interface/foodStock.interface';
import type { Healthcare } from '@/interface/healthcare.interface';
import type { ProductionInterface } from '@/interface/production.interface';

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
    httpApi
      .get(`/task/${payload}`)
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

export const loadAllData = createAsyncThunk('appData/loadAllData', async (_, { rejectWithValue }) => {
  try {
    const [herdsRes, animalsRes, foodRes, healthRes, prodRes] = await Promise.all([
      getHerds(),
      getAnimals(),
      getAllFoodStocks(),
      getHealthcares(),
      getProduction(),
    ]);
    return {
      herds: herdsRes.data,
      animals: animalsRes.data,
      foodStocks: foodRes.data,
      healthcares: healthRes.data,
      productions: prodRes.data,
    };
  } catch {
    return rejectWithValue('Erreur lors du chargement des données');
  }
});

const appDataSlice = createSlice({
  name: 'appData',
  initialState: {
    herds: [] as Herd[],
    animals: [] as Animal[],
    foodStocks: [] as FoodStock[],
    healthcares: [] as Healthcare[],
    productions: [] as ProductionInterface[],
    status: 'idle',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAllData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(loadAllData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.herds = action.payload.herds;
        state.animals = action.payload.animals;
        state.foodStocks = action.payload.foodStocks;
        state.healthcares = action.payload.healthcares;
        state.productions = action.payload.productions;
      })
      .addCase(loadAllData.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload as string;
      });
  },
});

export const { showReducer } = taskSlice.actions;

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    async: asyncSlice.reducer,
    appData: appDataSlice.reducer,
  },
});

// TYPE
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use in component
//const taskState = useSelector((state: RootState) => state.task);
//const dispatch = useDispatch();
