
const ErrorNotification = ({addError}) => {
    return (
        addError && (
          <div className="error">
            <p>{addError}</p>
          </div>
        )
      );
}

export default ErrorNotification