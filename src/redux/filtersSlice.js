import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '', // przechowuje wartość filtra wyszukiwania
};

const filterSlice = createSlice({
  name: 'filters', // nazwa slice'a
  initialState,
  reducers: {
    // Akcja do zmiany wartości filtra
    changeFilter(state, action) {
      state.name = action.payload; // aktualizuje wartość filtra
    }
  }
});

// Eksport akcji i reducera
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;

// Selektory
export const selectNameFilter = (state) => state.filters?.name || '';
// Dodajemy operator opcjonalnego łańcucha (?.) i wartość domyślną