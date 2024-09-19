import { SIZES } from './constants';
import { ISpinner } from './interface';

const Spinner = ({ wrapper = 'default' }: ISpinner) => {
  const SPINNER_SIZES = SIZES[wrapper];
  return (
    <div className="Spinner">
      <div className="Spinner__svg" title="0">
        <svg
          height={SPINNER_SIZES.height}
          id="loader-1"
          version="1.1"
          viewBox={SPINNER_SIZES.viewBox}
          width={SPINNER_SIZES.height}
          x="0px"
          y="0px"
        >
          <path
            d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
            fill="#000"
            opacity="0.2"
          />
          <path
            d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"
            fill="#000"
          >
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              dur="0.5s"
              from="0 20 20"
              repeatCount="indefinite"
              to="360 20 20"
              type="rotate"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
