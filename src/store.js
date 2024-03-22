import create from 'zustand';

const useStore = create((set) => ({
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
  addToCart: (item) => {
    set((state) => {
      const isItemExist = state.cartItems.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
      return { ...state };
    });
    set((state) => ({ ...state, ...calculateTotal(state) }));
  },
  decrement: (id) => {
    set((state) => {
      const item = state.cartItems.find((i) => i.id === id);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
      return { ...state };
    });
    set((state) => ({ ...state, ...calculateTotal(state) }));
  },
  deleteFromCart: (id) => {
    set((state) => ({
      ...state,
      cartItems: state.cartItems.filter((i) => i.id !== id),
      ...calculateTotal(state), // Update all values
    }));
  },
}));

const calculateTotal = (state) => {
  let sum = 0;
  state.cartItems.forEach((i) => (sum += i.price * i.quantity));
  const subTotal = sum;
  const shipping = subTotal > 1000 ? 0 : 200;
  const tax = +(subTotal * 0.18).toFixed();
  const total = subTotal + tax + shipping;
  return { subTotal, shipping, tax, total };
};

export default useStore;
