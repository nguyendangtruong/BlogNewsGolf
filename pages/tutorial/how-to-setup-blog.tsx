/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";

const BlogSetup = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Golf's most underrated moments of 2023
                </Text>
                <Text className="text-2xl mt-5">
                    When we recall 2023, there will be plenty of things we remember from the year in golf, from the good (a drama-filled Ryder Cup), to the bad (PGA Tour vs. LIV saber-rattling) to the, well, unexpected (Michael Block). Conversely, there were a variety of things that happened over the last 12 months that were notable yet risk falling through the cracks of time. Each of the nine items listed below had its moment of newsiness, and each had the potential to be even more memorable (for better or worse) with even the slightest additional twist of fate. All are worth one more acknowledgement as the calendar prepares to turn and we get ready to ring in a new year.
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    1.  Sam Bennett’s Masters run
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <Text p >
                        No professional golf tournament makes as big deal about its amateur participants as the Masters.
                        That became evident once again last April when Sam Bennett, the 23-year-old reigning U.S.
                        Amateur champion, played his way into solo second place after 36 holes at Augusta National with back-to-back 68s and became a social media sensation.

                    </Text>
                    <Text p >
                        The fifth-year senior at Texas A&M showed off an impressive game while also carrying himself with grace in the wake of his personal story.
                        Bennett’s father, Mark, died in June 2021 after a battle with early onset Alzheimer’s disease.
                    </Text>


                    <Text p >
                        Sam kept the last note that Mark wrote to him and had the message, in his father’s handwriting, made into a tattoo on his arm as a tribute.
                        In rough weather over the weekend, Bennett came back to earth with rounds of 76-74, yet still finished T-16.
                        He didn’t get a prize money payout, but a business expert estimated his performance likely was worth high six figures in future endorsement earnings.
                        He also used that celebrity to also earn sponsor’s exemptions after turning pro in June, eventually earning conditional status on the Korn Ferry Tour for 2024.
                    </Text>

                </List>
                <Seperator dots />
                <Text subtitle className="mt-10">
                    2.  T-2 của Phil Mickelson tại Augusta
                </Text>
                {/* tạo trình bọc với margin left 25  */}
                <div className="pl-[25px]">
                    <Text p >
                        A three-time Masters champion, Mickelson had skipped playing the major most dear to him in 2022 amid the chaos of his eventual jump to LIV Golf and his controversial comments in the run-up. And he appeared to be on his best behavior this year at Augusta, reportedly not speaking at all during the Champions Dinner on Tuesday. But when his game looked rusty on Friday he still told the media he felt ready for a break through. Sure enough on Sunday, a final-round 65 allowed him to put a scare into Jon Rahm and the others in the hunt down the stretch.
                    </Text>
                    <Image className="mt-3" src="/public/imp_assets/tutorials/1682431547866.jpeg" alt="Phil Mickelson" size={ImageSize.DEFAULT} />

                    <Text p >
                        What’s truly remarkable about Lefty’s eventual T-2 finish are these stats:
                    </Text>
                </div>

                <List type={ListType.disc} className="mt-5">
                    <li>
                        He had finished in the top 10 in just one of his previous 20 major starts (his 2021 PGA win at Kiawah)
                    </li>
                    <li>
                        He didn’t finish in the top 50 in the year’s remaining three majors.
                    </li>
                    <li>
                        Just once in the rest of 2023 did Mickelson have a top 10 finish (T-9, LIV Golf Bedminster).
                    </li>
                    <li>
                        He was 52 when he posted the T-2.
                    </li>
                </List>
                <Seperator />
                <Text subtitle className="mt-10">
                    3.  Lilia Vu’s career turnaround
                </Text>
                <div className="pl-[25px]">
                    <Text p >
                        You hear stories about players struggling with their games and pondering whether the grind of pro golf is worth it. But those players are usually older than 26 and don’t necessarily have the track record of Vu, who was college golf’s player of the year at UCLA in 2018 and the Epson Tour player of the year in 2021. Still, the California native took her self-doubts that surfaced after quickly losing her LPGA card as a rookie in 2019 (and resurfaced again after a shaky return in 2022) and rechanneled them in 2023 to have a career year that included four wins on the LPGA Tour, including two majors, and a vault to No. 1 in the Rolex Women’s Rankings.
                    </Text>
                    <Text p>
                        Part of the inspiration to not give up came from the memory of her grandfather, Dinh Du, who fled Vietnam with his family on a homemade boat in 1982, eventually coming to America and laying the foundation for Vu’s future in golf.
                    </Text>

                    <Image className="mt-3" src="/public/imp_assets/tutorials/1700578436178.jpeg" alt="Lilia Vu’s" size={ImageSize.DEFAULT} />

                    <Text p >
                        When I get down on myself I kind of think, okay, grandpa didn't do all this for you to get upset over one shot," Vu explained earlier this year.
                    </Text>
                    <Text p >
                        Vu’s historic season made her the first American to win LPGA player of the year honors since 2014 and the first player to win multiple majors since 2021.
                    </Text>
                </div>

                <Seperator />


                <Text subtitle className="mt-10">
                    4.  LMatthew Jordan’s hometown moment at the Open Championship
                </Text>
                <div className="pl-[25px]">
                    <Text p >
                        In a parallel of sorts to Taylor’s big moment in Canada, Matthew Jordan became a local hero/legend thanks to his stellar play at the Open Championship. The 27-year-old Englishman who plays on the DP World Tour is a member at Royal Liverpool, so earning a spot in the championship during a 36-hole final qualifying earlier in July was an awfully big deal. He was given the honor of hitting the first tee shot during Thursday’s opening round, but played like much more than a ceremonial golfer when he posted a two-under 69 to find his way atop the early leaderboard.
                    </Text>
                    <Text p>
                        “I saw so many different members; it's hard to put a number on it,” he said on that Thursday. “To have that level of support and have people want you to do so well, it's just amazing. If I focus on each shot, then obviously it doesn't matter, and then afterwards with some of the holes like we described 1 and 17 and stuff like that, that can take over, and I don't mind showing emotion as long as I'm ready for the next one.”
                    </Text>

                    <Text p >
                        Jordan was more than a one-day wonder, finishing T-10 come Sunday (albeit nine shots behind runaway winner Brian Harman). He jumped inside the top 200 in the World Ranking and clinched a spot in the 2024 Open with his performance.
                    </Text>
                    <Image className="mt-3" src="/public/imp_assets/tutorials/1703862743809.jpeg" alt="Lilia Vu’s" size={ImageSize.DEFAULT} />

                    <Text p >
                        “To be able to play and perform under kind of the pressure that I felt all week,” Jordan said, “like I haven’t felt calm or normal really the whole time. Which is great because it lets me focus and it kind of makes every shot mean something.”
                    </Text>
                </div> <Seperator />
                
            </div>
        </PageLayout>
    )
}

export default BlogSetup