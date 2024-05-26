import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const Home = ({ pageInfo = { name: '' } }) => {

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scroll-smooth'>
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        <meta name="description" content="Ahmed Al-amodi - Front-End Developer" />
        <meta name="title" content="Ahmed Al-amodi - Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="og:title" content="Ahmed Al-amodi - Front-End Developer" />
        <meta name="og:description" content="I'm interested in building websites using React.js and Next.js" />
        <meta property="og:type" content="website"></meta>
        <meta name="og:url" content="ahmed-amodi.netlify.app" />
        <meta name="og:image" content="https://avatars.githubusercontent.com/u/80117376?v=4" />

        <meta name="og:site_name" content="Portfolio" />
        <meta name="og:localy" content="ar_YE" />
        <meta name="og:region" content="Hadramout, Yemen" />
        
        <link rel="icon" href="IMG_1220.jpg" />
      </Head>

      {/* header */}
      <Header />

      {/* hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* about */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>


      {/* contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-start'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src="IMG_1220.jpg"
              alt="IMG_1220.jpg"
              loading="lazy"
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
export default Home;

export const getStaticProps
  // : GetStaticProps<Props>
  = async () => {

    return {
      props: {
      },
      revalidate: 10,
    }
  }
