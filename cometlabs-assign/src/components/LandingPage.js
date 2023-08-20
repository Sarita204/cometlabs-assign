import React from "react";
import "../styles/styles.css"
import Img from "../images/img.jpg"
import Vedioimg from "../images/vedioimg.jpg";
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Img4 from "../images/img4.jpg";
import Img5 from "../images/img5.jpg";
import Img6 from "../images/img6.jpg";
import Img7 from "../images/img7.jpg";
import Img8 from "../images/img8.jpg";
import Img9 from "../images/img9.jpg";
import Img10 from "../images/img10.jpg";
import Img11 from "../images/img11.jpg";
import SliderPage from "./sliderpage";

function LandingPage() {
  return (
    <div className="container">
      {/* First componenet */}
      <div className="content-display">
        <div className="content">
          <h6>
            Create irresistible buyer
            <span className="change-color"> journeys with landing pages</span>
          </h6>
          <p className="sub-content">
            Your website isn’t optimized for everyone. When you send visitors to
            landing pages custom-built for each marketing campaign, you get more
            customers.
            <br></br>
            With two easy-to-use builders and smart features that help you
            optimize fast, we’ve got everything you need to grow your business
            with landing pages.{" "}
          </p>
          <div className="button">
            <center>
              <a className="callbutton4">Start Building for Free</a>
            </center>
            <br></br>
            <br></br>
            <center>
              <a className="callbutton4">Start Building for Free</a>
            </center>
          </div>
        </div>
        <div className="content-image">
          <img src={Img} alt="Log" className="Hero-landing-page" />
        </div>
      </div>

      {/* second componenet */}
      <div className="secont-content">
        Your website is{" "}
        <span className="change-color"> costing you customers</span>
      </div>
      <p className="secont-content-tagline">
        People can do lots of stuff on your website—which means there are lots
        of distractions.
        <br></br>
        Landing pages keep visitors focused on the specific thing you want them
        to do,
        <br></br>
        getting you better results with the same campaign budget.
      </p>
      <img src={Vedioimg} alt="Log" className="Vedio-image" />

      {/* third componenet */}
      <div className="second-container">
        <div className="secont-content">
          Why build your
          <span className="change-color"> pages with Unbounce?</span>
        </div>
        <p className="secont-content-tagline">
          Since 2010, we’ve helped our customers generate billions of leads,
          sales, and signups. That’s billions, with a B. of distractions.
          <br></br>
          <br></br>
          We’re the only landing page builder to combine more than a decade of
          conversion data with the power of AI.
          <br></br>
          That means you can build better-performing pages in minutes—and get
          way better results, too.{" "}
        </p>
        <div className="third-banner">
          <div className="third-block-container">
            <div className="third-block">
              <div className="img">
                <img src={Img1} alt="logo" className="third-block-icons" />
              </div>
              <div className="third-block-title">Easier building</div>
              <div className="third-block-title-sub-title">
                Different builders for different skill levels? Yeah—only us. It
                doesn’t matter if you’re a landing page pro or just getting
                started. With Unbounce, you can keep it simple or wade neck-deep
                into code. You do you
              </div>
            </div>
            <div className="third-block">
              <div className="img">
                <img src={Img2} alt="logo" className="third-block-icons" />
              </div>
              <div className="third-block-title">Smarter features</div>
              <div className="third-block-title-sub-title">
                Like, super smart. Unbounce uses AI to streamline campaign
                creation. Get data-backed campaign insights. Instantly generate
                copy for your ads and emails. We’ve got features that make it
                all simpler.
              </div>
            </div>
            <div className="third-block">
              <div className="img">
                <img src={Img3} alt="logo" className="third-block-icons" />
              </div>
              <div className="third-block-title">Better results</div>
              <div className="third-block-title-sub-title">
                Forget old-school testing. Unbounce lets you optimize your
                traffic with the click of a button, automatically sending
                visitors to their best-fit landing page. You get 30% more sales
                and signups like *snap* that.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth component */}
      <div>
        <div className="smart-contracts">
          <p className="secont-content">
            One platform, two
            <span className="change-color"> powerful builders </span>
          </p>
          <p className="secont-content-tagline">
            With Unbounce, you get two ways to build landing pages: Classic
            Builder and Smart Builder. Both different. Both awesome. And you get
            ‘em both with every Unbounce plan.
          </p>
          <div className="container-rows">
            <div className="first4 col">
              <span className="service-page-label"> Classic Builder </span>
              <p className="sub-contents">
                The original drag-and-drop landing page builder with advanced
                coding and customization options.
              </p>
              <img src={Img4} alt="logo" width="300px" height="250px" />
            </div>
            <div className="first4 col">
              <span className="service-page-label">Smart Builder</span>
              <p className="sub-contents">
                The AI-powered landing page builder with data-backed
                recommendations that help you build fast.{" "}
              </p>
              <img src={Img5} alt="logo" width="300px" height="250px" />
            </div>
          </div>
        </div>
        {/* next */}
        <div className="smart-contracts">
          <div className="container-row">
            <div className="first4 col">
              <img src={Img1} alt="logo" className="block-images" />
              <span className="service-page-label-1">
                {" "}
                Design your pages down to the pixel{" "}
              </span>
              <p className="container-row-sub-content">
                Unleash your inner Van Gogh. (Y’know, to an extent.) Classic
                Builder’s drag-and-drop interface lets you seamlessly add, edit,
                and arrange page elements so you can bring your masterpiece to
                life.
              </p>
            </div>

            <div className="first4 col">
              <img src={Img1} alt="logo" className="block-images" />
              <span className="service-page-label-1">
                Build your pages in half the time
              </span>
              <p className="container-row-sub-content">
                With pre-optimized templates, instant copy generation, and an
                assisted building experience, Smart Builder lets you create
                pages roughly 50% faster than other builders. So you’ve got more
                time for other… business-y things.
              </p>
            </div>
          </div>
        </div>

        <div className="smart-contracts">
          <div className="container-row">
            <div className="first4 col">
              <img src={Img1} alt="logo" className="block-images" />
              <span className="service-page-label-1">
                {" "}
                Design your pages down to the pixel{" "}
              </span>
              <p className="container-row-sub-content">
                Unleash your inner Van Gogh. (Y’know, to an extent.) Classic
                Builder’s drag-and-drop interface lets you seamlessly add, edit,
                and arrange page elements so you can bring your masterpiece to
                life.
              </p>
            </div>

            <div className="first4 col">
              <img src={Img1} alt="logo" className="block-images" />
              <span className="service-page-label-1">
                Build your pages in half the time
              </span>
              <p className="container-row-sub-content">
                With pre-optimized templates, instant copy generation, and an
                assisted building experience, Smart Builder lets you create
                pages roughly 50% faster than other builders. So you’ve got more
                time for other… business-y things.
              </p>
            </div>
          </div>
        </div>

        <div className="smart-contracts">
          <div className="container-row">
            <div className="first4 col">
              <img src={Img1} alt="logo" className="block-images" />
              <span className="service-page-label-1">
                {" "}
                Design your pages down to the pixel{" "}
              </span>
              <p className="container-row-sub-content">
                Unleash your inner Van Gogh. (Y’know, to an extent.) Classic
                Builder’s drag-and-drop interface lets you seamlessly add, edit,
                and arrange page elements so you can bring your masterpiece to
                life.
              </p>
              <center>
                <a className="callbutton4">Learn about Classic Builder</a>
              </center>
            </div>

            <div className="first4 col">
              <img src={Img1} alt="logo" className="block-images" />
              <span className="service-page-label-1">
                Build your pages in half the time
              </span>
              <p className="container-row-sub-content">
                With pre-optimized templates, instant copy generation, and an
                assisted building experience, Smart Builder lets you create
                pages roughly 50% faster than other builders. So you’ve got more
                time for other… business-y things.
              </p>
              <center>
                <a className="callbutton4">Learn about Smart Builder</a>
              </center>
            </div>
          </div>
        </div>
        <div className="center-line"></div>
        <div className="secont-content" style={{ marginBottom: "25px" }}>
          See which landing page{" "}
          <span className="change-color">builder is right for you</span>
        </div>
        <center>
          <a className="callbutton4">Compare all Features</a>
        </center>

        <div className="fourth-container">
          <div className="fourth-secont-content">How we help you grow</div>
          <p className="fourth-subcontent">
            We were the first landing page builder on the market—and over a
            decade later, we’re still shakin’ things up. More than 15,000
            businesses choose Unbounce because we help them grow smarter.
          </p>
          <div className="fourth-content">
            <div className="graphs">
              <p className="title">Unbounce</p>
              <p className="grade">1.5B</p>
              <span className="sub-title">
                Billions of leads, sales,  and signups for customers
              </span>
            </div>
            <div className="graphs">
              <p className="title"> Smart Builder</p>
              <p className="grade">+50%</p>
              <span className="sub-title">
                Faster landing page creation  than old-school builders
              </span>
            </div>
            <div className="graphs">
              <p className="title"> Smart Traffic</p>
              <p className="grade">+30%</p>
              <span className="sub-title">
                More conversions than  traditional A/B testing
              </span>
            </div>
          </div>
          <div className="fifth-content">
            <p className="brand-name">
              <img src={Img6} alt="logo" className="logos" />
            </p>
            <p className="brand-name">
              <img src={Img7} alt="logo" className="logos" />
            </p>
            <p className="brand-name">
              <img src={Img8} alt="logo" className="logos" />
            </p>
            <p className="brand-name">
              <img src={Img9} alt="logo" className="logos" />
            </p>
            <p className="brand-name">
              <img src={Img10} alt="logo" className="logos" />
            </p>
          </div>
        </div>
        {/* fifth componenet */}
        <div className="secont-content">
          More than just
          <span className="change-color"> landing pages</span>
        </div>
        <p className="secont-content-tagline">
          Yeah, Unbounce is a landing page builder—but we’re a lot more than
          that. See how our full AI-powered platform
          <br></br>
          can help you build and launch high-converting campaigns in a fraction
          of the time.
          <br></br>
          getting you better results with the same campaign budget.
        </p>
        <SliderPage />
      </div>
      {/* sixth component */}
      <div className="third-banner">
        <div className="third-block-container">
          <div className="third-block">
            <div className="img">
              <img
                src={Img11}
                alt="logo"
                width="150px"
                height="100px"
                className="third-block-img"
              />
            </div>
            <div className="third-block-title">Create your pages</div>
            <div className="third-block-title-sub-title">
              Make landing pages, popups, and sticky bars on your own. Smart
              Builder and Classic Builder help you create beautiful,
              high-converting marketing campaigns—no matter your skill level.{" "}
            </div>
          </div>
          <div className="third-block">
            <div className="img">
              <img
                src={Img11}
                alt="logo"
                width="150px"
                height="100px"
                className="third-block-img"
              />
            </div>
            <div className="third-block-title">… And write your copy</div>
            <div className="third-block-title-sub-title">
              Writer’s block is so… Uh, what’s the word? With Smart Copy, you
              can instantly generate, remix, and expand content for
              anything—like landing pages, ads, and emails—in seconds.
            </div>
          </div>
          <div className="third-block">
            <div className="img">
              <img
                src={Img11}
                alt="logo"
                width="150px"
                height="100px"
                className="third-block-img"
              />
            </div>
            <div className="third-block-title">… And optimize your traffic</div>
            <div className="third-block-title-sub-title">
              Improve your results with the click of a button. Smart Traffic
              routes your visitors to the best landing page for people like them
              and—on average—gets you 30% more sales and signups.
            </div>
          </div>
        </div>
      </div>
      {/* seventh compon */}
      <div className="end-component">
        <div className="center-line"></div>
        <div className="fourth-secont-content">
          Start building landing pages for free
        </div>
        <p className="fourth-subcontent" style={{ paddingBottom: "30px" }}>
          Get both Smart Builder and Classic Builder with your free 14-day
          trial. Cancel anytime.
        </p>
        <center>
          <a className="callbutton4">Start Building for Free</a>
        </center>
      </div>
    </div>
  );
}

export default LandingPage;
