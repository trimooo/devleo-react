
import './DarkLightMode.css'; // Import the CSS file containing .light-text class

const AnotherComponent = () => {
  return (
    <div>
      <h2 className="light-text">Title in Light Text</h2>
      <p className="light-text">Paragraph in Light Text</p>
      <div className="other-content">
        {/* Other content */}
      </div>
    </div>
  );
};

export default AnotherComponent;
