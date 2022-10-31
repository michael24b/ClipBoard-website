const Items = (props) => {
  return (
    <div>
      <h5>{props.title}</h5>
      <p className="max-w-md text-grayishBlue">{props.subtitle}</p>
    </div>
  );
};
export default Items;
