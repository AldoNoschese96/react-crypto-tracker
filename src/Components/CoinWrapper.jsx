export const CoinWrapper = ({ children }) => {
  const renderWrapperHandler = () => {
    const processed = children.toString().split("")[0] === "-";
    if (processed) {
      return (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700">
          {children}
        </span>
      );
    }
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700">
        {children}
      </span>
    );
  };

  return renderWrapperHandler();
};
