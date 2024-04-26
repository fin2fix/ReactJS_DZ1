import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading({ isLoading }) {
  return (
    <>
      {isLoading && (
        <h2>
          Loading <FontAwesomeIcon icon={faSpinner} />
        </h2>
      )}
      {!isLoading && <h2>Loading end</h2>}
    </>
  );
}
