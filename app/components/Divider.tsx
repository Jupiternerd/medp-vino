export interface DividerProps {
    invert?: boolean;
}

const Divider: React.FC<DividerProps> = ({invert = false}) => {
  return (
      <div style={{ width: '100%', textAlign: 'center'}}>
        <h1 style={{fontSize: "30px", marginTop: "20px"}}>{invert ? 
        // yes...
        "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////" : 
        "////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}</h1>
      </div>
  );
};

export default Divider;