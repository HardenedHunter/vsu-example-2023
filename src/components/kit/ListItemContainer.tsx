export const ListItemContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-solid border-black px-8 py-6 text-center">
    {children}
  </div>
);
