export const useSongbird = () => {
  const getSongbirdUrl = (liveMode: boolean = true) => {
    return liveMode
      ? import.meta.env.VITE_CARDINAL_SONGBIRD_URL!
      : import.meta.env.VITE_CARDINAL_SONGBIRD_LIVEMODE_URL!;
  };
  return { getSongbirdUrl };
};
