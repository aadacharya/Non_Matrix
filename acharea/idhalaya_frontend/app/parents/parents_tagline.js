import React from "react";
import styles from "./tagline.module.css";
import Link from "next/link";

const Parents_Tagline = () => {
  return (
    <div className={styles.tagline_main}>
      <div className={styles["left"]}>
        <div className={styles["tagline"]}> “Updated Version of Education”</div>
        <div className={styles["about_data"]}>
          Customized courses to fullfill your unique needs for excelling in all
          areas of life.
        </div>
        <div className={styles["points"]}>
          <div className={styles["points"]}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/learning.png"
              alt="learning"
            />
            <div>Learning Methods</div>
          </div>
          <div className={styles["points"]}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEO0lEQVR4nO2YXWgcVRTHV7E2EPTBF22on9gnn/wAH/qwd2azu7M7525QkpdKwFqoBGaaalOsxmaN1Bg1itTKbmJBW2NFE5IY7cw2qQYEiYVqH6rSYCUqtPpgWoVW9KH5y8wk28Sd2d6Z/UgCe+A8zZ1z/r9z7p0794ZCNatZzUqynWrkHk2VWzSSenVin+jEvtRIOq0R+2lxjKayKxqxOY3YWZ3YCU1lh3VV3qkTC++KRutD1bb2JHtYV1lGV9l5nSR4+eL4YmN0lV3WSPpQJ5mnW1purKhwq2KaKk0XFeQXgJbBnNOIPZlOp6+vgHjpTZ2keWExQQDIcU2VjpcfQGWX/AoJCqCTdKGs4mEo67u3yFUD6GmVL+Lk9nXlAzBp/0hnDNUCmHhJAQzqKZN43gSDz58fVKsC0J6S8NewCph0BWaqsTTxU+EbYNAsTA7L+7VoxQFGOmN2LtsNOoNSvkgwqTUfzOSY+5jQ8YhcMYAXtsj4d/xqPgdCbS4BgJ9aFszkOJ1JoJ2XH2D3oxLODSaXi7edvg4mPtd0e2Ewx7/qU7CjjADPNEuYfc9NvNUBPo+JVIN/AIO3eQFYfupA4prTSQRgX2sEvx+xFq13LhipJ4IAfFA0qMntxK9vawwMMPRcDP+MU3Hxjh8KAnBCIDDmTY4XH4v4BujbFhERvrgOpoMAzIkmONod9w0w1RsXBzDoD3/ic5zEq+NMJT8A1gfgz2GhqYO85zgJVl5ZD5PP+ApucrzyeKMwwIG2qD/xpj2NzmIqXCcAQF1uASb2PoDORAP2xDcgs3VTwfPjPYowwPQbiqfQL7ofQppvxGTXg27P9xYXP0l3wOCX3AKnaaMt/lllA2ay4YLnF4bU/N6wp1nG5z3xPMCZgUS+Q083ybg85j59ZrJhO76Vx4Jw6cLfOMbv9gYw+ahXZayKWEGtCnmN+S6TwNttjfht4bu+JK4terwrZv+OeL2f2brJFv98sgGTadcOWD7iLj7Ho/7nZXFfClBWN9SkS/Xp27UDwL9xW7y/rhkAk//sBsD9bF4rBmDwOc89wdkDUi0waHLVARj8JAy+HccEL8JWG0DIrxUEGSGgX1ljAKMEvJ8EXosCTzFgBwMGlMoDDKnA/hiQjgAdkp3XP4Aldqm3M+DVKPApVQ7gMwJ6o06u/+UPBrBbcqrwVhywrzoqvAb6FUew1e2+mNP9hd8O/wArtYj7FWe9lbwGDP7LigCYghuXQAdeXkUA+wJ0QLkZBv24CgBmMJa6yTeAk7jpLpj8h2snUYFxBgzfDxy5Fzh8K/BO3VWAgXXAu7cAg3cCH90HjG0GjiYExNP31hklkPh88qlwHQzqcG7p6OLCXemofXI7dBtwsB7IXgdkQwWej+HyzH7nYD3sGM4p0Io5a+ew/oxzfJfQEbIkOFdhogCF46puNYDsCnegZjULrX37D4bSK+AXFi8zAAAAAElFTkSuQmCC" />
            <div>Personality Development</div>
          </div>
          <div className={styles["points"]}>
            <img src="data:image/png;base64,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"></img>
            <div>Smarter Mindset</div>
          </div>
        </div>
        <div className={styles["become-member-button"]}> <Link href = "/member">Get Started With Your Leaning Journey</Link> </div>
      </div>
      <div className={styles["right"]}>
        <img src="graphics.png" alt="Acharea" />
      </div>
    </div>
  );
};

export default Parents_Tagline;
