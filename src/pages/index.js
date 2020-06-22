import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { IoIosArrowBack } from 'react-icons/io';
import exampleImg from "../images/example.png"
import chatbotImg from "../images/chatbot.png"
import codeImg from "../images/code.svg"
import conceptsImg from "../images/concepts.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="site-title text-center">Build your own chatbot with just enough JavaScript</h1>
    <a href="/" className="button example colour-5-bg">Live&nbsp;Example</a>
    <a href="/" className="button colour-1-bg" style={{margin:'0 auto 2rem'}}>Get&nbsp;Started</a>
    <div className="chat">
      <div className="bubble left">Would you like to learn how to code?</div>
      <div className="bubble right">I would, but it's so hard!</div>
      <div className="bubble right"><span role="img" aria-label="">🤯</span> Where do I start?</div>
      <div className="bubble right"><span role="img" aria-label="">🤯</span> Why does it feel so abstract?</div>
      <div className="bubble right"><span role="img" aria-label="">🤯</span> Why can't I understand any of it?</div>
      <div className="bubble left">You're right, it's hard...</div>
      <div className="bubble left">But we can make it easier!</div>
      <div className="bubble left"><span role="img" aria-label="">💪🧠</span> We just need to use some educational research and neuroscience <span role="img" aria-label="">🧠💪</span></div>
    </div>
    <h2 className="page-heading text-center intro">In this tutorial, we'll learn some JavaScript, following these concepts for effective learning.</h2>
    <section className="angled-block right short">
      <img src={exampleImg} className="chatbot-image" alt="" />
    </section>
    <section className="angled-block left">
      <span className="number">1</span>
      <img src={chatbotImg} className="image" alt="" />
      <div className="arrow left"><IoIosArrowBack /></div>
      <div className="text">
        <h3>Build something real</h3>
        <p>We'll use concrete examples to build a chatbot</p>
      </div>
    </section>
    <section className="angled-block right">
      <span className="number">2</span>
      <img src={codeImg} className="image" alt="" />
      <div className="arrow right"><IoIosArrowBack /></div>
      <div className="text">
        <h3>Write actual code</h3>
        <p>We'll manage cognitive load by learning just enough JavaScript</p>
      </div>
    </section>
    <section className="angled-block left">
      <span className="number">3</span>
      <img src={conceptsImg} className="image" alt="" />
      <div className="arrow left"><IoIosArrowBack /></div>
      <div className="text">
        <h3>Understand the concepts</h3>
        <p>We'll use (micro) interleaving to link together ideas</p>
      </div>
    </section>
    <h2 className="page-heading text-center outtro">If you enjoyed building this chatbot, and you are serious about coding, you might be a good fit for <span role="img" aria-label="">💻</span>Tech Collective!</h2>
    <a href="/" className="button colour-1-bg" style={{margin:'0 auto 2rem'}}>Apply Now</a>

  </Layout>
)

export default IndexPage
