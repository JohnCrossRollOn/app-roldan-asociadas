export default ({ children }) => (
  <div className="relative grid place-items-center">
    <p className="absolute bg-slate-100 px-2 text-sm tracking-widest font-bold">
      {children}
    </p>
    <hr className="bg-slate-800 w-full" />
  </div>
);
