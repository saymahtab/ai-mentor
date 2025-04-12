export const StatusBar = () => {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-base-300 text-base-content p-2 flex justify-between text-xs">
        <div className="flex items-center gap-2">
          <span>AI Mentor</span>
          <span>Beta v1.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span>ENG</span>
          <span>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    );
  };