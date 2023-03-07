import { UiElementProps } from "../..";
export interface WalletIconProps extends UiElementProps { }

export const WalletIcon = (props: WalletIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.576"
        height="16.304"
        viewBox="0 0 17.576 16.304"
      >
        <g id="wallet" transform="translate(0.354 0.362)">
          <path
            id="Path_3314"
            data-name="Path 3314"
            d="M16.913,30.472H3.178A1.179,1.179,0,0,1,2,29.294V18.368a.241.241,0,0,1,.241-.241H16.913A1.179,1.179,0,0,1,18.091,19.3V22.53a.241.241,0,1,1-.482,0V19.3a.7.7,0,0,0-.7-.7H2.482V29.294a.7.7,0,0,0,.7.7H16.913a.7.7,0,0,0,.7-.7V26.07a.241.241,0,1,1,.482,0v3.225a1.179,1.179,0,0,1-1.178,1.178Z"
            transform="translate(-2 -14.881)"
            fill="#3f94f3"
            stroke="#3f94f3"
            stroke-width="0.7"
          />
          <path
            id="Path_3315"
            data-name="Path 3315"
            d="M54.109,39.416H51.286a2.01,2.01,0,1,1,0-4.02h2.823a.645.645,0,0,1,.644.644v2.731A.645.645,0,0,1,54.109,39.416Zm-2.823-3.537a1.528,1.528,0,1,0,0,3.056h2.823a.162.162,0,0,0,.162-.164V36.04a.163.163,0,0,0-.162-.162Z"
            transform="translate(-37.881 -27.988)"
            fill="#3f94f3"
            stroke="#3f94f3"
            stroke-width="0.7"
          />
          <path
            id="Path_3316"
            data-name="Path 3316"
            d="M2.241,8.387a.241.241,0,0,1-.078-.469L11.4,4.754a1.753,1.753,0,0,1,2.321,1.658V8.146a.241.241,0,1,1-.482,0V6.412a1.271,1.271,0,0,0-1.683-1.2L2.319,8.374a.239.239,0,0,1-.078.013Z"
            transform="translate(-2 -4.659)"
            fill="#3f94f3"
            stroke="#3f94f3"
            stroke-width="0.7"
          />
          <path
            id="Path_3317"
            data-name="Path 3317"
            d="M55.283,41.876a.866.866,0,1,1,.866-.866A.866.866,0,0,1,55.283,41.876Zm0-1.249a.383.383,0,1,0,.383.383A.383.383,0,0,0,55.283,40.627Z"
            transform="translate(-41.784 -31.592)"
            fill="#3f94f3"
            stroke="#3f94f3"
            stroke-width="0.7"
          />
        </g>
      </svg>
    </div>
  );
};
