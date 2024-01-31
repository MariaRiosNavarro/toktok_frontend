const AddSvg = (props) => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.selectedIcon ? "fill-primary" : ""}
      >
        <g clipPath="url(#clip0_1_2137)">
          <g clipPath="url(#clip1_1_2137)">
            <path
              d="M12.9364 6.10437V18.0184"
              stroke="#9E9E9E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={props.selectedIcon ? "stroke-primary" : ""}
            />
            <path
              d="M18.8993 12.0614H6.97302"
              stroke="#9E9E9E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={props.selectedIcon ? "stroke-primary" : ""}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-3.29169 12.0614C-3.29169 -0.108792 0.766208 -4.16669 12.9364 -4.16669C25.1066 -4.16669 29.1645 -0.108792 29.1645 12.0614C29.1645 24.2316 25.1066 28.2895 12.9364 28.2895C0.766208 28.2895 -3.29169 24.2316 -3.29169 12.0614Z"
              stroke="#9E9E9E"
              strokeWidth="71"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={props.selectedIcon ? "stroke-primary" : ""}
            />
          </g>
        </g>
        <rect
          x="1.625"
          y="0.75"
          width="22.5"
          height="22.5"
          rx="11.25"
          stroke="#9E9E9E"
          strokeWidth="1.5"
        />
        <defs>
          <clipPath id="clip0_1_2137">
            <rect x="0.875" width="24" height="24" rx="12" fill="white" />
          </clipPath>
          <clipPath id="clip1_1_2137">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(-7.125 -8)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default AddSvg;
