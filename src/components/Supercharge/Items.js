const Items = (props) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <img className="mb-6" src={props.img} alt="" />
      <h5>{props.title}</h5>
      <p className="max-w-md text-grayishBlue">{props.subtitle}</p>
    </div>
  );
};
export default Items;
