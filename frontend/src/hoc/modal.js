import Loader from "../components/loader";

const ModalComponent = (Component, loadingMessage) => {
  return function withLoader({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <>
        <div className="modal">
          <div className="modal__container">
            <div className="modal__loader">
              <Loader />
              <p className="mt-sm">{loadingMessage}</p>
            </div>
          </div>
        </div>
        <Component />
      </>
    );
  };
};

export default ModalComponent;
