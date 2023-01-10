const ChangeTemp: React.FC<{
  handleTemp: () => void;
}> = ({ handleTemp }) => {
  return (
    <div className="change-temp-wrapper flex-row">
      <label className="change-temp" onClick={handleTemp}>
        <input type="checkbox" id="temp-input" />
        <div className="thumb"></div>
      </label>
    </div>
  );
};

export default ChangeTemp;
