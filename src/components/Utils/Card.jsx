export default (props) => {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-md p-4 w-[70vw] h-[50vh] h-full ${props.className}`}
    >
      {props.children}
    </div>
  );
};
