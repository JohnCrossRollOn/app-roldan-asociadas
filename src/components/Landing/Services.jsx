const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md p-2 w-fit">{children}</div>
);

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm tracking-widest font-bold">SERVICIOS</p>
      <Card>
        <img src="" />
      </Card>
    </div>
  );
};
