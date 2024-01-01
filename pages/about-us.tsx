/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are BlogNewsGolf. This is an open source blog template which can help you start a simple static blog.`,
        keywords: 'webexpx, contact us, BlogNewsGolf13@gmail.com, next js blog template',
        author: 'Blog News Golf, PG GOLD Sport'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="https://https://blog-news-golf.glitch.me/" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/YT Logo.png" alt="https://blog-news-golf.glitch.me" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Blog News Golf
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        Welcome to our website.
                    </Text>

                    <Text p className='text-lg'>
                        A special place for golf enthusiasts and fans of this wonderful sport. We are proud to introduce an online space full of information, sharing experiences and passion about golf.
                    </Text>

                    {/* <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                About us
                            </Text>
                            <List type={ListType.disc}>
                                <li>Minimilist Template</li>
                                <li>Light and Dark theme</li>
                                <li>Default and Centered Layout</li>
                                <li>Maximize lighthouse score</li>
                                <li>Privacy Policy, Terms and Conditions page template</li>
                                <li>Integrate with <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS </a></li>
                                <li>Type checking TypeScript</li>
                                <li>SEO metadata, Open Graph tags with Next SEO</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Philosophy
                            </Text>
                            <List type={ListType.disc}>
                                <li>Minimal code</li>
                                <li>SEO-friendly</li>
                                <li>Production-ready</li>
                                <li>Easy to use</li>
                                <li>Sould be faster than Wordpress or any other CMS</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Requirements
                            </Text>
                            <List type={ListType.disc}>
                                <li>Node.js</li>
                                <li>NPM</li>
                                <li>Firebase for hosting</li>
                                <li>VS Code for editing</li>
                                <li>Imp VS Code plugins: <br /> <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">Path Intellisense</a> , <br /> <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noopener noreferrer">Tailwind CSS IntelliSense</a> </li>
                            </List>
                        </div>
                    </div> */}
                    <Text subtitle className='text-3xl font-medium'>
                        About us
                    </Text>
                    <Text p className='text-lg'>
                        We are a team of golf enthusiasts, from new players to those with many years of experience. Our website is home to useful golf articles, news, and information, from great shots to major events around the world.
                    </Text>
                    <Text p className='text-lg'>


                        <Text subtitle className='text-3xl font-medium'>
                            Main content
                        </Text>
                        <Text p className='text-lg'>
                            <b>Golf Blog: </b>

                            Updated daily articles on swing techniques, golf course strategies, and the latest trends in the golf world.
                            Share personal experiences, success stories, and challenges commonly encountered by the golf community.
                        </Text>
                        <Text p className='text-lg'>
                            <b>Golf News: </b>

                            Detailed and updated information about major tournaments, rankings, and outstanding players.
                            Live coverage of important events in the golf community.
                        </Text>

                        <Text p className='text-lg'>
                            <b>Golf Application: </b>

                            Developing mobile applications for golfers, from tracking scores to providing course instructions and playing tips.
                            Integrating the latest technology to provide the best experience for golfers.
                        </Text>
                        <Text p className='text-lg'></Text>

                        <Text subtitle className='text-3xl font-medium'>
                            Our target
                        </Text>
                        <Text p className='text-lg'>
                            We are committed to providing the golf community with accurate information, answering all questions, and creating a positive online space to share our passion. With the enthusiasm and experience of our team, we hope that our website will become a favorite destination for everyone who loves golf.
                        </Text>

                    </Text>
                    <Seperator />

                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            Join us in building a special golf community and developing this passion every day. Thank you for accompanying us on this golf journey!
                        </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs