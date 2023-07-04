import { useState } from "react";
import "./App.css";
import { SplitButtonDropdown } from "./components/SplitButtonDropdown";

function App() {
  const [showDD, setShowDD] = useState(true);

  return (
    <div className="App">
      <header>
        <button
          onClick={() => {
            setShowDD(!showDD);
          }}
        >
          Toggle between split button and normal button
        </button>
        <SplitButtonDropdown showDropdown={showDD} />
      </header>

      <div
        id="lipsum"
        style={{ width: "800px", textAlign: "left", margin: "0 auto" }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae orci
          eget urna porttitor vehicula. Vivamus condimentum venenatis nibh quis
          blandit. In in erat dignissim, maximus mauris ut, consectetur tellus.
          Fusce suscipit augue at lectus interdum molestie sit amet in lacus.
          Sed nibh dolor, facilisis vel consequat ut, viverra at ligula. Donec
          cursus, felis sit amet lobortis tempor, quam diam lacinia leo, vel
          tempor orci elit aliquet sem. Vestibulum venenatis nisl felis, ac
          sodales enim finibus id. Duis fringilla ante sit amet commodo tempor.
          Donec ac est egestas, sodales tortor in, mollis risus. Vivamus sem
          eros, hendrerit luctus faucibus nec, posuere in elit. Etiam risus mi,
          aliquam ac orci sed, consequat pellentesque lorem.
        </p>
        <p>
          Quisque vitae ante fringilla, molestie augue nec, finibus tortor. Ut
          pretium tortor diam, sed maximus leo tempor at. In sed dolor lectus.
          Ut luctus mi volutpat porta interdum. Maecenas molestie aliquet
          volutpat. Vivamus tempus mollis justo aliquet mollis. Sed eros sem,
          ultricies eget odio non, vestibulum vehicula dui. Donec at vulputate
          nunc. Nunc odio ex, egestas sit amet risus vitae, elementum
          scelerisque arcu. Vestibulum ut turpis sed ligula laoreet semper non
          quis odio. Donec faucibus mauris ut felis volutpat fermentum. Nam
          justo dui, malesuada efficitur tempor vitae, laoreet eget urna.
          Praesent ultricies elit ac felis rhoncus, ultricies auctor tellus
          varius. In id suscipit dolor.
        </p>
        <p>
          Nunc blandit urna erat, sit amet scelerisque sem dignissim id.
          Vestibulum sagittis magna leo, at pulvinar eros commodo nec. Maecenas
          dictum mi id lacinia lacinia. Morbi dictum dapibus vehicula. Duis
          dictum diam sit amet efficitur varius. Maecenas diam mauris, tempus
          sed blandit vel, semper non lorem. Cras pellentesque iaculis sapien,
          quis feugiat enim maximus non.
        </p>
        <p>
          Donec fringilla fermentum volutpat. Aliquam tempus ullamcorper
          ultrices. Nunc et felis dictum, vestibulum arcu in, convallis sapien.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Aliquam nec nisl sed lorem aliquam interdum
          eget volutpat ex. Sed in nisl auctor, mollis nibh non, auctor ipsum.
          Suspendisse commodo justo fringilla, consequat turpis et, varius
          lorem. Aenean convallis vitae libero quis sodales.
        </p>
        <p>
          Ut porttitor augue semper tellus porta condimentum. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Praesent ullamcorper sollicitudin ipsum sed ornare. Fusce eu
          ultricies ex. Vestibulum non lacus fringilla, luctus diam nec, viverra
          sem. Proin ipsum lorem, mollis id nibh eget, eleifend facilisis massa.
          Proin bibendum erat id nibh congue, vitae aliquam odio laoreet.
          Vestibulum in ultrices augue. Etiam elit diam, malesuada vitae sem
          tempor, imperdiet iaculis libero. Proin et luctus magna, at consequat
          leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  );
}

export default App;
