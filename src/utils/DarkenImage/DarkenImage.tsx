
const DarkenImage = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="relative">
        {children}
        <div className="pointer-events-none absolute inset-0 bg-black opacity-10"></div>
      </div>
    );
  };

  export default DarkenImage