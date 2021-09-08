import React from 'react';
import Header from'../Header'   /*Header.js 컴포넌트 불러오기 */
import Layout from'../Layout' 
import Footer from'../Footer' 
import WrapTitle from '../basics/WrapTitle';

function AboutText({ title,desc,image}){
    return(
        <div className="about">
            <div className="about-img">
                <img src={image} alt={title}/>
            </div>
            <div className="about-txt">
                <h2>{title}</h2>
                <h2>{desc}</h2>

            </div>
        </div>
    )
}

const aboutMe = [
    {
      id: '1',
      title: '새로운 환경을 경험해보고 싶은 모험심.',
      desc: '새로운 것에 대한 호기심이 크다. 일찍이 여기저기 다양한 지역과 나라를 다니며 새로운 사람들과 어울리며 문화와 인간관계를 배웠고, 새로운 언어를 배우며 나를 한단계씩 성장시키는 것이 흥미롭고 욕심이 생긴다.',
      image: 'img/aboutImg01.jpg'
    },
    {
      id: '2',
      title: '열심히 할수록 기회는 따른다.',
      desc: '운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다. 복권에 당첨되는 사람들은 금방 돈을 허비하게 된다. 단지 행운만 좋았기 때문이다. 운을 만든 사람은 돈을 날려먹거나 헛되게 쓰지 않는다. 열심히 할수록 운은 나에게 온다.',
      image: 'img/aboutImg02.jpg'
    },
    {
      id: '3',
      title: '나에게 정직하다.',
      desc: '정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다. 다름 사람에게도 정직해야 하지만 그 무엇보다 나 자신한테 더 정직해야 한다.',
      image: 'img/aboutImg03.jpg'
    }
  ];


function About() {
    return (
        <div id="wrap" className="light">
            <Header info="none" />   
            <Layout>
                <section id="aboutCont">
                    <div className="container">
                        <WrapTitle text={["About","ME"]}/>
                        <div className="about-cont">
                            {aboutMe.map((txt) => (
                                <AboutText 
                                key={txt.id}
                                title={txt.title}
                                desc={txt.desc}
                                image={txt.image}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer/>
       </div>
    )
}
export default About;