import RickLogo from "../roots/svgs/icons/rickandmorty";
import Up from "../roots/svgs/icons/up";
export default function Footer() {
  return (
    <>
      <div className="flex justify-between px-8">
        <RickLogo />
        <span className="flex items-center text-white">
          <p>Voltar ao topo</p>

          <Up />
        </span>
      </div>
      <hr className="w-full h-3 my-8 text-white" />
      <div className="flex justify-between p-8 text-white">
        <p>©2023</p>
        <span className="flex gap-2">
          <i>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 18L22 12L16 6"
                stroke="#11B0C8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6L2 12L8 18"
                stroke="#11B0C8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
          <p>
            Desenvolvido por
            <strong className="text-0-primary-0">Henrique Sousa</strong>
          </p>
        </span>
      </div>
    </>
  );
}
