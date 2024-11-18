import React from "react";

const MenuIcon = ({ active, ...rest }: { active: boolean }) => {
  let styles = active ? "hamburger hamburger--active" : "hamburger";

  return (
    <>
      <div role="presentation" className="md:hidden menu-icon" {...rest}>
        <div role="presentation" className={styles} />
      </div>
      <style jsx>
        {`
          /* Menu Icon */
          .menu-icon {
            margin-top: -2px;
            width: 40px;
            height: 40px;
            position: relative;
            cursor: pointer;
            box-sizing: content-box;
          }

          .hamburger {
            width: 40px;
            height: 3px;
            background: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: 0.4s;
          }

          .hamburger::before,
          .hamburger::after {
            content: "";
            position: absolute;
            height: 3px;
            width: 40px;
            background-color: #000;
            transition: 0.4s;
            display: block;
          }

          .hamburger::before {
            top: -10px;
            transform: none;
          }

          .hamburger::after {
            top: 10px;
            transform: none;
          }

          .hamburger--active {
            background: transparent;
          }

          .hamburger--active::before {
            top: 0 !important;
            transform: rotate(-135deg) !important;
          }

          .hamburger--active::after {
            top: 0 !important;
            transform: rotate(-45deg) !important;
          }
        `}
      </style>
    </>
  );
};

export default MenuIcon;
