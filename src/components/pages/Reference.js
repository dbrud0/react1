import axios from "axios";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import Loader from "../basics/Loader";
import WrapTitle from "../basics/WrapTitle";
import ReferInfo from "../pages/ReferInfo";

class Reference extends React.Component {
  state = {
    isLoading: true,
    refers: [],
  };

  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get("https://webstoryboy.github.io/dothome1/refer.json");
    this.setState({ htmlRefer, isLoading: false });
    console.log(htmlRefer);
  };

  componentDidMount() {
    setTimeout(() => {
      this.getRefer();
    }, 1000);
  }

  render() {
    const { isLoading, htmlRefer } = this.state;
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div id="wrap" className="light">
            <Header />
            <Layout>
              <section id="referCont">
                <div className="container">
                  <WrapTitle text={["Reference", "book"]} />
                  <div className="refer-cont">
                    <div className="refer-table">
                      <ul>
                        {htmlRefer.map((refer) => (
                          <ReferInfo
                            key={refer.id}
                            id={refer.id}
                            title={refer.title}
                            desc={refer.desc}
                            category={refer.category}
                            property={refer.property}
                            element={refer.element}
                            tag={refer.tag}
                            version={refer.version}
                          />
                        ))}

                        {/* <li>
                          <Link href="#">
                            <span class="attr">align-items</span>
                            <span class="desc">
                              align-items 속성은 콘텐츠 내부의 정렬 상태를
                              정의합니다.
                            </span>
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
            <Footer />
          </div>
        )}
      </>
    );
  }
}

export default Reference;
