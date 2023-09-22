export const Equation = ({ math }) => {
  return (
    <div className="mt-[1rem]">
      <img src={`https://math.now.sh?color=%234b5563&from=${math}`} className="!w-auto m-auto min-h-[.8rem]" />
    </div>
  );
};
